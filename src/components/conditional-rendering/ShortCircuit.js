import React, { useState } from 'react';

// short circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* OR operator */}
      <h1>{text || 'john'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* AND operator */}
      {isError && <h1>Error...</h1>}
      {/* ternary operator */}
      {isError ? <p>there is an error...</p> : <h2>no error</h2>}
    </>
  );
};

export default ShortCircuit;
