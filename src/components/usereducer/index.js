import React, { useState } from 'react';
import Modal from '../usereducer/Modal';
import { data } from '../../data';

const Index = () => {
  const [first_name, setFirst_Name] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (first_name) {
      setShowModal(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), first_name },
      ]);
      setFirst_Name('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal first_name={first_name} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((p) => {
        return (
          <div key={p.id}>
            <h4>{p.first_name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
