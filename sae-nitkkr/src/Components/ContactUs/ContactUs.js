import React from 'react';
import './ContactUs.css';
import location from "../../Assets/ContactUs/lc.jpg"
import nx from "../../Assets/ContactUs/nx.jpg"
import ac from "../../Assets/ContactUs/ac.jpg"
import mail from "../../Assets/ContactUs/msg.jpg"

function ContactUS() {
    return (
        <>
         <h1 className="heading">CONTACT US</h1><br /><br />
            <div className="whole-body">
            <div className="details">
            <div className="abc" id="abcd" ><div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <a className="location" href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794">  <div className="tt"> Gol,NIT Kurukshetra</div></a>
                    </div>
                   <div className="abc"><div className="icon"> <i class="fa fa-envelope" aria-hidden="true"></i></div>
 <div className="tt"> saenitkurukshetra@gmail.com</div></div>
                   <br /><br />
                   <div className="abc"> <div className="iconimgnx"><img src={nx} alt="" /> </div> <div className="tt"> teamnitrox@gmail.com</div></div>
                   <br /><br />
                   <div className="abc"><div className="iconimgacc"> <img src={ac} alt="" /></div> <div className="tt"> teamaccelerons@gmail.com</div></div>
                   </div>

                <div className="container">
                    <br />
                    <div className="field"> <input type="text" alt="Name" required="required" /> <span> Name </span></div>
                    <div className="field"> <input type="email" name="email" id=""required="required" /><span> Email </span></div>
                    <div className="field"><input type="number" name="" id=""required="required" /><span> Phone </span></div>
                    <div className="field"><input type="text" name="" id=""required="required" /><span>Institute </span> </div>
                    <div className="field"> <textarea required="required" name="" id="" cols="65" rows="6"></textarea><span> Message </span></div>
                    <div className="field">Reason to contact us  <select name="--slect any one--" id="s1">
                        <option value="option">Want to write a blog</option>
                        <option value="option">Sponsership</option>
                        <option value="option">Brand Ambassador</option>
                        <option value="option">Fault in content on Website</option>
                    </select></div>
                    <div className="field">Person contacting us is <select name="--select any one--" id="s2">
                        <option value="option">Club Alumni</option>
                        <option value="option">Company Representative</option>
                        <option value="option">Student</option>
                        <option value="option">Proffesor</option>
                    </select></div>
                    <div className="button"><button> Submit </button></div>
                <div className="abc" id="abcd" ><img src={location} alt="" />
                    <a className="location" href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794">  <div className="tt"> Gol,NIT Kurukshetra</div></a>
                </div>
                <div className="abc"> <img src={mail} alt="" />  <div className="tt"> saenitkurukshetra@gmail.com</div></div>
                <br /><br />
                <div className="abc"> <img src={nx} alt="" />  <div className="tt"> teamnitrox@gmail.com</div></div>
                <br /><br />
                <div className="abc"> <img src={ac} alt="" /> <div className="tt"> teamaccelerons@gmail.com</div></div>
            </div>

            <div className="container">
                <br />
                <div className="field">Name: <div className="input"><input type="text" alt="Name"  /></div></div>
                <div className="field">Email:<div className="input"> <input type="email" name="email" id="" /></div></div>
                <div className="field">Mobile No.: <div className="input"><input type="number" name="" id="" /></div></div>
                <div className="field">Institute: <div className="input"><input type="text" name="" id="" /></div></div>
                <div className="field">Message: <div className="input"><input type="text" name="" id="" /></div></div>
                <div className="field">Reason to contact us:<div className="input"> <select name="--slect any one--" id="s1">
                    <option value="option">Want to write a blog</option>
                    <option value="option">Sponsership</option>
                    <option value="option">Brand Ambassador</option>
                    <option value="option">Fault in content on Website</option>
                </select></div></div>
                <div className="field">Person contacting us is: <div className="input"><select name="--select any one--" id="s2">
                    <option value="option">Club Alumni</option>
                    <option value="option">Company Representative</option>
                    <option value="option">Student</option>
                    <option value="option">Proffesor</option>
                </select></div></div>
                <div className="button"><button>Submit </button></div>
                </div>
            </div>

        </>
    )
}

export default ContactUS;