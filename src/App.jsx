/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import SpeedAtas from './components/SpeedAtas';
import SpeedBawah from './components/SpeedBawah';

function App() {
  const [loading, setLoading] = useState(true); // State untuk menandai apakah sedang dalam proses loading atau tidak
  const [speed, setSpeed] = useState(50);
  const [kilometers, setKilometers] = useState(0.4);

  // Menggunakan useEffect untuk mensimulasikan proses loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Setelah jeda waktu tertentu, set loading menjadi false untuk menampilkan konten utama
    }, 4000); // Mengatur jeda waktu loading (dalam milidetik), sesuaikan dengan kebutuhan Anda

    // Membersihkan timeout saat komponen unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? ( // Jika masih dalam proses loading, tampilkan pesan loading
        <div className="flex items-center justify-center bg-[url('./assets/bg.svg')] h-screen">
          <div className="text-white font-bungee">Loading...</div>
        </div>
      ) : (
        // Jika sudah selesai loading, tampilkan konten utama
        <div className="flex items-center justify-center bg-[url('./assets/bg.svg')] h-screen">
          <div className="w-[80%] border-white border-2 border-dashed">
            <SpeedAtas speed={speed} />
            <SpeedBawah kilometers={kilometers} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
