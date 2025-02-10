import React, { useState } from 'react';
//import './App.css';
/*import Welcome from './components/welcome';
const App=()=>{
  return(
    <div style={{textAlign:'center',color:'green'}}>
    <Welcome name='Rahul' greeting='Hello!!'/>
    <Welcome name='sai' greeting='Hi!!'/>
    </div>
  )
}
export default App;*/
/*import Greeting from './components/Greeting';
function App(){
  const isLoggedIn=true;
  return(
    <div className='App'>
      <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;*/
/*const Fruitlist=()=>{
  const fruits=['apple','mango','orange']

  return(
    <div>
      <h1>Fruits List</h1>
      <ul>
          {fruits.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
  ))}
      </ul>
    </div>
  )
}
export default Fruitlist;*/
/*const Counter=()=>{
  const[count,setCount]=useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() =>setCount(count+1)}>Increment</button>
      <button onClick={() =>setCount(count-1)}>decrement</button>
    </div>
  );
};
export default Counter;*/
const ThemeToggler=()=>{
  const[theme,setTheme]=useState('light')
  const togglerTheme=()=>{
    setTheme(prevTheme=>(prevTheme=='light'?'dark':'light'))
  }
  return(
    <div style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white',textAlign:'center'}}>
      <h1> The Current Theme is {theme}</h1>
      <button onClick={togglerTheme}>togglerTheme</button>

    </div>
  )
}
export default ThemeToggler;