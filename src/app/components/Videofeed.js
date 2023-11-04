'use client'
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const Videofeed = () => {
  const webcamRef = useRef(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);

  const toggleWebcam = () => {
    setIsWebcamOn(!isWebcamOn);
  }

  const startWebcam = () => {
    setIsWebcamOn(true);
  };

  return (
    <div>
      <button onClick={toggleWebcam}>{isWebcamOn ? 'Turn off Webcam' : 'Turn on Webcam'}</button>
      {isWebcamOn && (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        </div>
      )}
    </div>
  );
};

export default Videofeed;
