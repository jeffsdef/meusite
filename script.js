const logo = document.getElementById('logo');

logo.style.width = '300px';

const homeLink = document.getElementById('home');
const compreLink = document.getElementById('compre');
const siteLink = document.getElementById('site');
const contatoLink = document.getElementById('contato');

homeLink.addEventListener('mouseover', () => {
    logo.src = 'home.png';
    logo.style.width = '120px';
});

compreLink.addEventListener('mouseover', () => {
    logo.src = 'compre.png';
    logo.style.width = '120px';
});

contatoLink.addEventListener('mouseover', ()=> {
    logo.src = 'contato.png';
    logo.style.width = '120px'
});

homeLink.addEventListener('mouseout', () => {
    logo.src = 'samsunglogo.png';
    logo.style.width = '300px';
});

compreLink.addEventListener('mouseout', () => {
    logo.src = 'samsunglogo.png';
    logo.style.width = '300px';
});

contatoLink.addEventListener('mouseout', ()=> {
    logo.src = 'samsunglogo.png';
    logo.style.width = '300px'
});

document.getElementById('Login').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (validateUsername(username) && validatePassword(password)) {
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";
        alert("Seja bem-vindo, " + username + "!");
    } else {
        errorMessage.textContent = "Nome de usuário ou senha inválidos.";
    }
});

function validateUsername(username) {
    return username.length >= 4;
}

function validatePassword(password) {
    return password.length >= 6;
}

function validarFormulario() {
    var email = document.getElementById("email").value;
    var erroEmail = document.getElementById("erroEmail");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        erroEmail.textContent = "Por favor, insira um email válido.";
        return false;
    } else {
        erroEmail.textContent = "";
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset();
        return true;
    }
}