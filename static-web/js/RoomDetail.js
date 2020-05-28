var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");
var room_detail_1 = document.getElementById("room-detail-1");
var room_detail_2 = document.getElementById("room-detail-2");

const arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

window.onload = (event) => {
    changeMenuStyle();
    var date = new Date();
    date_in.innerHTML = date.getDate();
    date_out.innerHTML = date.getDate();
    month_in.innerHTML = arrMonth[date.getMonth()];
    month_out.innerHTML = arrMonth[date.getMonth()];
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

function upNumber(element) {
    var object = element.parentElement;
    var number = object.getElementsByClassName("number");
    var dataDate = number[0].innerHTML;
    if (dataDate > 0) {
        number[0].innerHTML = dataDate - 1;
    }
}

function downNumber(element) {
    var object = element.parentElement;
    var number = object.getElementsByClassName("number");
    var dataDate = number[0].innerHTML;
    dataDate++;
    var month = object.getElementsByClassName("month");
    if (month.length > 0) {
        var dataMonth = arrMonth.indexOf(month[0].innerHTML);
        if (dataDate > dateOfMonth[dataMonth]) {
            dataDate = 1;
            dataMonth++;
            if (dataMonth > 11) {
                dataMonth = 0;
            }
        }
        month[0].innerHTML = arrMonth[dataMonth];
    }
    number[0].innerHTML = dataDate;
}

function changeTabRoomDetail(element) {
    var navbar = element.parentElement.parentElement;
    var active = navbar.getElementsByClassName("active");
    active[0].setAttribute("class", "nav-link");
    element.setAttribute("class", "nav-link active");
    if (element.getAttribute("id") != "tab-room-review") {
        room_detail_1.style.display = "block";
        room_detail_2.style.display = "none";
    } else {
        room_detail_1.style.display = "none";
        room_detail_2.style.display = "block";
    }
}