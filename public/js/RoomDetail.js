var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");
var room_detail_1 = document.getElementById("room-detail-1");
var room_detail_2 = document.getElementById("room-detail-2");
var list_tab = document.querySelectorAll("#menu .nav-item .nav-link");
const arrMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dateOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getDiff() {
  var date1 = $("#dp1").datepicker("getDate");
  var date2 = $("#dp2").datepicker("getDate");
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  count_nights.innerHTML = diffDays
}
$(document).ready(function () {
  changeMenuStyle();
  var day1 = $("#dp1").datepicker("getDate");
  var day2 = $("#dp2").datepicker("getDate");
  date_in.innerHTML = day1.getDate();
  date_out.innerHTML = day2.getDate();
  month_in.innerHTML = arrMonth[day1.getMonth()];
  month_out.innerHTML = arrMonth[day2.getMonth()];
  getDiff()
  document.getElementsByClassName("booking-item")[0].addEventListener("click", function () {
    console.log('check in click')
    $('#dp1').focus()
  });
  document.getElementsByClassName("booking-item")[1].addEventListener("click", function () {
    console.log('check out click')
    $('#dp2').focus()
  });
});

$(window).resize(function () {
  changeMenuStyle();
});

function changeMenuStyle() {
  var object = document.getElementById("list-tab-room-detail");
  var nav_item = document
    .getElementById("menu")
    .getElementsByClassName("nav-item");
  var size = window.innerWidth;
  if (size <= 992) {
    object.style.display = "inline-block";
    for (i = 1; i < nav_item.length; i++) nav_item[i].style.display = "none";
  } else {
    object.style.display = "none";
    for (i = 1; i < nav_item.length; i++)
      nav_item[i].style.display = "inline-block";
  }
}

function upNumber(element, maxValue) {
  var object = element.parentElement;
  var number = object.getElementsByClassName("number");
  var dataDate = number[0].innerHTML;
  let number2 = Number(dataDate)
  maxValue = Number(maxValue)
  if (dataDate < maxValue) {
    number2 += 1
  }
  console.log(number2)
  number[0].innerHTML = number2.toString()
}

function downNumber(element) {
  var object = element.parentElement;
  var number = object.getElementsByClassName("number");
  var dataDate = number[0].innerHTML;
  if (Number(dataDate) == 1) return
  dataDate--;
  // var month = object.getElementsByClassName("month");
  // if (month.length > 0) {
  //   var dataMonth = arrMonth.indexOf(month[0].innerHTML);
  //   if (dataDate > dateOfMonth[dataMonth]) {
  //     dataDate = 1;
  //     dataMonth++;
  //     if (dataMonth > 11) {
  //       dataMonth = 0;
  //     }
  //   }
  //   month[0].innerHTML = arrMonth[dataMonth];
  // }
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

function changeDateUI() {
  var day1 = $("#dp1").datepicker("getDate");
  var day2 = $("#dp2").datepicker("getDate");
  date_in.innerHTML = day1.getDate();
  date_out.innerHTML = day2.getDate();
  month_in.innerHTML = arrMonth[day1.getMonth()];
  month_out.innerHTML = arrMonth[day2.getMonth()];
  getDiff()
}

function toBooking(id, user = 1) {
  let checkin = new Date(document.getElementById("dp1").value).valueOf();
  let checkout = new Date(document.getElementById("dp2").value).valueOf();
  let numGuest = document.getElementById("count-guests").innerHTML
  let str = `/booking?room=${id}&num=${numGuest}&in=${checkin}&out=${checkout}&user=${user}`;
  // alert(str)
  window.location = str;
}

function toOtherRoom(id) {
  window.location = "/list/" + id;
}

function likeComment(element) {
  if (element.getAttribute("style") == "font-weight: bold")
    element.setAttribute("style", "");
  else element.setAttribute("style", "font-weight: bold");
}

function replyComment(element) {
  var parentNode = element.parentElement.parentElement;
  var comment = parentNode.querySelector("input");
  comment.focus();
}

function fillStar(element) {
  $(element).attr("class", "button icon-star fas fa-star");
  $(element).prevAll().attr("class", "button icon-star fas fa-star");
  $(element).nextAll().attr("class", "button icon-star far fa-star");
  document.getElementById("rating").value = document.getElementsByClassName(
    "button icon-star fas fa-star"
  ).length;
}

var nowTemp = new Date();
var now = new Date(
  nowTemp.getFullYear(),
  nowTemp.getMonth(),
  nowTemp.getDate(),
  0,
  0,
  0,
  0
);

const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

var checkin = $("#dp1")
  .datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    // dateFormat: "dd-mm-yy",
    minDate: now,
    onSelect: function (dateText) {
      console.log("check in select date");

      var minDate = $("#dp1").datepicker("getDate");
      minDate.setDate(minDate.getDate() + 1);
      $("#dp2").datepicker("change", { minDate: minDate });
      changeDateUI();
    },
  })
  .on("changeDate", function (ev) {
    console.log("check in change date");
    if (
      ev.date.valueOf() > checkout.datepicker("getDate").valueOf() ||
      !checkout.datepicker("getDate").valueOf()
    ) {
      var newDate = new Date(ev.date);
      newDate.setDate(newDate.getDate() + 1);
      checkout.datepicker("minDate", newDate);
    }
  })
  .datepicker("setDate", now);

var checkout = $("#dp2")
  .datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    // dateFormat: "dd-mm-yy",
    minDate: tomorrow,
    autoclose: true,
  })
  .on("changeDate", function (ev) { })
  .datepicker("setDate", tomorrow);
