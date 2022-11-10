// javascript for form validation
function js(){
    var fname= document.getElementById("fname").value;
    var address= document.getElementById("address").value;
    var lname= document.getElementById("Lname").value;
    var email= document.getElementById("mail").value;
    var message= document.getElementById("result").value;
    var number= document.getElementById("number").value;
    if (fname=="" || address=="" || lname=="" || email=="" || message=="" || number==""){
        alert("Please input data in each field.")
    }
    else{
        alert("Thank you for contacting us. We will response soon :)")
    }
}