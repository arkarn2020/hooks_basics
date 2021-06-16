# Practical approach to learn the basics of react hooks

- Code provided by https://johnsmilga.com

## This is a practice tutorial to learn React hooks

### 1. useState

- to preserve reactive data (data which changes over time) present inside a component

- it takes initial values `initialValue` of any reactive data as parameter , creates a state `useState(initialValue)` and returns two values `currentValue` and `setCurrentValue` which can be combined in an array like this

        const [currentValue, setCurrentValue] = useState(initialValue);

  > Input - creates a state by passing `initialValue` as params
  >
  > Returns - two values
  >
  > 1.  a variable which holds current value of state `currentValue`
  > 2.  a function which updates the current value of state `setCurrentValue`

### 2. useEffect

- allows us to deal with side effects (effect)

        useEffect(() => {
          effect
            return () => {
                cleanup
            }
        }, [input])

  > - effect (anything wwith respect to app)
  >
  > by default runs after every re-render of component (or whenever state changes
  >
  > - cleanup (function) `OPTIONAL`
  >
  > to stop memory leak(like addition of eventlisteners) we have to cleanup resources else it will be a mess in large app

  > - input (dependency parameter) `OPTIONAL`
  >
  > an array of dependency based on which side effect will run

  >         [ ]

  > a) if it's empty effect will run only once at initial rendering of component.

  >         [somestateVariable]

  > b) if present, effect will run if somestateVariable changes its state/value inside component

3. Conditional rendering using react hooks

- ...

4. useReducer

5. forms

All components are comment-out except one in App.js
