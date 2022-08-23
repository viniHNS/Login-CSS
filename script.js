function changeSignToLogin(){

    signUp = document.querySelector(".btn-sign")
    login = document.querySelector(".btn-login")
    join = document.querySelector(".join")

    login.style.backgroundColor = "#1f1f1f"
    login.style.fontWeight = "bold"
    signUp.style.fontWeight = "normal"
    signUp.style.backgroundColor = "#6d6d6d"
    
    document.querySelector(".social-login").style.display = "none"
    document.querySelector("h3").innerHTML = "Login"
    document.querySelector(".or").style.display = "none"
    document.querySelector(".sign-in-box").style.display = "none"
    document.querySelector(".btn-confirm button").innerHTML = "Login" 
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
    document.querySelector("h3").innerHTML = "Sign up"
    document.querySelector(".or").style.display = "flex"
    document.querySelector(".sign-in-box").style.display = "grid"
    document.querySelector(".btn-confirm button").innerHTML = "Sign up" 
    document.querySelector(".join").style.display = "none"
}


