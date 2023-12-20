class User {
  constructor(name) {
    this.name = name;
  }
  addUsername(name) {
    this.name = name;
  }
}

let user = new User();

function getValue() {
  username = document.getElementById("username").value;
  console.log("Значение input: " + username);
  //user.addUsername(username);
  user = new User(username);
  console.log(user);
}
