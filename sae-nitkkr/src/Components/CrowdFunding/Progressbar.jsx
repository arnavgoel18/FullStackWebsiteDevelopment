import './ProgressBar.scss'
import { useState, useEffect } from 'react';
//using e.g
// <ProgressBar bgcolor={'#32FFFF'} completed={55} />


const ProgressBar = (props) => {
  const [remainingTime, setRemainingTime] = useState(45 * 24 * 60 * 60); // time in seconds
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
      // setRemainingAmount(prevAmount => prevAmount - (800000 / (45 * 24 * 60 * 60))); // calculate the amount deducted per second
    }, 1000);

    return () => clearInterval(intervalId); // clear the interval on unmount
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
      <div className='text'>{`${completed}%`} completed</div>
      <div className='text'> <span style={{color:"red"}}>Remaining time: </span> {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</div>
      <div className='text' > &#8377; {800000-amountReceived} </div>


    </div>
          <br/>
          <br/>
          </>
  )
}

export default ProgressBar
