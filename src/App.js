import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product name = "camera" Rate = "45"></Product>
        <Product name = "Mobile" Rate = "405"></Product>
        <Product name = "laptop" Rate = "404"></Product>
        <Product name = "Watch" Rate = "450"></Product>
        <Counter></Counter>
        <User></User>
      <Person name = "rahim"></Person>
      <Person name = "karim"></Person>
      <Person name = "tahim"></Person>
      <Person name = "sahim"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    borderRadius: '10px',
    width: '400px'
  }
  return ( 
  <div style = {personStyle}>
    <h1>name : {props.name} </h1>
    <h3>im a web developer</h3>
  </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
 
  const handleIncrease = () => setCount(count + 1);
  
  const handleDecrease = () => setCount(count - 1);
  
  
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {handleIncrease }>Increase</button>
      <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}
function User (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setUsers(data))
  }, [])

  

  return(
    <div>
      <h3>Dynamic User {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '400px',
    width:'400px',
    float: 'left'
  }
  return(
    <div style = {productStyle}>
      <h2>Name: {props.name}</h2>
      <h1>Price: {props.Rate}</h1>
      <button>Buy now</button>
    </div>
  )
}
export default App;
