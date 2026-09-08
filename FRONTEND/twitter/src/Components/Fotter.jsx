import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <div className='fotter'>
        <Link  to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default Fotter