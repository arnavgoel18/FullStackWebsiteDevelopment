import './ProgressBar.scss'

//using e.g
// <ProgressBar bgcolor={'#32FFFF'} completed={55} />

const ProgressBar = (props) => {
  const { bgcolor, completed } = props

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
  }

  return (
    <div className='progress_bar_container'>
      <div className='slider' style={fillerStyles}></div>
      <div className='text'>{`${completed}%`} completed</div>
    </div>
  )
}

export default ProgressBar
