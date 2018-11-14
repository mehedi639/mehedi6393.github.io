import React, { Component } from 'react';
import { signIn } from '../store/actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = { 
    email: '',
    password: ''
  }
  handleChange= (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit= (e) =>{
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } =this.props;

    if(auth.uid) return <Redirect to='/'/>
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className=' z-depth-0 white'>
          <h3 className='center'>Log In</h3>
          <div className='input-field'>
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field ">
            <label htmlFor="password">PassWord</label>
            <input type="password"  id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field auto center">
            <button className='teal darken-1 btn'>Log In</button>
          </div>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);