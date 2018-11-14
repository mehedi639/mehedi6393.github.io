import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authAction'

const cursor={
  cursor: 'pointer'
}

const SignedInLinks = (props) => {
  return (
    <div className='right'> 
        <ul>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><span style={cursor} onClick={props.signOut}>Log Out</span></li>
            <li><NavLink to='/' className='btn btn-floating teal darken-3'>{props.profile.initials}</NavLink></li>
        </ul>
    </div>
  )
}
const mapDispatchToProps =(dispatch) =>{
  return{
    signOut: () =>dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
