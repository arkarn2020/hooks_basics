import React, { useState } from 'react';

const MultipleInputs = () => {
  //   const [firstName, setFirstName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [age, setAge] = useState('');
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });

  const [people, setPeople] = useState([]);

  // changing input data in real time
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  // adding new person to existing people then
  // clearing data inside input text
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };

  // filtering those people whose id doesn't match with id passed
  // updating new set of people data
  const handleRemove = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="first name"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((p) => {
          const { id, firstName, email, age } = p;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
              <button onClick={() => handleRemove(id)}>remove</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
