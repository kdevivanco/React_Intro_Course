// import logo from './logo.svg';
import './App.css';



// Props:
const Person = (props) => {
    // const person = {
    //     name: 'John',
    //     age: 25,
    //     location: 'USA'
    // }
    return (
        <div>
        <h1>name : {props.name}</h1>
        <h2>age : {props.age}</h2>
        <h3>location : {props.location}</h3>
        </div>
    )
}
const App  = () =>{

  return(
    <div>
        <Person name={"Mary"} age={25} location={'Peru'}></Person>
        {/*You dont have to use curly braces*/}
        <Person name={"John"} age={35} location={"Italy"}></Person>
      <div>
        <h1>My First React App</h1>
        <h2>My Second React App</h2>
{/*        close*/
}
        </div>
    </div>
    )


}

export default App;
