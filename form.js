let modals = document.querySelectorAll('.modal');

function openAuthenForm(type) {
    for(var modal of modals) {
        modal.classList.add('active');
    }
    
    if(type == 'register') {
        let registerForm = document.getElementById('register-form');
        registerForm.style.display = 'block';
    }
    else if (type == 'login') {
        let loginForm = document.getElementById('login-form');
        loginForm.style.display = 'block';
    }
}


function switchLoginForm() {
    // ẩn form đăng kí
    let currentForm =  document.getElementById('register-form');
    currentForm.style.display = 'none';
    // hiện form đăng nhập
    let newForm = document.getElementById('login-form');
    newForm.style.display = 'block';
}

function switchRegisterForm() {
    // ẩn form đăng nhập
    let currentForm =  document.getElementById('login-form');
    currentForm.style.display = 'none';
    // hiện form đăng kí
    let newForm = document.getElementById('register-form');
    newForm.style.display = 'block';
}

function cancelModal() {
    // tắt modal
    for(var modal of modals) {
        modal.classList.remove('active');
    }
    // ẩn các form
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
}

    
    




