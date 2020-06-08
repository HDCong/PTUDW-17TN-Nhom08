document.getElementById('log').onsubmit = function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var username = document.getElementById('log-username').value;
    var password = document.getElementById('log-password').value;

    if(checkLogin(users, username, password)) {
        setCookie("session", username, 30);
        document.getElementById('log-cancel').click();
        location.reload(true);
    }
    else {
        alert("Username or Password incorrect");
    }
}

function checkLogin(users, username, password) {
    for(var i=0; i<users.length; i++) {
        if(users[i]['username']===username) {
            if(users[i]['password']===password) {
                return true;
            }
        }
    }
    return false;
}

function setCookie(cookieName, username, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookieName + '=' + username + ';' + expires + ";path=/";
}
