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

    let data = [{
        "userId": 21,
        "roomId": 1,
        "checkin": 1597602764349,
        "checkout": 1598602764353,
        "total": 5252
      }, {
        "userId": 21,
        "roomId": 2,
        "checkin": 1583602764349,
        "checkout": 1598062664353,
        "total": 1000
      }, {
        "userId": 21,
        "roomId": 1,
        "checkin": 1337602764349,
        "checkout": 1498602764353,
        "total": 2000
      }]

      data.map(item => {
        item.createdAt = Sequelize.literal('NOW()')
        item.updatedAt = Sequelize.literal('NOW()')
        return item
      })

      await queryInterface.bulkInsert('Bookings', data, {});
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
