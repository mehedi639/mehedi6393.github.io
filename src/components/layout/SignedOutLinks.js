import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLinks = (props) => {
  return (
    <div className='right'>
      <ul>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks

