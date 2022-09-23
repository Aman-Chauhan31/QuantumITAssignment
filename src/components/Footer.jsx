import React from 'react'
import burg from '../images/burg.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='side'>
        <div className='opac'>
      <div className='para'>
        <img src={burg} alt=''></img><span>BURGER HOUSE</span>
      </div>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit<br/> Hic reprehenderit laudantium voluptatum in numquam<br/> quas iure consequuntur, architecto vel. <br/>Provident laudantium assumenda eaque beatae est. Optio praesentium fugiat quisquam explicabo.</p>
      <p className='pp'>C COMPANY NAME 2020. ALL RIGHTS RESERVED</p>
      </div>
      <div className='location'>
        <p>Location: MAIN ROAD, BUILDING NAME, COUNTRY</p>
        <p>Mail: INFO@COMPANY.COM</p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
