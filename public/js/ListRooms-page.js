var date_in = document.getElementById("date-in");
var date_out = document.getElementById("date-out");
var month_in = document.getElementById("month-in");
var month_out = document.getElementById("month-out");
var count_guests = document.getElementById("count-guests");
var count_nights = document.getElementById("count-nights");

const arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var divMonth;

// var nowTemp = new Date();
// var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
// var checkin = $('#dp1').datepicker({
//     beforeShowDay: function (date) {
//         return date.valueOf() >= now.valueOf();
//     },
//     autoclose: true
// }).on('changeDate', function (ev) {
//     if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {
//         var newDate = new Date(ev.date);
//         newDate.setDate(newDate.getDate() + 1);
//         checkout.datepicker("update", newDate);
//     }
//     $('#dp2')[0].focus();
// });
// var checkout = $('#dp2').datepicker({
//     beforeShowDay: function (date) {
//         if (!checkin.datepicker("getDate").valueOf()) {
//             return date.valueOf() >= new Date().valueOf();
//         } else {
//             return date.valueOf() > checkin.datepicker("getDate").valueOf();
//         }
//     },
//     autoclose: true
// }).on('changeDate', function (ev) { });

$(document).click(function (e) {
    var container = $(".month");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#table-month").hide();
    } else {
        $("#table-month").show();
        var monthType = e.target.getAttribute("id");
        divMonth = document.getElementById(monthType);
    }
});

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

function changePositionMonthTable() {
    var size = window.innerWidth;
    var percent;
    if (size < 768) {
        percent = "23%";
    } else if (size < 992) {
        percent = "30%";
    } else if (size < 1200) {
        percent = "2%";
    } else {
        percent = "4.5%";
    }
    $("#table-month").css("left", percent);
}

$("#table-month div").click(function (e) {
    divMonth.innerHTML = e.target.innerHTML;
})

$(document).ready(function () {
    var date = new Date();
    date_in.innerHTML = date.getDate();
    date_out.innerHTML = date.getDate();
    month_in.innerHTML = arrMonth[date.getMonth()];
    month_out.innerHTML = arrMonth[date.getMonth()];
    $("#table-month").hide();
    changePositionMonthTable();

    if (document.getElementById("price-range")) {

        var nonLinearSlider = document.getElementById('price-range');

        noUiSlider.create(nonLinearSlider, {
            connect: true,
            behaviour: 'tap',
            start: [urlParams.get('min'), urlParams.get('max')],
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [0],
                '10%': [300, 300],
                '50%': [1500, 1500],
                'max': [3000]
            }
        });
        var nodes = [
            document.getElementById('lower-value'), // 0
            document.getElementById('upper-value')  // 1
        ];

        nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
            nodes[handle].innerHTML = values[handle];
        });

        nonLinearSlider.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
            let value = values[handle];
            let key = ['min', 'max']
            setParams(key[handle], value)
        });

    }

})

$(window).resize(function () {
    changePositionMonthTable();
})


function toRoomDetail(id) {
    window.location = `/list/${id}`;
}