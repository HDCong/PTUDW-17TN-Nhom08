let helper = []

helper.createCarousel = (listImagePaths) => {
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
        </div>`}

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
    let str = `
                        <div id="room-services" class="row">`
    services.forEach(e => {
        let src = '', text = ''

        switch (e.service) {
            case 1: src = '/images/listrooms-images/swim.png'
                text = 'Swimming Pool'
                break;
            case 2: src = '/images/listrooms-images/television.png'
                text = 'TV'
                break;
            case 3: src = '/images/listrooms-images/fastfood.png'
                text = 'Fast Food'
                break;
            case 4: src = '/images/listrooms-images/air-conditioner.png'
                text = 'Air-Conditioner'
                break;
            case 5: src = '/images/listrooms-images/refrigerator.png'
                text = 'Refrigerator'
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
    }
    else if (stars == 4) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    }
    else if (stars == 3) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    }
    else if (stars == 2) {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    }
    else {
        return ` <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>
                                    <div class="icon-star fas fa-star star-disable"></div>`
    }

}
helper.showReviews = (reviews) => {
    let res = ''
    reviews.forEach(element => {
        let str = `     <div class="media p-3" id="review-1">
                        <img src="${element.User.dataValues['avatarpath']==null?'../public/images/logos/logo_v1.png':element.User.dataValues['avatarpath']}" class="mr-3 mt-3 rounded-circle" style="width:60px;">
                        <div class="media-body">
                            <h6>${element.User.dataValues['username']} <small></small></h6>
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
                                <img src="../images/listrooms-images/avt.jpg" class="rounded-circle"
                                    style="width:30px;">
                                <input type="text" placeholder="Your reply">
                            </div>
                        </div>
                    </div>`
        res += str
    });
    return res
}

helper.createOtherRooms = (random) => {
    return `<div id="list-rooms">
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room1"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom()">${random[0].name}</div>
                                <div>From ${random[0].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[0].id})">BOOK NOW</div>
                            </div>
                        </div>
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room2"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom()">${random[1].name}</div>
                                <div>From ${random[1].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[1].id})">BOOK NOW</div>
                            </div>
                        </div>
                        <div class="other-room-frame row">
                            <div class="other-room-image col-4" id="other-room3"></div>
                            <div class="other-room-info col-7">
                                <div class="other-room" onclick="toOtherRoom()">${random[2].name}</div>
                                <div>From ${random[2].price}$ / per night</div>
                                <br />
                                <div class="btn-book button" onclick="toBooking(${random[2].id})">BOOK NOW</div>
                            </div>
                        </div>
                    </div>`
}
calcAvg = (reviews) => {
    var total = 0.0;
    var dataRating =Array(6).fill(0)
    for (var i = 0; i < reviews.length; i++) {
        total += reviews[i].rating;
        // console.log(reviews[i].rating)
        dataRating[parseInt(reviews[i].rating)]++;
    }
    dataRating = dataRating.map(item=>{
        item =(item*100/reviews.length).toFixed(2);
        // console.log(item)
        return item;
    })
    return [ Math.floor(total / reviews.length) , dataRating]
}
helper.createOverallRating = (reviews) => {
    let values =calcAvg(reviews);
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
helper.AvgRating=(reviews)=>{
    return createStrStar(calcAvg(reviews)[0])
}
module.exports = helper