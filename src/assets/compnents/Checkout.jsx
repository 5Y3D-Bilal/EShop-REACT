import React from 'react'
import Navbar from './NavBar';
 import Card02 from './card02';
;


function Checkout() {
  return (
    <>
      <Navbar />
      <Card02 title="Bag" price="$99" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" />
    </>
  )
}

export default Checkout;
