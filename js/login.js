//  step 1: add click event handler with the submit button
 document.getElementById('btn-submit').addEventListener('click',function(){

    // step 2: get the email address inside the emai input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 a: set id on the html element 
    // step 3 b : get the element 
    // step 3 c: get the value from the element 
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;

    // do not verify email password on the client side 
    // step 4: verity email and password 

    if(email ==='sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }


    
 })