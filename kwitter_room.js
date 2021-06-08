
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDUnw4JgdEw9kpr3-soGWxp8lB4rSCFWnY",
      authDomain: "kwitter-2-11b31.firebaseapp.com",
      databaseURL: "https://kwitter-2-11b31-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-11b31",
      storageBucket: "kwitter-2-11b31.appspot.com",
      messagingSenderId: "327644617415",
      appId: "1:327644617415:web:95a84f8674d14d736dfce2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;

function addRoom(){

      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomname(name){

      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

