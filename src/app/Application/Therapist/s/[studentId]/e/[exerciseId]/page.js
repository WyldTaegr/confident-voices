'use client'
import AudioRecording from "@/components/AudioRecording";
import { Storage } from "aws-amplify";
import { getExercise, getQuestions } from "@/util/api";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function ExerciseProgress({ params }) {

    params.studentId = params.studentId.replace(/\%40/g, "@");
    const email = params.studentId.replace(/[@.]/g, '_');
    
    const [questions, setQuestions] = useState([])
    const [audioUrls, setAudioUrls] = useState({});
    const [exerciseName, setExerciseName] = useState('...');

    const fetchAudio = async (questionID) => {
        try {
          const fileName = `${email}_${questionID}.webm`;
          
          const url = await Storage.get(fileName,{
            level: 'public',
            expires: 3600, // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
            contentType: ".webm",
            validateObjectExistence: true
          });
          return url;
        } catch (error) {
          return null;
        }
      };

      useEffect(() => {
        getExercise(params.exerciseId).then(exercise => setExerciseName(exercise.name));
        const fetchAllAudios = async (questions) => {
            const urls = {};
            for (const question of questions) {
                const url = await fetchAudio(question.id);
                if (url) urls[question.id] = url;
            }
            setAudioUrls(urls);
        }

        const fetchQuestions = async () => {
            const questions = await getQuestions(params.exerciseId);
            setQuestions(questions);
            fetchAllAudios(questions);
        };

        fetchQuestions();
      }, [params.exerciseId]);
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h4" gutterBottom>{exerciseName}</Typography>
            <Typography variant="h5" gutterBottom>Questions</Typography>
            <Grid container spacing={2}>
                {questions.map(question => (
                    <Grid item xs={12} md={6} lg={4} key={question.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    {question.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ margin: 2 }}>
                                {audioUrls[question.id] ? (
                                    <a href={audioUrls[question.id]}>Download the Recording</a>
                                ) : (<Typography variant="body1">No submissions yet.</Typography>)}
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}