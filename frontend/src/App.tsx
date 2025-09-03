import { useEffect, useState } from 'react';
import './App.css'
import { backendService } from './services/backend';

function App() {
  const [backendStatus, setBackendStatus] = useState(false);

  useEffect(() => {
    backendService.checkBackendStatus().then((status) => {
      setBackendStatus(status);
    });
  }, []);

  return (
    <div className='bg-[theme(background-elevated)] h-screen w-screen justify-center items-center flex flex-col'>
      <p className='text-4xl font-bold text-[theme(text-primary)]'>Super Simple App BoilerPlate</p>
      <p className='text-2xl font-bold text-[theme(accent-primary)]'>Here is a cool color</p>

      { backendStatus ? (
        <p className='text-2xl font-bold text-[theme(accent-success)]'>Backend Status: Running</p>
      ) : (
        <p className='text-2xl font-bold text-[theme(accent-danger)]'>Backend Status: Not Running</p>
      )}
    </div>
  )
}

export default App
