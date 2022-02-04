// import React, { Component, useEffect} from 'react'
// import NavBar from '../../Components/NavBar/NavBar'
// import AmbassadorLander from './AmbassadorLander/AmbassadorLander'
// import AmbassadorBenefits from './AmbassadorBenefits/AmbassadorBenefits'
// import AmbassadorRoles from './AmbassadorRoles/AmbassadorRoles'
// import RedirectToForm from './RedirectToForm/RedirectToForm'
// import RedirectToInfo from './RedirectToInfo/RedirectToInfo'
// import Footer from '../../Components/Footer/Footer(black)/FooterBlack'
// import FormDIV from './FormDIV/FormDIV'

// function Ambassador(){

//     useEffect(() => {
//         window.scrollTo(0, 0)
//       }, [])

//     return(
//         <>
//             <NavBar/>
//             <AmbassadorLander/>
//             <RedirectToInfo/>
//             <FormDIV/>
//             <AmbassadorBenefits/>
//             <RedirectToForm/>
//             <AmbassadorRoles/>
//             <RedirectToForm/>
//             <Footer/>
//         </>
//     )
// }

// export default Ambassador

/*-----------------------------------------------
This is the old ambassador page we made. 
The page that was completely separate. 
It had been redirected because we had already shred that link first. 
Maybe we can remove it now
-----------------------------------------------*/
import { Redirect } from 'react-router'
import React, { PropTypes } from 'react';

class Ambassador extends React.Component {

    render () {
        return <Redirect to='/autokriti?ambassador'/>;
  }
}

export default Ambassador
