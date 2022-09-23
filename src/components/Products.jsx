import React from 'react'
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import Productbox from './Productbox';


const Products = () => {
  return (
    <div id='products'>
      <button className='atb'>ALWAYS TASTY BURGER</button>
      <h1> CHOOSE & ENJOY</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. fuga asperiores temporibus tenetur, blanditiis beatae!</p>
      <div className="a-container">
        <Productbox image = {s1} title = "Lorem Ipsum" />
        <Productbox image = {s2} title = "Lorem Ipsum" />
        <Productbox image = {s1} title = "Lorem Ipsum" />
      </div>
    </div>
  )
}

export default Products
