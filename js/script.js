class User {
constructor(name) {
    this.name = name;
}
}

let username;
 function getValue() {
   
    let userinput = document.getElementById('username').value;
    console.log("Значение input: " + userinput);
    username = userinput;     
} ;

let user1 = new User(username);



