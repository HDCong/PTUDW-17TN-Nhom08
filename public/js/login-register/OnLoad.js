var dropDownHTML = '';
var postfix = ["list", "contact", "about-us"]
// console.log(window.location.pathname)
window.onload = function() {
    // set active link in navbar
    var navBar = document.getElementById("content")
    var anchorElements = navBar.getElementsByTagName("a")
    var url = window.location.href
    if(url[url.length-1]=="/") {
        anchorElements[0].classList.add("active")
    }
    else {
        for(var i=0; i<postfix.length; i++) {
            if(url.indexOf(postfix[i]) != -1) {
                document.getElementById(postfix[i]).classList.add("active")
                break
            }
        }
    }   
}



window.onscroll = function() {
    setNavbarFixed();
};


var navbar = document.getElementById('content');
var sticky = navbar.offsetTop;

function setNavbarFixed() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.getElementsByClassName("main-content")[0].style.marginTop = `${navbar.clientHeight}px`;
        document.getElementById("content").style.boxShadow = '-1px 14px 37px -4px rgba(18,38,58,1)'
    }
    else {
        navbar.classList.remove("sticky");
        document.getElementsByClassName("main-content")[0].style.marginTop = '0px';
        document.getElementById("content").style.boxShadow = 'none'
    }
}