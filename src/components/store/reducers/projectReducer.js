
const initState ={
  projects:[
  //   { id:'1', title:'project one', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque deleniti dolorum provident culpa ab esse, ad, quisquam quasi, non odit dolores odio natus similique eligendi eius maxime asperiores exercitationem.' },
  //   { id:'2', title:'project two', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque deleniti dolorum provident culpa ab esse, ad, quisquam quasi, non odit dolores odio natus similique eligendi eius maxime asperiores exercitationem.' },
  //   { id:'3', title:'project three', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque deleniti dolorum provident culpa ab esse, ad, quisquam quasi, non odit dolores odio natus similique eligendi eius maxime asperiores exercitationem.' }
  // 
  ]
}

const projectReducer = (state=initState, action) =>{
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err)
      return state;
    default:
      return state;
  }
}
export default projectReducer