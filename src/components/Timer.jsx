import { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk mengubah format waktu menjadi hh:mm:ss
  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-black text-white py-2 px-3 rounded-lg">
          <h2>{formatTime(currentTime)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Time;
