import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // side effect - {default} useEffect() runs after every re-render of component
  // cleanup function - to stop memory leak(addition of eventlisteners) we have to cleanup the event listeners else it will be a mess in large app
  // second parameter - array of dependency based on which side effect will run, if it's empty it will run only once at the initial render

  // useEffect(() => {
  //   effect;          // side effect (default)
  //   return () => {
  //     cleanup;       // cleanup
  //   };
  // }, [input]);       // second parameter

  useEffect(() => {
    console.log('useeffect is called on main');
    if (value > 0) {
      document.title = `New messages(${value})`;
    }
    return () => {};
  }, [value]);

  useEffect(() => {
    console.log('hello on main branch in git');
    return () => {};
  }, []);

  console.log('component is rendered then on main');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
