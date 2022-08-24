const email = []
const password = []
const firstName = []
const lastName = []
let count = 0;

function changeSignToLogin(){

    signUp = document.querySelector(".btn-sign")
    login = document.querySelector(".btn-login")
    join = document.querySelector(".join")

    login.style.backgroundColor = "#1f1f1f"
    login.style.fontWeight = "bold"
    signUp.style.fontWeight = "normal"
    signUp.style.backgroundColor = "#6d6d6d"
    
    document.querySelector(".social-login").style.display = "none"
    document.querySelector(".btn-confirm .signin").style.display = "none"
    document.querySelector(".btn-confirm .login").style.display = "block"
    document.querySelector(".or").style.display = "none"
    document.querySelector(".sign-in-box").style.display = "none"
    join.style.display = "grid"
    document.querySelector("h3").style.marginBottom = "1rem"
    document.querySelector("h3").style.marginBottom = "1rem"
    join.style.margin = "0 6rem 1rem 6rem"
    join.style.gap = "8px"
    document.querySelector(".join input").style.padding = "6px"
    document.querySelector(".join input").style.border = "1px solid #000"
    document.querySelector(".join input").style.borderRadius = "8px"
    
}

function changeLoginToSign(){
    signUp = document.querySelector(".btn-sign")
    login = document.querySelector(".btn-login")

    login.style.backgroundColor = "#6d6d6d"
    login.style.fontWeight = "normal"
    signUp.style.fontWeight = "bold"
    signUp.style.backgroundColor = "#1f1f1f"

    document.querySelector(".social-login").style.display = "grid"
    document.querySelector(".btn-confirm .signin").style.display = "block"
    document.querySelector(".btn-confirm .login").style.display = "none"
    document.querySelector(".or").style.display = "flex"
    document.querySelector(".sign-in-box").style.display = "grid"
    document.querySelector(".join").style.display = "none"
}

function logIn(){
    emailInput = document.querySelector(".join .email-input").value
    passwordInput = document.querySelector(".join .password-input").value

    if (emailInput == ""){
        document.querySelector(".join .email-input").style.border = "1px solid #bb1b1b"
    }
    
    if (passwordInput == ""){

        document.querySelector(".join .password-input").style.border = "1px solid #bb1b1b"
    }

    if (emailInput != ""){
        document.querySelector(".join .email-input").style.border = "1px solid #000000"
    }
    
    if (passwordInput != ""){
        document.querySelector(".join .password-input").style.border = "1px solid #000000"
    }

    if (passwordInput != "" && emailInput != "" ){
        document.querySelector(".join .email-input").style.border = "1px solid #000000"
        document.querySelector(".join .password-input").style.border = "1px solid #000000"
    }

}

function createUser(){
    
    emailInput1 = document.querySelector(".sign-in-box .email-input").value
    passwordInput1 = document.querySelector(".sign-in-box .password-input").value
    firstNameInput1 = document.querySelector(".sign-in-box .first-name").value
    lastNameInput1 = document.querySelector(".sign-in-box .last-name").value

    if (firstNameInput1 == "") {
        document.querySelector(".sign-in-box .first-name ").style.border = "1px solid #bb1b1b"
    }
    else{
        document.querySelector(".sign-in-box .first-name").style.border = "1px solid #000000"
    }

    if (lastNameInput1 == "") {
        document.querySelector(".sign-in-box .last-name ").style.border = "1px solid #bb1b1b"
    }
    else{
        document.querySelector(".sign-in-box .last-name").style.border = "1px solid #000000"
    }

    if (emailInput1 == "") {
        document.querySelector(".sign-in-box .email-input ").style.border = "1px solid #bb1b1b"
    }
    else{
        document.querySelector(".sign-in-box .email-input").style.border = "1px solid #000000"
    }

    if (passwordInput1 == "") {
        document.querySelector(".sign-in-box .password-input ").style.border = "1px solid #bb1b1b"
    }
    else{
        document.querySelector(".sign-in-box .password-input").style.border = "1px solid #000000"
    }

    




    
}


