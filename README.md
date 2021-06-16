# Practical approach to learn the basics of react hooks

- Code provided by https://johnsmilga.com

## This is a practice tutorial to learn React hooks

### 1. useState

- to preserve reactive data(data which changes over time) present inside a component

- it takes initial values of state (as parameter) and returns two values

        const [currentValue, setCurrentValue] = useState(initialValue);

  > Input - creates a state by passing an initial value(s) (initialValue)
  >
  > Returns - two values
  >
  > 1.  a variable which holds current value of state (currentValue)
  > 2.  a function which updates the current value of state (setCurrentValue)

### 2. useEffect

- allows us to deal with side effects(effect)

        useEffect(() => {
          effect
            return () => {
                cleanup
            }
        }, [input])

  > 1. effect (anything related to component/app)- by default runs after every re-render of component (or when state changes)
  > 2. cleanup (function) - to stop memory leak(like addition of eventlisteners) we have to cleanup resources else it will be a mess in large app
  > 3. input (dependency parameter) - an array of dependency based on which side effect will run

        [] - if it's empty it will run only once at initial rendering of component.

        [somestateVariable] - if present, effect will run if someVariable changes its state inside component

3. Conditional rendering using react hooks

- ...

4. useReducer

5. forms

All components are comment-out except one in App.js
