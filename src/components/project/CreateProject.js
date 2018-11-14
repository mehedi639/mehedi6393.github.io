import React, { Component } from 'react';
import { connect} from 'react-redux'
import { createProject} from '../store/actions/projectAction'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = { 
    title: '',
    content: ''
  }
  handleChange= (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit= (e) =>{
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className=' z-depth-0 white'>
          <h5 className='center'>New Project</h5>
          <div className='input-field white'>
            <label htmlFor="title">Title</label>
            <input type="text"  id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field white">
            <label htmlFor="content">Content</label>
            <textarea  id="content" className="materialize-textarea" onChange={this.handleChange}/> 
          </div>
          <div className="input-field auto center">
            <button className='teal darken-1 btn'>Add Project</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps =(state) =>{
  
  return{
    auth:state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project)=>{dispatch(createProject(project))} 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);