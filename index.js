var userData=[
    {
        username:"Brooke",
        password:"brooke"
    },
    {
        username:"Agina",
        password:"agina"
    }
]

function getData(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    // console.log(username + ' ' + password)
    for(i=0; i<userData.length; i++){
        if(username==userData[i].username && password==userData[i].password){
            console.log(username+" is logged in!!!")
            return
        }
    }console.log("incorrect username or password")

}