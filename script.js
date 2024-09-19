const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    checkForm()
})

email.addEventListener("blur", () => {
    checkInputEmail()
})
username.addEventListener("blur", () => {
    checkInputUsername()
})

function checkInputUsername(){
    const usernameValue = username.value

    if(usernameValue === ''){
        errorInput(username, "Nome de usuário obrigatório!")
    }else{
        const formItem = username.parentElement
        formItem.className = "form-content"
    }    
}

function checkInputEmail(){//validações
    const emailValue = email.value

    if(emailValue === ''){
        errorInput(email, "O email é obrigatório!")
    }else{
        const formItem = email.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value

    if(passwordValue === ""){
        errorInput(password, "Senha obrigatória, no mínimo 8 caracteres")
    }else if(passwordValue.length < 8){
        errorInput(password, "Senha muito curta")
    }else{
        const formItem = password.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value
    const confirmationPasswordValue = passwordConfirmation.value

    if(confirmationPasswordValue === ''){
        errorInput(passwordConfirmation, "A confirmação de é obrigatório")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "Senha não são iguais")
    }else{
        const formItem = passwordConfirmation.parentElement
        formItem.className = "form-content"
    }
}

function checkForm(){ 
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItem = form.querySelectorAll(".form-content")

    const isValid = [...formItem].every((item) => { //percorre o array pra verificarar algum erro
        return item.className === "form-content"
    })
    
    if(isValid){
        alert("Cadastrado com sucesso!")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message

    formItem.className = "form-content error"
}