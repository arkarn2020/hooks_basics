import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  // using prevValue is one of the two methods to update the state of application
  //the other is in UseStateBasics component
  const complexIncrement = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h1>useState counter </h1>
      <section style={{ margin: '4rem 0' }}>
        <h2> regular counter</h2>
        <h1>{value}</h1>

        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => reset()}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => complexIncrement()}>
          + Delay
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
