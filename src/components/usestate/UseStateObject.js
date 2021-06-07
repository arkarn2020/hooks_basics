import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const changeMessage = () => {
    //...person
    //three dots as prefix is known as spread operator
    //we copy the entire values
    //then we decide which one to update/modify
    setPerson({ ...person, message: 'hello world' });
  };

  return (
    <>
      <h1>useState object</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button type="button" className="btn" onClick={() => changeMessage()}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
