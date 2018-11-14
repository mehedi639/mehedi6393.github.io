const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification =>{
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc =>console.log('added notify', doc))
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!  LI ???");
});

exports.projectCreated = functions.firestore
.document('project/{projectId}')
.onCreate(doc =>{
  const project = doc.data();
  const notification = {
    content: 'Added a new Notication',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification)
});

exports.joinedUser = functions.auth.user()
.onCreate(user =>{
  return admin.firestore().collection('users').doc(user.uid).get()
  .then(doc =>{

    const newUser = doc.data();
    const notification = {
      content: 'Joined the party',
      user: `${newUser.firstName} ${newUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification)
  })
});