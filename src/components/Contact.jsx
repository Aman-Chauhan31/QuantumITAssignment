import React from 'react'

const Contact = () => {
  return (
    <div id ='contact'>
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type='text' placeholder='NAME'/>
        <input type='email' placeholder='EMAIL'/>
        <input type='number' placeholder='DATE'/>
        <input type='number' placeholder='TIME'/>
        <input type='number' placeholder='PEOPLE'/>
        <input type='submit' value='BOOK'/>
      </form>
    </div>
  )
}

export default Contact
