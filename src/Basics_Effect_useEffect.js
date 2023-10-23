// import logo from './logo.svg';
// import logo from './logo.svg';
import { useState , useEffect} from 'react';

import './App.css';


//EFFECT
// UseEffect allows us to
// Do something on somekind of an effect or event
//Runs as soon as the component is rendered
//So this run as soon as app renders

const App  = () =>{
    const [counter,setCounter] = useState(0); // Called as a function - hook (function that starts  w use)


    useEffect(()=>{
        // counter = 100; VERY WRONG! NEVER MODIFY STATE OUTSIDE OF THE STATE FUNCTION
        setCounter(100)
        // console.log('useEffect');
        // alert('Reloaded');
        alert('Cant go lower than 80!')
    },[counter == 80]); //When the dependency array is empty, the code only happens at the initial load of the component
// you can also add a value in the dependency array

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
