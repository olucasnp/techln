const password = document.getElementById("password")
const eye = document.getElementById("eye")

eye.addEventListener("click",function(){
    if(password.type === "text")
    {
        password.type = "password"
    }
    else{password.type = "text"}    
})
            