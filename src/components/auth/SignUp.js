import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/authAction'

class SignUp extends Component {
  state = {  
    firstName: '',
    lastName:'',
    email: '',
    password:''
  }
  handleChange= (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    }) 
  }
  handleSubmit= (e)=>{
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError }= this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className='z-depth-0 white'>
          <h5 className='center'>Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text"  id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text"  id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password"  id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className='btn teal darken-3 z-depth-0'>Submit</button>
          </div>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);