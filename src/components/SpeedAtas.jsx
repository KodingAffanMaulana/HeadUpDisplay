/* eslint-disable react/prop-types */
import car from '../assets/car.png';
import Time from './Timer';

const SpeedAtas = ({ speed }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full h-80 rounded-t-lg pt-10 px-10 bg-gray-900 shadow-md overflow-hidden">
        <div className="flex-1 flex justify-center items-center bg-gray-800 text-white">
          <div>
            <span className="text-8xl font-bold text-[#00FF47]">{speed}</span>
            <span className="text-3xl "> km/h</span>
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-center items-center gap-5 ">
          <Time />
          <img src={car} alt="car" className="h-20" />
        </div>

        <div className="flex-1 flex justify-center items-center bg-gray-800 text-white gap-4 text-4xl font-bold">
          <div className="font-bold text-4xl">
            <div>D</div>
            <div>N</div>
            <div>R</div>
          </div>
          <div className="text-[#00FF47]">P</div>
        </div>
      </div>
    </div>
  );
};

export default SpeedAtas;
