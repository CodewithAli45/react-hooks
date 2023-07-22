# react-hooks
React: A javascript frontend library for creating user interface. It follow single page application SPA which means everything thing is written in single file.

The file type of react is jsx which stand for javascript XML, it means we can write HTML code in js in a single file.

React uses the concept of components. A component in react is a jsx file, which means write code once and can be reuse multiple times.

There are two ways of creating react components -
    1. Class based components
    2. Functional based components

Now a days, we almost use functional based components after introuding of React hooks.

React Hooks:- Hooks in react let us use the different features of componenets. There are various built in hooks present in the react and we can also create our own custom hooks.

    1. State Hooks
        state lets a component remember information like user input.
        there are two state hooks present in react
        (a) useState() - declares a state variable that can be updated direclty
        (b) useReducer() - declares a state variable that can be update with a logic present in reducer function

        userReduer()
        const [state, dispatch] = useReducer(reducer, initialArgs, init?)

        parameters:
        reducer -> the reducer function specifies how state gets updated. It must be pure, should take state and action as an arguments and should return the next state.
        initialArgs -> the value of initial state.
        init -> optional, this calculate the initial value if needed.

        returns:
        useReducer returns an array with exactly two values.
        1. the current state during first render, it sets to initialArgs
        2. the dispatch function that update the state to next value and trigger re-render.

        dispatch function()
        The dispatch function returned by useReducer is used to change the state to different value and trigger re-render of the component. It takes action as only arguments.
        dispatch function does not have a return value.
        

        


