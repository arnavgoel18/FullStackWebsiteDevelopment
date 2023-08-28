import React, {useEffect} from 'react'
import Navbar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Card_contain from '../Blogs/Card_contain/Card_contain'

function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Card_contain/>
      <br/><br/>
      <Footer/>  
    </div>
  )
}

export default Blogs
