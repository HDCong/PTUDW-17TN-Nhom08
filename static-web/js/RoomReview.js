window.onload = (event) => {
    changeMenuStyle();
}

$(window).resize(function() {
    changeMenuStyle();
})

function changeMenuStyle() {
    var object = document.getElementById("menu-text");
    var size = window.innerWidth;
    if (size <= 992) {
        object.style.display = "inline-block";
    } else {
        object.style.display = "none";
    }
}