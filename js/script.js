class User {
  constructor(name) {
    this.name = name;
  }
  addUsername(name) {
    this.name = name;
  }
}

let username;
let user1;
function getValue() {

  username = document.getElementById("username").value;
  console.log("Значение input: " + username);
  user1 = new User(username);
  console.log(user1)
}
