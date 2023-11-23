'use client'
import React, { useState, useRef } from 'react';
import { Storage } from 'aws-amplify';
import { createExerciseProgress } from '@/util/api';
import { Auth } from 'aws-amplify';
import * as mutations from '@/graphql/mutations' 

function AudioRecording({questionID}) {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null); // Add this line to store the media stream

  const startRecording = async () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => createExerciseProgress(user.attributes.email))
      .catch((err) => console.log(err));
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream; // Store the stream
      const recorder = new MediaRecorder(stream);
      mediaRecorder.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      recorder.onstop = async () => {
        setAudioChunks(async (prevChunks) => {
          const audioBlob = new Blob(prevChunks, { type: 'audio/webm' });
          const user = await Auth.currentAuthenticatedUser();
          console.log(user);
          const userName = user.attributes.email;
          const userEmail = userName.replace(/[@.]/g, '_'); // Sanitize email
          const fileName = `${userName}_${questionID}.webm`;
          try {
            await Storage.put(fileName, audioBlob, {
               contentType: 'audio/webm', // Adjust the content type based on your audio format
             });

            // Create a record in the S3Object table
            // Assuming you have a mutation setup for this
            const s3ObjectData = {
              name: fileName,
              key: fileName, // or any other unique identifier you'd like to use
              // You need to determine how to get this ID
            };
            await API.graphql({
              query: mutations.createS3Object,
              variables:{input: s3ObjectData},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            });
           } catch (error) {
             console.log('Error uploading file: ', error);
           }

          // Create a download link for the recorded audio
          const audioUrl = URL.createObjectURL(audioBlob);
          const a = document.createElement('a');
          a.href = audioUrl;
          a.download = fileName;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(audioUrl);
          document.body.removeChild(a);
      
          // Now reset the audio chunks
          return [];
        });
      
        setRecording(false);
    };
      

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) { // Check if the stream is available
      mediaStream.current.getTracks().forEach(track => track.stop()); // Stop each track
      mediaStream.current = null; // Reset the media stream ref
    }
  };

  const toggleRecording = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div>
      <button onClick={toggleRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default AudioRecording;