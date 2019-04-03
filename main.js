
// Firebase Initialize
var config = {
  apiKey: "AIzaSyAXT-UnNRciX2C7wEqYb_i57IyXaAsYwO0",
  authDomain: "tekken-live-frame.firebaseapp.com",
  databaseURL: "https://tekken-live-frame.firebaseio.com",
  projectId: "tekken-live-frame",
  storageBucket: "tekken-live-frame.appspot.com",
  messagingSenderId: "61792486479"
};
firebase.initializeApp(config);

  //Database for Framedata

  const preDataTable =document.getElementById("dataTable");
  
  const dbRefObject=firebase.database().ref().child('dataTable');

  //Sync object changes

  dbRefObject.on("value",snap=> console.log(snap.val()));

  //Hide Frame Data 

  function hideFrames() {
    var x = document.getElementById("dataTable");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //

  function callGoogleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
         // ...
   }).catch(function(error) {
       // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
      // ...
   });
  }



  



















  