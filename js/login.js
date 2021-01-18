firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
  } 
});

function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
      // Signed in 
      window.alert("Login: "+userEmail)
      window.location.replace("/indexmember.html")
      // ...
  })
  .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

