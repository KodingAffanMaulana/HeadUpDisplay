/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import lamp from '../assets/lamp.png';
import Battery from './Batery';

const SpeedBawah = ({ kilometers }) => {
  const [batery, setBaterry] = useState(50);
  return (
    <div className="flex justify-center ">
      <div className="flex w-full rounded-b-lg bg-gray-900 shadow-md overflow-hidden pb-10 px-10">
        <div className="flex-1 flex justify-center items-center text-white bg-gradient-to-b from-gray-800">
          <div className="font-bold rotate-0 flex justify-center items-center gap-10 ">
            <div>
              <Battery percentage={batery} />
            </div>
            <img src={lamp} alt="lamp" className="w-10 h-10" />
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-center items-center gap-5 ">
          <h1 className="text-red-500 font-bungee font-semibold">HUD Unila</h1>
        </div>

        <div className="flex-1 flex justify-center items-center bg-gradient-to-b from-gray-700  text-white gap-4 text-4xl">
          <p className="text-xl">{kilometers} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default SpeedBawah;