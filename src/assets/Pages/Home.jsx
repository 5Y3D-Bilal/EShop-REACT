import React from 'react'
import Card from '../compnents/Card';
import Navbar from '../compnents/NavBar';

function Home() {
  return (
    <div>
      <main>
        <Navbar/>
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" className='w-full vh-60' alt="Img" />
        <div style={{display:'flex'}}>
        <Card title="Bag" price="$99" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
        <Card title="oven" price="$9" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
        </div>
        <div style={{display:'flex'}}>
        <Card title="oven" price="$9" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
        <Card title="oven" price="$9" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
        <Card title="oven" price="$9" star="⭐⭐⭐⭐" image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"/>
</div>
      </main>
    </div>
  )
}

export default Home;
