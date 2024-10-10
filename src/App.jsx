import { useState } from 'react';
import Form from './form';

export default function App() {
  const [isRegistered, setIsRegistered] = useState(true); // Tracks if showing login or register form

  return (
    <>
      <div className='container flex items-center justify-center'>
        <Form isRegistered={isRegistered} toggleForm={() => setIsRegistered(!isRegistered)} />
      </div>
    </>
  );
}

