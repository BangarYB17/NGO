function validate(){
    //Get Form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    //Error Spans
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    //clear previous message
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

   let isValid = true;

   //Validate Fields

   //name    
   if(name === ""){
    nameError.textContent="Please Enter Your Name.";
    isValid = false;
   }else if (name.length<=2){
    nameError.textContent="Please Enter Valid Name.";
    isValid = false;
   }

   //email
   if(email ===""){
    emailError.textContent="Please Enter Email Address.";
    isValid = false;
   }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    emailError.textContent="Please Enter Valid Email Address.";
    isValid = false;
   }

   //phone
   if(phone === ""){
    phoneError.textContent="Please Enter your Phone Number.";
    isValid = false;
   }else if(!/^[2-9]\d{9}$/.test(phone)){
    phoneError.textContent="Please Enter Valid Phone Number.";
    isValid = false;
   }

   //message
   if(message === ""){
    messageError.textContent="Please Write Message For us.";
    isValid = false;
   }else if(message.length <=50){
    messageError.textContent="Please Write Message in  Detail.";
    isValid = false;
   }
   
   if(isValid === true){
    alert("Message Send Successfully");
   }
   
   return isValid;

}