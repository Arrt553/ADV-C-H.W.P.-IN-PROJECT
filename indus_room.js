
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDNdVhgobYjDsppNgUnn3jMcYwmoPq3flY",
    authDomain: "kwitter-c893d.firebaseapp.com",
    databaseURL: "https://kwitter-c893d-default-rtdb.firebaseio.com",
    projectId: "kwitter-c893d",
    storageBucket: "kwitter-c893d.appspot.com",
    messagingSenderId: "265066622452",
    appId: "1:265066622452:web:905526344c3a732540dda1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    var room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name=",room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding RoomName"
    });
    window.location = "indus_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  console.log("room name" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   //row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row; 
   //End code
   });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "indus_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
