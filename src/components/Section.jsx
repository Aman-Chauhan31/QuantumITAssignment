import React from 'react'
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';

const Section = () => {
  return (
    <div className='section'>
        <div className='section1'>
      <img src={one} alt=''></img>
      </div>
      <div className='section2'>
        <img src={two} alt=''></img>
        <img src={three} alt=''></img>
      </div>
    </div>
  )
}

export default Section
