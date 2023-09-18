import React from "react";
import { Products } from './product';
import contents from './content';
// import './merchandise.css'
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
export function Merchandise() {
    return(
		<>
		    <NavBar/>
           <div className='app'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       id = {contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       timeLeft={contents.timeLeft}
                       rating={contents.rating}
                   />
              ))}
           </div>
           <Footer />
		</>
    )
}