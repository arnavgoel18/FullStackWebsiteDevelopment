import React from 'react'
import Navbar from '../../Components/NavBar/NavBar'
import Footerblack from '../../Components/Footer/Footer(black)/FooterBlack'
import Card_contain from '../Blogs/Card_contain/Card_contain'

function Blogs() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Card_contain/>
      <br/><br/>
      <Footerblack/>  
    </div>
  )
}

export default Blogs
