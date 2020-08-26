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

        // let data = [{
        //     "roomid": 2,
        //     "service": 4
        // }, {
        //     "roomid": 4,
        //     "service": 4
        // }, {
        //     "roomid": 4,
        //     "service": 4
        // }, {
        //     "roomid": 1,
        //     "service": 5
        // }, {
        //     "roomid": 3,
        //     "service": 3
        // }, {
        //     "roomid": 1,
        //     "service": 3
        // }, {
        //     "roomid": 1,
        //     "service": 1
        // }, {
        //     "roomid": 4,
        //     "service": 4
        // }, {
        //     "roomid": 3,
        //     "service": 3
        // }, {
        //     "roomid": 2,
        //     "service": 1
        // }, {
        //     "roomid": 4,
        //     "service": 2
        // }, {
        //     "roomid": 3,
        //     "service": 1
        // }, {
        //     "roomid": 3,
        //     "service": 5
        // }, {
        //     "roomid": 2,
        //     "service": 4
        // }, {
        //     "roomid": 2,
        //     "service": 1
        // }, {
        //     "roomid": 2,
        //     "service": 1
        // }, {
        //     "roomid": 2,
        //     "service": 5
        // }, {
        //     "roomid": 5,
        //     "service": 3
        // }, {
        //     "roomid": 5,
        //     "service": 5
        // }, {
        //     "roomid": 4,
        //     "service": 1
        // }]
        // data.map(item => {
        //     item.createdAt = Sequelize.literal('NOW()')
        //     item.updatedAt = Sequelize.literal('NOW()')
        //     return item
        // })
        // await queryInterface.bulkInsert('RoomServices', data, {});

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
