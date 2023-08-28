import React from "react";
import style from './Carousel.module.css'
import { useState, useEffect } from 'react'

export default function Carousel({imgNames}) {
  const [slideIndex, setSlideIndex] = useState(0)
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((preValue) => {
        if (preValue < imgNames.length - 1) {
          return preValue + 1
        } else {
          return 0
        }
      })
    }, 4000)

    return () => clearTimeout(timer)
  })

  return (
    <div>
      <img src={imgNames[slideIndex]} alt='not found' />
    </div>
  )
}