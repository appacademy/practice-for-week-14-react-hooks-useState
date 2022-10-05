import './UseState.css';
import {useState} from 'react';

const UseState = () => {
 // console.log(useState('light'))
 const [theme, setTheme] = useState('light');
 const [count,setCount] = useState(0)
  return (
    <div className = {theme}>
      <h1>UseState Component</h1>
      <button onClick = {() => setTheme('dark')}>
        Dark
        </button>
        <button onClick = {() => setTheme('light')}>
        Light
        </button>
        <h1>{count}</h1>
          <button onClick = {() => setCount(preCount => preCount +1)}>
        Increment
        </button>
      
        <button onClick = {() => setCount(preCount => preCount -1)}>
          Decrement
        </button>

    </div>
  );
};

export default UseState;