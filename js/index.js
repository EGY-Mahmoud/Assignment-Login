// select inputs
var username = document.querySelector('#getUserName');
var mail = document.querySelector('#getMail');
var password = document.querySelector('#getPassword')

var setMail = document.querySelector('#setMail');
var setPassword = document.querySelector('#setPassword');


// select Buttons
var registerBtn = document.querySelector('#reg-btn');
var loginBtn = document.querySelector('#loginBtn');



var users = []
if (localStorage.getItem('userData')) {
    users = JSON.parse(localStorage.getItem('userData'))
} else {
    // console.log("7amada");

}


// ________________Events
registerBtn.addEventListener('click', function (e) {
    if (inputValidate(username) && inputValidate(mail) && inputValidate(password)) {

        var user = {
            getUsername: username.value,
            getMail: mail.value,
            getPass: password.value
        }
        // console.log(user);
        users.push(user);
        // console.log(users);
        localStorage.setItem('userData', JSON.stringify(users));
        clearInputs()
        window.alert('Register Done');
        window.location.href = 'index.html';


    }
})

// _________________Functions

function clearInputs() {
    username.value = '';
    mail.value = '';
    password.value = '';
}

function inputValidate(ele) {
    var inputsRegex = {
        getUserName: /^[A-Z][a-z]{2,6}.{2,8}$/, // Mahmoud
        getMail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //dmody773@gmail.com
        getPassword: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/ //Mm1234
    }
    // console.log(inputsRegex[ele.id], ele.id);

    if (inputsRegex[ele.id].test(ele.value)) {
        ele.classList.remove('is-invalid')
        ele.classList.add('is-valid')
        ele.nextElementSibling.classList.add('d-none')

        return true

    } else {
        ele.classList.add('is-invalid')
        ele.classList.remove('is-valid')
        ele.nextElementSibling.classList.remove('d-none')
        return false
    }

}

function validLocalStorage() {

    var mail = document.querySelector("#setMail").value;
    var password = document.querySelector("#setPassword").value;
    console.log(users[0].getMail);
    console.log(users[0].getPass);

    console.log(mail, password);
    if (mail == users[0].getMail && password == users[0].getPass) {
        window.location.href = 'home.html';


    } else {
        window.alert('if you forget your mail look at console XD Hamada Helal Zero Security');

    }



}
// _________________logout

    


function toLogout() {
    window.alert('Ray7 Feen!');
    window.alert('Ya3aaaaaaaaaaaaaaaaam!');
    window.location.href = 'index.html';
}


