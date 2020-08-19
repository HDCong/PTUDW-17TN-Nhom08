let helper =[]

helper.createCarousel=(listImagePaths)=>{
    console.log('hello from helper')
    var strIndicator =`<ul class="carousel-indicators">
    <li data-target="#room-images" data-slide-to="0" class="active"></li>`

    for(let i = 1; i<listImagePaths.length;i++){
        strIndicator+=`<li data-target="#room-images" data-slide-to="${i}"></li>`
    }
    strIndicator+='</ul>' 

    var strInner=`
<div class="carousel-inner">
<div class="carousel-item active">
        <img src="${listImagePaths[0].imagepath}" height="400">
        </div>`

    for(let i = 1 ; i <listImagePaths.length;i++){
        strInner+= 
        `<div class="carousel-item">
        <img src="${listImagePaths[i].imagepath}" height="400">
        </div>`}
        
    strInner+=`</div> 
        <a class="carousel-control-prev" href="#room-images" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#room-images" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>`;
    return strIndicator+strInner;
}
helper.createRoomServices=(services)=>{
    let str =`
                        <div id="room-services" class="row">`
    services.forEach(e => {
        let src='', text=''

        switch(e.service){
            case 1: src='/images/listrooms-images/swim.png'
                    text='Swimming Pool'
                break;
            case 2:  src='/images/listrooms-images/television.png'
                    text='TV'
                break;
            case 3: src='/images/listrooms-images/fastfood.png'
                    text='Fast Food'
            break;
            case 4:src='/images/listrooms-images/air-conditioner.png'
                    text='Air-Conditioner'
             break;
            case 5: src='/images/listrooms-images/refrigerator.png'
                    text='Refrigerator'
             break;
            default:
                    src='/images/listrooms-images/television.png'
                    text='TV'
        }
        str+=`<div class="col-4">
                            <img src=${src}>
                            <span>${text}</span>
            </div>`
    });
        str+='</div>'
    return str;
    
}
helper.showReviews=(reviews)=>{
    let str =`<div class="media p-3" id="review-2">
                        <img src="../images/listrooms-images/avt.jpg" alt="Dang Tan Tai"
                            class="mr-3 mt-3 rounded-circle" style="width:60px;">
                        <div class="media-body">
                            <h6>Đặng Tấn Tài <small><i>1 giờ trước</i></small></h6>
                            <div class="list-review">
                                <span class="count-review-star">
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                    <div class="icon-star fas fa-star"></div>
                                </span>
                                <span>Đánh giá</span>
                            </div>
                            <p class="comment">Phòng rộng rãi, thoáng mát, sạch sẽ và rất hài lòng.</p>
                            <div>
                                <span class="button btn-like" onclick="likeComment(this)">Thích</span>
                                <span class="button btn-reply" onclick="replyComment(this)">Trả lời</span>
                            </div>
                            <div class="comment-reply">
                                <img src="../images/listrooms-images/avt.jpg" class="rounded-circle"
                                    style="width:30px;">
                                <input type="text" placeholder="Viết câu trả lời của bạn">
                            </div>
                        </div>
                    </div>`
}
module.exports = helper