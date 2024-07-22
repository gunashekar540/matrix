import React from 'react';
import { RiNetflixFill } from "react-icons/ri";
import { TbBrandDisney } from "react-icons/tb";
import matrixImage from '../assets/matrix-image.jpg';

const MatrixResult = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={matrixImage}
        alt="Matrix Result"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 space-y-4">
        <a
          className="text-red-600 text-6xl"
          href="https://netflix-a9d92.web.app/"
          aria-label="Red Pill"
        >
          <RiNetflixFill />
        </a>
        <a
          className="text-blue-600 text-6xl"
          href="https://disneyplus-clone-cb4e4.web.app"
          aria-label="Blue Pill"
        >
          <TbBrandDisney/>
        </a>
      </div>
    </div>
  );
};

export default MatrixResult;
