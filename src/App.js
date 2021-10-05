import React from 'react';
import CounterApp from './components/CounterApp';
import PrimeraApp from './components/PrimeraApp';

function App() {
  return (
    <>
     <PrimeraApp saludo='Hola mundo' />
     <CounterApp value={22} />
    </>
  );
}

export default App;
