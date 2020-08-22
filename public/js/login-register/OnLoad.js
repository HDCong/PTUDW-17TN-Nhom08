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