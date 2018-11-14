import React from 'react'
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const ProjectDetails = (props) => {
  const {project,auth} = props;
  if(!auth.uid) return <Redirect to='/signin'/>
  if(project){
    return (
      <div className='container section project-details'>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey-text darken-3">
            <div>posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="container center">
        <p>Loding Page....</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) =>{
  
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.project;
  const project = projects ? projects[id] :null
  return{
    project,
    auth: state.firebase.auth
  }
  
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'project'}
  ])
)(ProjectDetails);