# Practical approach to learn the basics of react hooks

- Code provided by https://johnsmilga.com

## This is a practice tutorial to learn React hooks

1. useState

> - to preserve reactive data(data which changes over time) present in a component inside a state variable

> - It takes initial values of state (as parameter)and returns two values

- 1.  current value of state
- 2.  a function which updates the value of state

2. useEffect

- allows us to deal with side effects(effects)

- - 1. side effect - {default} useEffect() runs after every re-render of component
- - 2. cleanup function - to stop memory leak(addition of eventlisteners) we have to cleanup the event listeners else it will be a mess in large app
- - 3. second parameter - array of dependency based on which side effect will run, if it's empty it will run only once at the initial render

3. Conditional rendering using react hooks

- ...

4. useReducer

5. forms

All components are comment-out except one in App.js
