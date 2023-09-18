import React from "react";
import { useState } from "react";
import './viewBill.css'
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import db from '../../Firebase.js'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'

export default function ViewBill(){

    const allCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var tot_amount=0;
    allCartItems.map((item) => (
        tot_amount+=parseInt(item.quantity)*parseInt(item.price)
    ));
    
    if(allCartItems.length===0){
        return(
            <div className="app">
                <NavBar />
                <h1>Sorry, your cart is empty!</h1>
                <Footer />
            </div>
        );
    }

    function showNext(){
        document.querySelector('.cart-form-body').classList.add('logged')
    }
    function showPrev(){
        document.querySelector('.cart-form-body').classList.remove('logged')
    }

    return(
        <div className="bill_page">
            <NavBar />
            <div className="cart_bill">
                <h2 className="cart_bill_heading">Your Bill</h2>
                <div className="cart_bill_list">
                    <div className="image_head">Image</div>
                    <div className="name_head">Product name</div>
                    <div className="quan_head">Quantity</div>
                    <div className="price_head">Price</div>
                    {allCartItems.map((item,index) => (
                        <React.Fragment key={index}>
                            <img src={item.image} alt="product" className="bill_item_image"></img>
                            <div className="bill_item_name">{item.name}</div>
                            <div className="bill_item_quan">{item.quantity}</div>
                            <div className="bill_item_price">{item.price}</div>
                        </React.Fragment>
                    ))}
                </div>
                <h3 className="total_amount">Total amount: {tot_amount}</h3>
            </div>
            <div className="cart-form-body" id="form-body">
                <div className="Form-container">
                    <div className="field">
                        <label for="buyer_name">Full Name:</label>
                        <input
                            type='text'
                            alt='Name'
                            name='name'
                            id='buyer_name'
                            required='required'
                        />
                    </div>
                    <div className="field">
                        <label for="buyer_phone">Phone no.:</label>
                        <input
                            type='text'
                            name='phone'
                            id='buyer_phone'
                            required='required'
                        />
                    </div>
                    <div className="field">
                        <label for="buyer_email">Email: </label>
                        <input
                            type='email'
                            alt='email'
                            name='email'
                            id='buyer_email'
                            required='required'
                        />
                    </div>
                    <div className="field">
                        <label for="buyer_address">Address: </label>
                        <textarea
                            alt='address'
                            name='address'
                            id='buyer_address'
                            required='required'
                        ></textarea>
                    </div>
                    <div className="cart-form-buttons">
                        <div className="next-button">
                            <button
                                id="form-back"
                                className="buyer-next-back"
                                onClick={showPrev}
                            >    
                            Back
                            </button>
                        </div>
                        <div className="next-button">
                            <button id="buyer_button" onClick={submit}>
                                Pay now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

    async function submit(){
        var name = document.getElementById('buyer_name');
        var phone = document.getElementById('buyer_phone');
        var email = document.getElementById('buyer_email');
        var address = document.getElementById('buyer_address');

        const docData = {
            buyerName: name.value,
            buyerPhone: phone.value,
            buyerEmail: email.value,
            buyerAddress: address.value,
            buyerItems: allCartItems
        }
        validateForm(docData);
    }

    function validateForm(docData){
        if(docData.buyerName=="" || 
            docData.buyerPhone=="" ||
            docData.buyerEmail=="" ||
            docData.address=="")
        {
            alert("Please fill up the required fields!");
            document.getElementById('form-back').click();
        }
        else if(docData.buyerPhone.length!=10){
            alert("Please enter a valid phone number!");
            document.getElementById('form-back').click();
        }
        else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docData.buyerEmail)
        ) {
            alert("Please enter a valid email address.");
            document.getElementById('form-back').click();
        }
        else{
            setInfo(docData);
        }
    }

    function deletedata()
    {
        var name = document.getElementById("buyer_name");
        var phone = document.getElementById("buyer_phone");
        var email = document.getElementById("buyer_email");
        var address = document.getElementById("buyer_address");
        name.value=null;
        phone.value=null;
        email.value=null;
        address.value=null;
    }

    async function setInfo(docdata) {
        document.getElementById('buyer_button').disabled = true
        document.getElementById('buyer_button').style.backgroundColor = 'gray'
        var timestamp = String(new Date().getTime());
        await setDoc(doc(db, "merchandiseData", timestamp), docdata);
        alert("Congratulations! Your information saved successfully.");
        deletedata();
        document.getElementById('buyer_button').disabled = false
        document.getElementById('buyer_button').style.backgroundColor = '#E9910DFC'
        document.getElementById('form-back').click();
        // window.location.reload();
    }
}