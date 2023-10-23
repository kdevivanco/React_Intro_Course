// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';


// STATE
// State in react is a plain js object used by react to
// represent a piece of information about the component's current situation
// Completely managed by the component itself

const App  = () =>{
    const [counter,setCounter] = useState(0); // Called as a function - hook (function that starts  w use)
    //Event: action that can be detected by our app
    // Is triggered by the user
    // onClick

    //See all hooks in documentation - useState is one of them

    return(
    <div className="App">
        {/*Callback function: func w no name*/}
        {/*<button onClick={()=>setCounter(counter- 1)}>-</button>*/}
        <button onClick={()=>setCounter(prevCount => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        {/*<button onClick={()=>setCounter(counter+ 1)}>+</button>*/}
        <button onClick={()=>setCounter(prevCount => prevCount + 1)}>+</button>

     </div>
    );
}

export default App;
