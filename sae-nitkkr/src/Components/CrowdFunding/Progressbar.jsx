import './ProgressBar.scss'
import { useState, useEffect } from 'react';


const ProgressBar = (props) => {
  var [tester, setTester] = useState(true);
  const [remainingTime, setRemainingTime] = useState(1680805799); 
  
  async function getRemainingTimeInfo() {
    var date = new Date();
    var currentTime = Math.floor(date.getTime()/1000);
    setRemainingTime(remainingTime - currentTime);
    console.log(remainingTime + "yo");
  }

  if (tester == true) {
    window.addEventListener("load", getRemainingTimeInfo());
    setTester(false);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);
  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  const { bgcolor, completed, amountReceived } = props

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
  }

  return (
    <>
    <div className='progress_bar_container'>
      <div className='slider' style={fillerStyles}></div>
      <div className='text'>{`${parseInt(completed)}%`} completed</div>
      <div className='text'> <span style={{color:"red"}}>Remaining time: </span> {days} days, {hours} hours {/*, {minutes} minutes, {seconds} seconds*/}</div>
      <div className='text' > <span style={{color:"red"}}>Amount To Raise:</span> &#8377; {800000-amountReceived} </div>


    </div>
          <br/>
          <br/>
          </>
  )
}

export default ProgressBar
