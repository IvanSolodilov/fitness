class User {
constructor(name) {
    this.name = name;
}
}

let username;
 function getValue() {
   
    var userinput = document.getElementById('username').value;
    console.log("Значение input: " + userinput);
    username = userinput;     
} ;
getValue();
let user1 = new User(username);



