const firebaseConfig = {
    apiKey: "AIzaSyAf0_lYO3Q4Wwz2Wr51MmpRAJC1uKdRl0c",
    authDomain: "thalk-app.firebaseapp.com",
    projectId: "thalk-app",
    storageBucket: "thalk-app.appspot.com",
    messagingSenderId: "168429315437",
    appId: "1:168429315437:web:58a73372666e52bd8d2664",
    measurementId: "G-92M4VDKD8Z"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



