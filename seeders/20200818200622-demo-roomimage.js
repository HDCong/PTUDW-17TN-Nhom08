'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
  //   */
    //  let data =[{
    //       "roomid": 3,
    //       "imagepath": "http://dummyimage.com/564x564.bmp/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 1,
    //       "imagepath": "http://dummyimage.com/452x411.bmp/ff4444/ffffff"
    //     }, {
    //       "roomid": 2,
    //       "imagepath": "http://dummyimage.com/550x486.jpg/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 4,
    //       "imagepath": "http://dummyimage.com/434x588.png/ff4444/ffffff"
    //     }, {
    //       "roomid": 2,
    //       "imagepath": "http://dummyimage.com/483x583.png/cc0000/ffffff"
    //     }, {
    //       "roomid": 1,
    //       "imagepath": "http://dummyimage.com/427x547.png/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 5,
    //       "imagepath": "http://dummyimage.com/434x491.jpg/cc0000/ffffff"
    //     }, {
    //       "roomid": 5,
    //       "imagepath": "http://dummyimage.com/474x472.jpg/cc0000/ffffff"
    //     }, {
    //       "roomid": 5,
    //       "imagepath": "http://dummyimage.com/508x426.jpg/cc0000/ffffff"
    //     }, {
    //       "roomid": 2,
    //       "imagepath": "http://dummyimage.com/508x401.jpg/dddddd/000000"
    //     }, {
    //       "roomid": 3,
    //       "imagepath": "http://dummyimage.com/503x561.bmp/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 4,
    //       "imagepath": "http://dummyimage.com/440x581.bmp/cc0000/ffffff"
    //     }, {
    //       "roomid": 2,
    //       "imagepath": "http://dummyimage.com/472x475.jpg/cc0000/ffffff"
    //     }, {
    //       "roomid": 1,
    //       "imagepath": "http://dummyimage.com/566x402.png/ff4444/ffffff"
    //     }, {
    //       "roomid": 4,
    //       "imagepath": "http://dummyimage.com/569x494.png/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 2,
    //       "imagepath": "http://dummyimage.com/488x564.jpg/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 1,
    //       "imagepath": "http://dummyimage.com/582x470.jpg/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 3,
    //       "imagepath": "http://dummyimage.com/458x424.jpg/cc0000/ffffff"
    //     }, {
    //       "roomid": 5,
    //       "imagepath": "http://dummyimage.com/599x537.jpg/5fa2dd/ffffff"
    //     }, {
    //       "roomid": 4,
    //       "imagepath": "http://dummyimage.com/455x450.bmp/5fa2dd/ffffff"
    //     }]
    let data = [
      {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 1,
        "imagepath": "/images/listrooms-images/room16.jpg"
      },
      {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room20.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room21.jpg"
      }, {
        "roomid": 2,
        "imagepath": "/images/listrooms-images/room22.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room3.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room0.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room6.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room2.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room4.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room7.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room8.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room1.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room5.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room9.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 18,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 14,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 9,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 7,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 19,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 20,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 5,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 16,
        "imagepath": "/images/listrooms-images/room16.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room17.jpg"
      }, {
        "roomid": 12,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room11.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }, {
        "roomid": 3,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room13.jpg"
      }, {
        "roomid": 6,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 15,
        "imagepath": "/images/listrooms-images/room18.jpg"
      }, {
        "roomid": 17,
        "imagepath": "/images/listrooms-images/room15.jpg"
      }, {
        "roomid": 10,
        "imagepath": "/images/listrooms-images/room14.jpg"
      }, {
        "roomid": 11,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 8,
        "imagepath": "/images/listrooms-images/room19.jpg"
      }, {
        "roomid": 13,
        "imagepath": "/images/listrooms-images/room10.jpg"
      }, {
        "roomid": 4,
        "imagepath": "/images/listrooms-images/room12.jpg"
      }
    ]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()')
      item.updatedAt = Sequelize.literal('NOW()')
      return item
    })
    await queryInterface.bulkInsert('RoomImages', data, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('RoomImages', null, {});

  }
};
