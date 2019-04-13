// Initialize Firebase

var config = {
    apiKey: "AIzaSyD5gK89NXNDQsF8gOlI897axy6KUL-42dw",
    authDomain: "farmersmarket-93b2a.firebaseapp.com",
    databaseURL: "https://farmersmarket-93b2a.firebaseio.com",
    projectId: "farmersmarket-93b2a",
    storageBucket: "",
    messagingSenderId: "244352521720"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  // When user is signed in  --------------------------------------------------------------

  firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        $('#signOut').show();

        var user = firebase.auth().currentUser;

        if(user != null){
            var email_id = user.email;
        
        }
      } else {
          $("#signOut").hide();

      }
  });

  //----------------------------------------------------------------
  //add listener to login button
  //login stuff

  document.getElementById("logIn").addEventListener('click', e=> {
    
    
   
      var userEmail = document.getElementById("title").value;
      var userPassword = document.getElementById("password").value;

     // alert("Welcome " + userEmail + "!");
     // console.log("User " + userEmail + " now signed in.");

     
      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {

        //hand errors here
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        console.log("Failed signin attempt from " + userEmail +".");
       

      });
  })

  document.getElementById("newAdd").addEventListener('submit', signIn);


  function signIn(e) {
      e.preventDefault();

      //document.querySelector(".alert2").style.display= "block";
    

   /*   setTimeout(function() {
          document.querySelector(".alert2").style.display= 'none';
          document.getElementById("alert2").style.display= 'none';
          
      },3000); */

    //  var modal = document.getElementById('alert2');
    /*  window.onclick = function(event) {
          if(event.target == modal) {
              modal.style.display = "none";
          }
      } */

      document.getElementById('newAdd').reset();
      
  }


  // End of login stuff

  // ---------------------------------------------------
  // Start of signup stuff
  document.getElementById("signUp").addEventListener('click', e=> {
    alert("Welcome to the Farmer's Market");

      var email = document.getElementById("title").value;
      var pass = document.getElementById("password").value;

      console.log("New user " + email + " has joined The Farmers Market!");
      firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

          console.log(error.code);
          console.log(error.message);
          //handle errors
         
      });
  })

  document.getElementById("newAdd").addEventListener('submit', signUp);

  //sign up form
  function signUp(e) {
      e.preventDefault();

      document.querySelector(".alert").style.display = 'block';
      

      //Hide alert after 3 seconds
     /* setTimeout(function() {
          document.querySelector(".alert").style.display = 'none';
          document.getElementById("alert").style.display = 'none';
          
      },3000); */

      //modal
    /*  var modal = document.getElementById("alert");
      window.onclick = function(event) { 
          if(event.target == modal) {
              modal.style.display = "none";
          }
      } */
      //clear form
      document.getElementById('newAdd').reset();

  }

  // End of signUP stuff

  // -------------------------------------------------------

  // Get current signed in user

  firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
          //user is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log("User " + email + " signed in.");
          alert("Welcome back " + email + "!");
      } else {
          //user is signed out.
          console.log("There is currently no user signed in.");
         
      }
  });

  document.getElementById("signOut").addEventListener("click", logout, false);

  function logout() {
      firebase.auth().signOut();
      console.log("User is now signed out.");
      alert("See you next time!.");
      $('#signOut').hide();
  }