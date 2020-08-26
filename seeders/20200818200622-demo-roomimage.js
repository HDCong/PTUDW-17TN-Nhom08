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
  //     data.map(item=>{
  //       item.createdAt=Sequelize.literal('NOW()')
  //       item.updatedAt=Sequelize.literal('NOW()')
  //       return item
  //     })
  //     await queryInterface.bulkInsert('RoomImages',data, {});
    
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
