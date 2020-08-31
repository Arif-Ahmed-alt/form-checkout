
const form=document.querySelector("form")
const press=document.querySelector(".btn");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const emailCheck=document.getElementById("emailHelp");
const passCheck=document.getElementById("passHelp");
const cardBody=document.querySelector(".card-body");
const h1=document.querySelector("h1")
const password="12345";
const email="arif@gmail.com"

form.addEventListener('submit', function(e){

    if(emailInput.value===email && passwordInput.value===password){
        
        showResponse("Correct!","alert alert-success");
        response(emailCheck,"email is correct","text-success");
        response(passCheck,"password is correct","text-success");

        // emailInput.value="";
        // passwordInput.value=""
    }else{

        if(emailInput.value===email && passwordInput.value!==password){
            showResponse("Something Wrong!","alert alert-danger");
            response(emailCheck,"email is correct","text-success");
            response(passCheck,"password was incorrect","text-danger");
        }else if(emailInput.value!==email && passwordInput.value===password){
            showResponse("Something Wrong!","alert alert-danger");
            response(emailCheck,"email was incorrect","text-danger");
            response(passCheck,"password is correct","text-success");
        }else{
        showResponse("Something Wrong!","alert alert-danger");
        response(emailCheck,"email was incorrect","text-danger");
        response(passCheck,"password was incorrect","text-danger");
        }
        
    }

    e.preventDefault();
    
});

function showResponse(msg,type){

    let div=document.createElement("div");
    div.appendChild(document.createTextNode(msg));
    div.classList=type;
    cardBody.insertBefore(div,h1);

    setTimeout(function(){
        div.remove()
    },3000)
};

function response(element,msg,type){

    element.innerText=msg;
    element.classList=type

}