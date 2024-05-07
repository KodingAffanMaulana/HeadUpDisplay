/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SpeedAtas from './components/SpeedAtas';
import SpeedBawah from './components/SpeedBawah';

function App() {
  const [speed, setSpeed] = useState(50);
  const [kilometers, setKilometers] = useState(1000);
  return (
    <>
      <div className="flex items-center justify-center bg-[url('./assets/bg.svg')] h-screen">
        <di className="w-full border-white border-2 border-dashed">
          <SpeedAtas speed={speed} />
          <SpeedBawah kilometers={kilometers} />
        </di>
      </div>
    </>
  );
}

export default App;
