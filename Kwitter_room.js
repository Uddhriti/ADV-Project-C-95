// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDVRKLg7bLPcdVjlvxs312MG6uGCzL61xQ",
      authDomain: "let-s-chat-web-app-3fd60.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-3fd60-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-3fd60",
      storageBucket: "let-s-chat-web-app-3fd60.appspot.com",
      messagingSenderId: "283060589902",
      appId: "1:283060589902:web:043c6a964335f1bfeaba1f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome : " + user_name;
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");  
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }
function addroom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            use : "add room name"      });
            localStorage.setItem("room_name" , room_name);
            window.location = "Kwitter_page.html";
}
