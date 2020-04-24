// function validateForm(inputtxt) 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// }
function validateForm(){
    console.log("shdsuajn");
    var name = document.myForm.name.value;
    var password = document.myForm.password.value;
    if(name=="" || name==null){
        alert("Name can't be empty");
        return false;
    }
    else if(password.length<6){
        alert("Invalid password");
        return false;
        }
    else{
        alert("Correct!");
        return true;
    }

}

// alert("works"); 
