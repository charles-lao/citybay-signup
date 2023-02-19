const pwdField = document.querySelector("#pwd");
const confirmPwdField = document.querySelector("#confirm-pwd");
const pwdMessage = document.querySelector("#pwd-message");

const pwdInputs = document.querySelectorAll(".pwd");
pwdInputs.forEach((pwdInput) => {
    pwdInput.addEventListener('keyup', () => {


        if(pwdField.value == confirmPwdField.value){
            console.log('SUCCESS! content is: '+pwdField);
            pwdField.classList.remove("error");
            confirmPwdField.classList.remove("error");
            pwdMessage.style.visibility = "hidden";
        } else {
            pwdField.classList.add("error");
            confirmPwdField.classList.add("error");
            pwdMessage.style.visibility = "visible";
        }
    });
});