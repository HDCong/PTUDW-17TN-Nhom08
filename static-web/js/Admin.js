var navbar = document.querySelector("ul");

function changeTabAdmin(element) {
    var current = navbar.getElementsByClassName("active")[0];
    current.setAttribute("class", "nav-link");
    document.getElementById(current.innerHTML).setAttribute("style", "display: none;");
    element.setAttribute("class", "nav-link active");
    document.getElementById(element.innerHTML).setAttribute("style", "display: block;");
}