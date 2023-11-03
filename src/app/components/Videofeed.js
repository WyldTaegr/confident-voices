'use client'
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const Videofeed = () => {
  const webcamRef = useRef(null);
  const [isWebcamOn, setIsWebcamOn] = useState(false);

  const startWebcam = () => {
    setIsWebcamOn(true);
  };

  return (
    <div>
      <button onClick={startWebcam}>Turn On Webcam</button>
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
