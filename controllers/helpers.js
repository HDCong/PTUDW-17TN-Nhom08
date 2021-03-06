let helper = []

helper.createCarousel = (listImagePaths) => {
    if (listImagePaths.length < 1) {
        return `<ul class="carousel-indicators">
        <li data-target="#room-images" data-slide-to="0" class="active"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../images/logos/logo_v1.png" height="400">
            </div>
        
        </div> 
        <a class="carousel-control-prev" href="#room-images" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#room-images" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>`
    }
    var strIndicator = `<ul class="carousel-indicators">
    <li data-target="#room-images" data-slide-to="0" class="active"></li>`

    for (let i = 1; i < listImagePaths.length; i++) {
        strIndicator += `<li data-target="#room-images" data-slide-to="${i}"></li>`
    }
    strIndicator += '</ul>'

    var strInner = `
<div class="carousel-inner">
<div class="carousel-item active">
        <img src="${listImagePaths[0].imagepath}" height="400">
        </div>`

    for (let i = 1; i < listImagePaths.length; i++) {
        strInner +=
            `<div class="carousel-item">
        <img src="${listImagePaths[i].imagepath}" height="400">
        </div>`
    }

    strInner += `</div> 
        <a class="carousel-control-prev" href="#room-images" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#room-images" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>`;
    return strIndicator + strInner;
}
helper.createRoomServices = (services) => {
    let ser = []
    services.forEach(element => {
        console.log(element.service)
        ser.push(element.service)
    })
    let newservices = new Set(ser)
    console.log(newservices)
    let str = `
                        <div id="room-services" class="row">`
    newservices.forEach(e => {
        let src = '',
            text = ''
        switch (e) {
            case 1:
                src = '/images/listrooms-images/swim.png'
                text = 'Swimming Pool'
                break;
            case 2:
                src = '/images/listrooms-images/television.png'
                text = 'TV'
                break;
            case 3:
                src = '/images/listrooms-images/fastfood.png'
                text = 'Fast Food'
                break;
            case 4:
                src = '/images/listrooms-images/air-conditioner.png'
                text = 'Air-Conditioner'
                break;
            case 5:
                src = '/images/listrooms-images/refrigerator.png'
                text = 'Refrigerator'
                break;
            case 6:
                src = '/images/room-services/icon-garden.png'
                text = 'Garden'
                break;
            case 7:
                src = '/images/room-services/icon-mountain.png'
                text = 'Mountain'
                break;
            case 8:
                src = '/images/room-services/icon-wifi.png'
                text = 'Wifi'
                break;
            default:
                src = '/images/listrooms-images/television.png'
                text = 'TV'
        }
        str += `<div class="col-4">
                            <img src=${src}>
                            <span>${text}</span>
            </div>`
    });
    str += '</div>'
    return str;

}
createStrStar = (stars) => {
    if (stars == 5) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>`
    } else if (stars == 4) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    } else if (stars == 3) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    } else if (stars == 2) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    } else {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    }

}
generateForReplies = (replies) => {
    let res = ' '
    replies.forEach(element => {
        if (element.userid != null)
            res += `<div class="row">
                    <img src="${element.child.dataValues['avatarpath'] == null ? '../images/logos/logo_v1.png' : '../' + element.child.dataValues['avatarpath']}" class="rounded-circle" style="width:30px;">
                    <h6 class ="ml-2"> ${element.child.dataValues['username']}</h6> 
                </div>
                <p class="comment ml-3">${element.content}</p>`
    })
    return res
}

function showReplyForUser(user, id, roomid) {
    // console.log(user)
    if (user != undefined) {
        console.log(user['avatarpath'])
        return `
                <form action="/review/${id}" method="POST">
                    <div class="row mt-3 ">
                            <img src="${user['avatarpath'] == null ? '../images/logos/logo_v1.png' : '../' + user['avatarpath']}"
                            style="width:30px;">
                            <input type="hidden" id="userid" name="userid" value="${user.id}">
                            <input type="hidden" id="reviewId${id}" name="reviewId" value="${id}">
                            <input type="hidden" id="roomid${roomid}" name="roomid" value="${roomid}">
                            <input class ="ml-2" type="text" id="content${id}-${roomid}", name="content" placeholder="Your reply">
                    </div>
                </form>
                `;
    }
    return ``
}
helper.showReviews = (reviews, user) => {
    let res = ''
    reviews.forEach(element => {
        let str = `<div class="media p-3" id="review-${element.id}">
                        <img src="${element.parent.dataValues['avatarpath'] == null ? '../images/logos/logo_v1.png' : '../' + element.parent.dataValues['avatarpath']}" class="mr-3 mt-3 rounded-circle" style="width:60px;">
                        <div class="media-body">
                            <h6>${element.parent.dataValues['username']} <small></small></h6>
                            <div class="list-review">
                                <span class="count-review-star">
                                   ${createStrStar(element.rating)}
                                </span>
                                <span>Rating</span>
                            </div>
                            <p class="comment">${element.content}</p>
                            <div>
                                <span class="button btn-like" onclick="likeComment(this)">${element.numberoflikes} Like </span>
                                <span class="button btn-reply" onclick="replyComment(this)">Reply</span>
                            </div>
                            <div class="comment-reply">
                                ${generateForReplies(element.CommentReplies)}
                                ${showReplyForUser(user, element.id, element.roomId)}
                            </div>
                        </div>
                    </div>`
        res += str
    });
    return res
}
helper.UserReview = (user, id) => {
    if (user != undefined)
        return `
                <div class="media p-3" id="review-yourself">
                        <img src="${user['avatarpath'] == null ? '../images/logos/logo_v1.png' : '../' + user['avatarpath']}"
                            class="mr-3 mt-3 rounded-circle" style="width:60px;">
                            <div class="media-body">
                                    <div class="list-review">
                                        <input type="hidden" id="rating" name="rating">
                                        <input type="hidden" id="userId${user.id}" name="userId"value="${user.id}">
                                        <input type="hidden" id="roomId${id}" name="roomId" value=${id}>
                                        <span class="count-review-star">
                                            <div class="button icon-star far fa-star" onclick="fillStar(this)"></div>
                                            <div class="button icon-star far fa-star" onclick="fillStar(this)"></div>
                                            <div class="button icon-star far fa-star" onclick="fillStar(this)"></div>
                                            <div class="button icon-star far fa-star" onclick="fillStar(this)"></div>
                                            <div class="button icon-star far fa-star" onclick="fillStar(this)"></div>
                                        </span>
                                        <span>Your review</span>
                                    </div>
                                    <div class="row">
                                        <input type="text" placeholder="Write your review here" class="comment col-6" id="content" name="content">
                                        <span><button type="submit" class="btn btn-light btn-sm col-">Post</button></span>
                                    </div>
                            </div>
                </div>
            `
}
helper.createOtherRooms = (random, user) => {
    if (user == undefined) user = 0
    else user = user.id
    return `<div id="list-rooms">
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room1"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom(${random[0].id})">${random[0].name}</div>
                                <div>From ${random[0].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[0].id},${user})">BOOK NOW</div>
                            </div>
                        </div>
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room2"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom(${random[1].id})">${random[1].name}</div>
                                <div>From ${random[1].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[1].id},${user})">BOOK NOW</div>
                            </div>
                        </div>
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room3"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom(${random[2].id})">${random[2].name}</div>
                                <div>From ${random[2].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[2].id},${user})">BOOK NOW</div>
                            </div>
                        </div>
                    </div>`
}
calcAvg = (reviews) => {
    var dataRating = Array(6).fill(0)
    if (reviews.length < 1) {
        return [5, dataRating]
    }
    var total = 0.0;
    for (var i = 0; i < reviews.length; i++) {
        total += reviews[i].rating;
        // console.log(reviews[i].rating)
        dataRating[parseInt(reviews[i].rating)]++;
    }
    dataRating = dataRating.map(item => {
        item = (item * 100 / reviews.length).toFixed(2);
        // console.log(item)
        return item;
    })
    return [Math.floor(total / reviews.length), dataRating]
}
helper.createOverallRating = (reviews) => {
    let values = calcAvg(reviews);
    return `<div id="average-left" class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <div id="sum-stars">${values[0]}/5</div>
                        <div id="stars">
                        ${createStrStar(values[0])}
                        </div>
                        <div id="txt-count-review">${reviews.length} reviews</div>
                    </div>
                    <div id="average-right" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div id="5-stars" class="row stars-percent">
                            <div class="col-1 number-star">5</div>
                            <div class="icon-star fas fa-star"></div>
                            <div class="progress col-9">
                                <div class="progress-bar" style="width:${values[1][5]}%"></div>
                            </div>
                            <div class="col-1 percent">${values[1][5]}%</div>
                        </div>
                        <div id="4-stars" class="row stars-percent">
                            <div class="col-1 number-star">4</div>
                            <div class="icon-star fas fa-star"></div>
                            <div class="progress col-9">
                                <div class="progress-bar" style="width:${values[1][4]}%"></div>
                            </div>
                            <div class="col-1 percent">${values[1][4]}%</div>
                        </div>
                        <div id="3-stars" class="row stars-percent">
                            <div class="col-1 number-star">3</div>
                            <div class="icon-star fas fa-star"></div>
                            <div class="progress col-9">
                                <div class="progress-bar" style="width:${values[1][3]}%"></div>
                            </div>
                            <div class="col-1 percent">${values[1][3]}%</div>
                        </div>
                        <div id="2-stars" class="row stars-percent">
                            <div class="col-1 number-star">2</div>
                            <div class="icon-star fas fa-star"></div>
                            <div class="progress col-9">
                                <div class="progress-bar" style="width:${values[1][2]}%"></div>
                            </div>
                            <div class="col-1 percent">${values[1][2]}%</div>
                        </div>
                        <div id="1-stars" class="row stars-percent">
                            <div class="col-1 number-star">1</div>
                            <div class="icon-star fas fa-star"></div>
                            <div class="progress col-9">
                                <div class="progress-bar" style="width:${values[1][1]}%"></div>
                            </div>
                            <div class="col-1 percent">${values[1][1]}%</div>
                        </div>
                    </div>`
}

helper.setDatePicker = (birthday) => {
    var htmlcode = ``
    var d;

    if (birthday == null) d = new Date()
    else d = new Date(Number(birthday))

    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        days[1] += 1

    for (i = 1; i <= days[month - 1]; ++i) {
        if (i === date)
            htmlcode += `<option value="${i}" selected >${i}</option>`
        else
            htmlcode += `<option value="${i}" >${i}</option>`
    }

    return htmlcode
}

helper.setMonthPicker = (birthday) => {
    var htmlcode = ``
    var d;

    if (birthday == null) d = new Date()
    else d = new Date(Number(birthday))

    var month = d.getMonth();
    var text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    for (i = 1; i <= 12; ++i) {
        if (i === month)
            htmlcode += `<option value=${i} selected >${text[i - 1]}</option>`
        else
            htmlcode += `<option value="${i}">${text[i - 1]}</option>`
    }

    return htmlcode
}

helper.setYearPicker = (birthday) => {
    htmlcode = ``
    var d;

    if (birthday == null) d = new Date()
    else d = new Date(Number(birthday))

    var year = d.getFullYear();

    for (i = 2020; i >= 1971; --i) {
        if (i === year)
            htmlcode += `<option value="${i}" selected >${i}</option>`
        else
            htmlcode += `<option value="${i}">${i}</option>`
    }
    return htmlcode
}

helper.AvgRating = (reviews) => {
    return createStrStar(calcAvg(reviews)[0])
}

helper.ifEquals = function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
}

helper.birthdayToMillis = function (date, month, year) {
    var date = new Date(year, month, date); // some mock date
    var milliseconds = date.getTime();

    return milliseconds
}

helper.getBirthdayFromMillis = function (millis) {
    var d = new Date(Number(millis));
    var birthday = {
        date: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear()
    }

    return birthday
}

helper.getHistoryDetail = function (checkin) {
    // console.log("HELPER: " + checkin)
    var d = new Date(Number(checkin))

    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return `<div class="cart_item_text m-1">${text[month]}</div>
            <div class="cart_item_text m-1"> ${date}th </div>
            <div class="cart_item_text  m-1">${year}</div>`
}

helper.createToBooking = function (id, user) {
    if (user != undefined)
        return `<div id="btn-book-now" class="button" onclick="toBooking(${id}, ${user.id})">BOOK NOW</div>`
    return `<div id="btn-book-now" class="button" onclick="toBooking(${id})">BOOK NOW</div>`

}

function getDayMonthYear(value) {
    let date = new Date(Number(value))
    console.log('value: ', value)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return [date.getDate(), date.getMonth() + 1, date.getFullYear(), days[date.getDay()]]
}

function getDifDays(value1, value2) {

    var Difference_In_Time = Math.abs(value1 - value2);
    // To calculate the no. of days between two dates 
    return Math.floor(Difference_In_Time / (1000 * 3600 * 24));
}
helper.createReservation = function (name, price, information) {
    // console.log('helpr room: ', room)
    let checkinDay = getDayMonthYear(information['checkin'])
    let checkoutDay = getDayMonthYear(information['checkout'])
    console.log(checkinDay)
    console.log(checkoutDay)

    return `<div class="board-booking col-lg-4">
      <div class="img-detail-small">
          ${name}
      </div>
      <div class="reservation">
        <div class="text-center"><small> YOUR RESERVATION</small></div>
        <div class="row p-3">
          <div class="text-center col-6 check">
            <p class="checkin">CHECK-IN</p>
            <h2 id="date-checkin">${checkinDay[0]}</h2>
            <p id="month-year-checkin">
              ${checkinDay[1]},${checkinDay[2]} <br />
              ${checkinDay[3]}
            </p>
          </div>
          <div class="text-center col-6 check">
            <p class="checkout">CHECK-OUT</p>
            <h2 id="date-checkout">${checkoutDay[0]}</h2>
            <p class="month-year-checkout">
              ${checkoutDay[1]},${checkoutDay[2]} <br />
              ${checkoutDay[3]}
            </p>
          </div>
        </div>
        <div class="row p-3">
          <div class="text-center col-6 quantity">
            <h2 id="number-of-guest">${information['guest']}</h2>
            <p>GUESTS</p>
          </div>
          <div class="text-center col-6 quantity">
            <h2 id="number-of-night">${getDifDays(information['checkout'], information['checkin'])}</h2>
            <p>NIGHTS</p>
          </div>
        </div>
        <div class="row p-3">
          <div class="text-center col-12">
            <h2 id="total-price">${(price * getDifDays(information['checkout'], information['checkin'])).toFixed(2)}$
            </h2>
          </div>
        </div>
      </div>
    </div> 
`
}

helper.generatedate = function (millis) {
    let date = new Date(Number(millis))
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

    return `<div>${date.getDate()}</div>
            <div>${months[date.getMonth()]}, ${date.getFullYear()}</div>
            <div>${days[date.getDay()]}</div>`
}

helper.getnights = function (checkin, checkout) {
    let date1 = new Date(Number(checkin))
    let date2 = new Date(Number(checkout))
    let diffTime = Math.abs(date2 - date1);

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
helper.generateCancel = function (checkin, id) {
    var nowTemp = new Date();
    now = nowTemp.valueOf()
    console.log(Number(checkin))
    console.log(now)
    if (Number(checkin) - now > 24 * 3600 * 1000)
        return `
        <form  action="/reservation/delete"  method="GET" >
            <input type="hidden"  name="id" value="${id}">
            <button id="btn-return2"type="submit" onclick="return confirm('Are you sure you want to submit?');" >
                CANCEL ORDER
            </button>
        </form>
        `
    else return ``
}
module.exports = helper