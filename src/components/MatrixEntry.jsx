import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/background-video.mp4';

const MatrixEntry = () => {
  const navigate = useNavigate();

  const enterMatrix = () => {
    navigate('/video');
  };

  const exitMatrix = () => {
    window.close()
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
      <button
  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
  bg-opacity-30 backdrop-blur-lg bg-green-50 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
  onClick={enterMatrix}
>
  Enter the Matrix
</button>
<button
  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
  bg-opacity-30 backdrop-blur-lg bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
  onClick={exitMatrix}
>
  Exit the Matrix
</button>

      </div>
    </div>
  );
};

export default MatrixEntry;
