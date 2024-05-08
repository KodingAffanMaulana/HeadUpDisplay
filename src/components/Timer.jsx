import { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return time.toLocaleTimeString([], options).replace(/\./g, ' : ');
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-white py-2 px-3">
        <h2 className="font-medium text-xl lg:text-2xl">{formatTime(currentTime)}</h2>
      </div>
    </div>
  );
};

export default Time;
