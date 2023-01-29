import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const App=()=> {
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    setCounter(counter);
  },[])
  
  return (

    <div className="App">
      <button onClick={()=>setCounter((prevCount)=>prevCount-1)} style={{padding:'20px', backgroundColor:"red" ,borderRadius:"5px",fontSize:"20px",color:"white"}}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)} style={{padding:'20px', backgroundColor:"Blue" ,borderRadius:"5px",fontSize:"20px",color:"white"}}>+</button>
    </div>
  );
}

export default App;
