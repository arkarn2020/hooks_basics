import React, { useState } from 'react';
import { data } from '../../data';

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1>useState basics</h1>
      {people.map((person) => {
        const { id, first_name } = person;

        return (
          <div key={id} className="item">
            <h4>{first_name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear
      </button>
    </>
  );
};

export default UseStateBasics;
