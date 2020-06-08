document.getElementById('reg').onsubmit = function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var email = document.getElementById('reg-email').value;
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
    var confirm = document.getElementById('reg-confirm').value;

    if(checkRegister(users,email,username)) {
        var user = {
            'email': email,
            'username': username,
            'password': password
        };
        
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Register Successfully');
        document.getElementById('bk-to-lg').click();
    }
}

function checkRegister(users, email, username) {
    for(var i=0; i<users.length; i++) {
        if(users[i]['email'] === email) {
            alert("Email exists");
            return false;
        }
        else if(users[i]['username'] === username) {
            alert("Username exists");
            return false;
        }
    }

    return true;
}
