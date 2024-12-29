import React from 'react'
import ProgressBar from './Progressbar'

const Progressbars = () => {
  return (
    <div className='support-progressbar-box'>
        <ProgressBar value={80} name="Battery" backcolor="#FFDBD4" frontcolor="#FF0000"/>
        <ProgressBar value={70} name="Motor"/>
        <ProgressBar value={60} name="Motor Controller"/>
        <ProgressBar value={50} name="BMS"/>
    </div>
  )
}

export default Progressbars