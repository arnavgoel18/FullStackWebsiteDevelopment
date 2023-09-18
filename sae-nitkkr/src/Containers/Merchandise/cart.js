import React from "react";
import { useState } from "react";


export const addToCart = (product) => {
    console.log(product);
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart
    const productIndex = existingCartItems.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the cart, update its quantity
      existingCartItems[productIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const cartItem = { ...product, quantity: 1 };
      existingCartItems.push(cartItem);
    }

    // Update the local storage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
};