var firebaseConfig = {
      apiKey: "AIzaSyBa0n3L8EIvirU-5GfNRfaZ2emf6nSzJf0",
      authDomain: "astern-slowspeed.firebaseapp.com",
      databaseURL: "https://astern-slowspeed-default-rtdb.firebaseio.com",
      projectId: "astern-slowspeed",
      storageBucket: "astern-slowspeed.appspot.com",
      messagingSenderId: "1059005037572",
      appId: "1:1059005037572:web:69788ee03ce354ec310951"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
