import React from 'react';

// usestate folder
import UseStateBasics from './components/usestate/UseStateBasics';
import UseStateObject from './components/usestate/UseStateObject';
import UseStateCounter from './components/usestate/UseStateCounter';

// useeffect folder
// import UseEffectBasics from './components/useeffect/UseEffectBasics';
// import UseEffectCleanup from './components/useeffect/UseEffectCleanup';
// import UseEffectSecondArgument from './components/useeffect/UseEffectSecondArgument';

// conditional rendering
import MultipleReturns from './components/conditional-rendering/MultipleReturns';
function App() {
  return (
    <div className="container">
      {/* usestate folder components */}

      <UseStateBasics />
      <UseStateObject />
      <UseStateCounter />

      {/* useeffect folder components */}
      {/* <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectSecondArgument /> */}

      {/* conditional rendering */}
      <MultipleReturns />
    </div>
  );
}

export default App;
