/* eslint-disable react/prop-types */
import car from '../assets/car.png';
import Time from './Timer';

const SpeedAtas = ({ speed }) => {
  return (
    <div className="flex justify-center h-[70%]">
      <div className="flex w-full px-10 bg-gray-900 shadow-md overflow-hidden pt-10 lg:pt-20">
        <div className="flex-1 flex justify-center items-center bg-gray-800 text-white rounded-t-full pt-14 lg:pt-20">
          <div>
            <span className="text-7xl lg:text-9xl font-bold text-[#00FF47]">{speed}</span>
            <span className="text-xl lg:text-3xl "> km/h</span>
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-center items-center gap-5 pt-10 lg:pt-20">
          <Time />
          <img src={car} alt="car" className="h-20" />
        </div>

        <div className="flex-1 flex justify-center items-center bg-gray-800 text-white gap-4 text-3xl lg:text-7xl font-bold rounded-t-full pt-20">
          <div className="font-bold text-3xl lg:text-6xl lg:gap-5 flex flex-col">
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
