import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';

function App() {

  const[text,setText] = useState('');
  const[name,setName] = useState('ayush');

//  variation 1 -> Every render par ye kaam krega
  // useEffect(() => {
  //     console.log("UI rendering done")
  // });


  //variation 2 -> First render 
  // useEffect(() => {
  //   console.log("UI rendering done");
  // },[]);
  //second parameter dependencies ki list ko dikhaya hai usme hmne empty array pass kar diya hai 


  // variation 3 -> on first render + whenever dependency chnages 
  // useEffect(() => {
  //   console.log("Change observed");
  // },[name]);


  //variation 4 -> to handle unmounting of a component 
  useEffect(() => {
    //add event listener
    console.log("listener added");

    return () => {
      console.log("Listener removed");
    }
  },[text]);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
