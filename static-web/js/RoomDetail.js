var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");
var room_detail_1 = document.getElementById("room-detail-1");
var room_detail_2 = document.getElementById("room-detail-2");
var list_tab = document.querySelectorAll("#menu .nav-item .nav-link");

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
    var object = document.getElementById("list-tab-room-detail");
    var nav_item = document.getElementById("menu").getElementsByClassName("nav-item");
    var size = window.innerWidth;
    if (size <= 992) {
        object.style.display = "inline-block";
        for (i = 1; i < nav_item.length; i++)
            nav_item[i].style.display = "none";
    } else {
        object.style.display = "none";
        for (i = 1; i < nav_item.length; i++)
            nav_item[i].style.display = "inline-block";
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
    var content = element.innerHTML;
    for (i = 1; i < list_tab.length; i++) {
        if (list_tab[i].innerHTML != content) {
            list_tab[i].setAttribute("class", "nav-link");
        } else {
            list_tab[i].setAttribute("class", "nav-link active");
        }
    }
    if (element.innerHTML == "ROOM REVIEW") {
        room_detail_1.style.display = "none";
        room_detail_2.style.display = "block";
    } else {
        room_detail_1.style.display = "block";
        room_detail_2.style.display = "none";
    }
}