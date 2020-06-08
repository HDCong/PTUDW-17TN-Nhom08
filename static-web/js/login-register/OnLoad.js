var dropDownHTML = '';
// console.log(window.location.pathname)
window.onload = function() {
    if(checkCookie()) {
        document.getElementById('login-btn').innerHTML = dropDownHTML;
        
        var notify =document.getElementById('notify-guest')
        if(notify!=null)
            notify.style.display='none'
        document.getElementById('logout-btn').addEventListener('click', function() {
            document.cookie = 'session=' + ';' + 'expires=' + ";path=/";
            var pathLocation = (window.location).toString();
            console.log(pathLocation)
            // window.location.pathname='ahdhsahdas'
            // console.log(window.location)
            if(pathLocation.includes('User.html')==true){
                
                console.log('helo')
                pathLocation= pathLocation.replace('User.html','Home-page.html')
                console.log(pathLocation)
                window.location.replace(pathLocation)

            }
            else location.reload();
        });
    }
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }

    return "";
}

function checkCookie() {
    var user=getCookie("session");
    if(user != "") {
        dropDownHTML = createDropDown(user);
        return true;
    }

    return false;
}

function createDropDown(username) {
    var userDropDown = '<div class="btn-group">\
        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + username +'</button>\
        <div class="dropdown-menu">\
        <a class="dropdown-item" href="../pages/User.html">Profile</a>\
        <a class="dropdown-item" href="#">Booking history</a>\
        <div class="dropdown-divider"></div>\
        <button id="logout-btn" class="dropdown-item" href="#">Log out</button>\
        </div>\
        </div>';
    
    return userDropDown;
}