
var user = document.querySelector(".user")
var email = document.querySelector(".email")
var emailsgin = document.querySelector(".email-sgin")
var passsgin = document.querySelector(".pass-sign")
var pass = document.querySelector(".pass")
var submit = document.querySelector(".submit")
var login = document.querySelector(".login")
var par = document.querySelector(".par")
var username = document.getElementById("username")
var logout = document.getElementById("logout")

if(logout != null){
    logout.addEventListener("click" , function(){
        location.href = "sign.html"
        localStorage.removeItem ("name")
    })
}


var allarray =[]

if (localStorage.getItem("allarray") == null) {
    allarray =[];
}

else{
    allarray = JSON.parse(localStorage.getItem ("allarray"))
}
function savedata() {
    


if (user.value ===""  || email.value === "" || pass.value === "") {
    par.innerText = "All input required" ;
    par.classList.add("red");
}




else if(user.value !==null  && email.value !== null && pass.value !== null && validmail()) { 
    var element ={
        user:user.value,
        email:email.value,
        pass:pass.value,
    }
    par.innerText = "success";
    par.classList.remove = "red";
    par.classList.add = "green";
    allarray.push(element);
    localStorage.setItem("allarray", JSON.stringify(allarray));
    window.location.href="sign.html";

}



else{
    par.innerText="incoreect email"
    par.classList.add("red")
}

}

if (submit != null ) {
    submit.addEventListener("click" , function () {
       savedata();
        
    });
    
}

if (login != null) {
    login.addEventListener("click" ,function () {
        checkperson()
    } )
}

function checkperson() {
    if (emailsgin.value != "" || passsign.value != "") {
        par.innerHTML = "";
        if (check()) {
            location.href="home.html"
        }
        else {
            par.innerText = "incorrect is email or password";
            par.classList.add("red")
        }
    }
        else{
            par.innerText = " All inputs required"
            par.classList.add("red")
        }
    
}

function check() {
    for (var i = 0; i < allarray.length; i++) {
        if (allarray[i].email.toLowerCase() === emailsgin.value.toLowerCase() && allarray[i].pass.toLowerCase() === passsgin.value.toLowerCase()) {
            localStorage.setItem("name",JSON.stringify(allarray[i].user))
            return true;
        }
        
    }
}


function Adname() {
        var usernamee =JSON.parse(localStorage.getItem ("name"));
        username.innerHTML = `welcom ${usernamee}`
}



function validmail() {
    var emailregex =/^[\w-]+@([\w-\.]){2,}$/;
    var testing = emailregex.test(email.value);
    if(testing === true ){
        email.style.color="green";


        return true ;
    
    }

    else{
        return false;
    }
}

