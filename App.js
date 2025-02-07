import React from 'react';
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
const Fruitlist=()=>{
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
export default Fruitlist;