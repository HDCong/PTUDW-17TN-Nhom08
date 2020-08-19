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
    */
    
    // let data=[]
    //   data.map(item=>{
    //     item.createdAt=Sequelize.literal('NOW()')
    //     item.updatedAt=Sequelize.literal('NOW()')
    //     return item
    //   })
    //   await queryInterface.bulkInsert('RoomImages',data, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
