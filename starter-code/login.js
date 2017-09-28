console.log("login.js loaded");

var userLogin = {
  username: "octocat",
  password: "abc"
}

function login (){
  var inputUsername = prompt("what is your username?")
  if(inputUsername === userLogin.username){
    var inputPassword = prompt(`Enter password for user ${inputUsername}`)
    var i = 1;
    while(i<4){
      if(inputPassword !== userLogin.password && i !== 3){
        inputPassword = prompt("wrong password, try again")
        i++;
      } else if(inputPassword === userLogin.password){
        alert("you are logged in!")
        break;
      } else {
        alert("You have entered the wrong password too many times. Contact support.")
        break;
      }
    }
    // for(i = 1; i < 3; i++){
    //   if(inputPassword === userLogin.password){
    //     alert("you are logged in!")
    //     break;
    //   } else {
    //     inputPassword = prompt("wrong password, try again");
    //   }
    // }

  } else { alert("sorry, that username does not exist")}
}

// login()