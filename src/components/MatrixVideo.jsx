import React from 'react';
import { useNavigate } from 'react-router-dom';
import matrixVideo from '../assets/matrix-video.mp4';

const MatrixVideo = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/result');
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black ">
      <video
         className="absolute top-0 left-0 w-full h-full lg:object-cover sm:top-1/2 sm:transform sm:-translate-y-1/2 "
        src={matrixVideo}
        autoPlay
        onEnded={handleVideoEnd}
      ></video>
    </div>
  );
};

export default MatrixVideo;
