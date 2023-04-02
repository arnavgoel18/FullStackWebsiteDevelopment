import React from 'react'
import './style.css'
import { BsLinkedin } from 'react-icons/bs'
import { GiGoat } from 'react-icons/gi'

export default function Card2({ name, amount }) {
  return (
    <div className='top-contri-container contri-card-border'>
      <div className='top-contri-out'>
        {' '}
        <div
          className='flex flex-col align-center justify-center'
          style={{ margin: '0.2rem 0.3rem' }}
        >
          <div className='contri-image contri-image2'>
            <GiGoat />
          </div>
          <div className='margin-top-1'> {name}</div>
          <div className='margin-top-1'>₹ {amount}</div>
          <a
            href='#'
            className='flex linkedin_icon_2 margin-top-1 justify-end'
            style={{ width: '100%' }}
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
