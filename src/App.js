import React, {  useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App(){
  const [render1,setRender1] = useState(false);
  const arr=["http://www.clker.com/cliparts/m/v/m/J/4/V/dice-1-md.png","http://www.clker.com/cliparts/a/Y/E/o/z/t/dice-2-md.png","http://www.clker.com/cliparts/M/e/P/O/L/b/dice-3.svg","http://www.clker.com/cliparts/r/z/d/a/L/V/dice-4-md.png","http://www.clker.com/cliparts/e/y/7/h/W/K/dice-5-md.png","http://www.clker.com/cliparts/l/6/4/3/K/H/dice-6-md.png"];
  const [img1,setImg1]=useState(arr[0]);
  const [img2,setImg2]=useState(arr[0]);
  const [winner,setWinner]=useState("");
  const  rooldice=()=>{
    setRender1(true);
    var roll1=Math.floor(Math.random()*6);
    var roll2=Math.floor(Math.random()*6);
    setImg1(arr[roll1]);
    setImg2(arr[roll2]);
    if(roll1===roll2){
      setWinner("Draw Match")
      console.log(true)
    }
    else{
      setWinner(roll1>roll2?"Player 1 Won":"Player 2 Won")
      console.log(roll1,roll2);
    }
    }

    return (
      <div className="total">
        <h2 id="name">{winner||"Roll Dice"}</h2>
        <div className="menu">
          <div id="dice1">
            <h3>Player1</h3>
      {
        render1 ?
          <div className='con'><img src={img1} alt="" /></div> : <div className='con'><img src={arr[0]} alt="" /></div>
      }
          </div>
          <div id="dice2">
            <h3>Player2</h3>
            {
              render1 ?
              <div className="con"><img src={img2} alt="" /></div> : <div className='con'><img src={arr[0]} alt="" /></div>
            }
          </div>
        </div>
        <div className="button">
          <button onClick={rooldice}>Roll Dice</button>
        </div>
      </div>
    );
}

export default App;
