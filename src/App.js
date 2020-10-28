import React from 'react';
import CountProvider from './components/contexts/countContext';
import Button from './components/elements/buttonComponent';
import Counter from './components/elements/counterComponent';
import Mirror from './components/elements/mirrorComponent';
import HeaderLayout from './components/layouts/headerComponent';

function App() {
  return (
    <>
      <HeaderLayout />
      <CountProvider>
        <div className="App">
          <Counter />
          <hr></hr>
          <Mirror />
          <hr></hr>
          <Button />
        </div>
      </CountProvider>
    </>
  );
}

export default App;
