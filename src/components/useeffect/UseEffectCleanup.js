import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('use effect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');

  return (
    <>
      {/* resizing of window in real time */}
      <h2>window - {size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
