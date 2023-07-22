import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'increment_age':
            return {
                name: state.name,
                age: state.age + 1
            }
        case 'changed-name' :
            return {
                name: action.nextname,
                age: state.age
            }
        default:
            return state;
    }
}

const initialValue = {
    name: 'Tylor Swift',
    age: 23
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    function handleInputChange(e){
        e.preventDefault();
        dispatch({
            type: 'changed-name',
            nextname: e.target.value,
        })
    }

    function handleSubmitButton(){
        dispatch({type: 'increment_age'})
    }

    return (
        <div>
            <input type="text" name="" id="" value={state.name} onChange={handleInputChange } />
            <button onClick={handleSubmitButton}>Increment Age</button>
            <p>Hello, {state.name}, Your age is: {state.age}</p>
        </div>
    );
}

export default App;
