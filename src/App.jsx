/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import SpeedAtas from './components/SpeedAtas';
import SpeedBawah from './components/SpeedBawah';

function App() {
  const [loading, setLoading] = useState(true);
  const [speed, setSpeed] = useState(50);
  const [kilometers, setKilometers] = useState(0.4);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center bg-[url('./assets/bg.svg')] h-screen">
          <div className="text-white font-bungee">Loading...</div>
        </div>
      ) : (
        <div className="landscape-container">
          <div className="flex items-center justify-center bg-[url('./assets/bg.svg')]">
            <div className="w-full border-white border-2 h-screen border-dashed">
              <SpeedAtas speed={speed} />
              <SpeedBawah kilometers={kilometers} />
            </div>
          </div>
          <div className="landscape-message bg-black text-white flex justify-center items-center">
            <p>Please rotate your device to landscape mode to view this content.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
