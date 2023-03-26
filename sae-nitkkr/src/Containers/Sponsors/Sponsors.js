import React from 'react'
import { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Become_sponsor from '../../Components/Become_sponsor/Become_sponsor'
import Sponsicompanies from '../../Components/Sponsicompanies/Sponsicompanies'


function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
      
    <div>
      <NavBar/>
      <Become_sponsor/>
      
      <Sponsicompanies/>
      <Become_sponsor/>
     
      <Footer/>
    </div>
  )
}

export default Sponsors
