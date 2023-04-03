import React from 'react'
import './style.css'
import { BsLinkedin } from 'react-icons/bs' 
import { AiOutlineUser } from 'react-icons/ai'

export default function Card1({name,amount}) {
  return (
    <div className='contri-card-border flex m-auto align-center'>
      <div className='flex align-center contri-card-text' style={{ margin: '0.2rem 0.3rem' }}>
        <div className='contri-image'>
          <AiOutlineUser />
        </div>
        <div style={{ marginLeft: '0.7rem' }}> {name} </div>
      </div>

      <div>₹ {amount}</div>
      <a
        href='#'
        className='flex linkedin_icon'
        style={{ marginRight: '0.7rem' }}
      >
        <BsLinkedin />
      </a>
    </div>
  )
}
