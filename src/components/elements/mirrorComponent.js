import React from 'react';
import { useCount } from '../contexts/countContext';

function Mirror() {

   const {count}  = useCount();

  return (
      <>
        Mirror number:<h3>{count}</h3>
      </>
  );
}

export default Mirror;  