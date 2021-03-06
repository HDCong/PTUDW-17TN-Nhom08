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
            "roomid": 7,
            "service": 4
        }, {
            "roomid": 10,
            "service": 1
        }, {
            "roomid": 2,
            "service": 6
        }, {
            "roomid": 19,
            "service": 4
        }, {
            "roomid": 14,
            "service": 7
        }, {
            "roomid": 14,
            "service": 2
        }, {
            "roomid": 7,
            "service": 8
        }, {
            "roomid": 8,
            "service": 4
        }, {
            "roomid": 4,
            "service": 3
        }, {
            "roomid": 13,
            "service": 3
        }, {
            "roomid": 12,
            "service": 6
        }, {
            "roomid": 16,
            "service": 4
        }, {
            "roomid": 14,
            "service": 4
        }, {
            "roomid": 12,
            "service": 2
        }, {
            "roomid": 4,
            "service": 4
        }, {
            "roomid": 18,
            "service": 3
        }, {
            "roomid": 20,
            "service": 2
        }, {
            "roomid": 1,
            "service": 4
        }, {
            "roomid": 2,
            "service": 4
        }, {
            "roomid": 9,
            "service": 5
        }, {
            "roomid": 19,
            "service": 4
        }, {
            "roomid": 18,
            "service": 8
        }, {
            "roomid": 14,
            "service": 7
        }, {
            "roomid": 3,
            "service": 4
        }, {
            "roomid": 8,
            "service": 4
        }, {
            "roomid": 12,
            "service": 5
        }, {
            "roomid": 5,
            "service": 5
        }, {
            "roomid": 14,
            "service": 4
        }, {
            "roomid": 17,
            "service": 2
        }, {
            "roomid": 16,
            "service": 4
        }, {
            "roomid": 6,
            "service": 4
        }, {
            "roomid": 19,
            "service": 4
        }, {
            "roomid": 5,
            "service": 4
        }, {
            "roomid": 11,
            "service": 7
        }, {
            "roomid": 15,
            "service": 7
        }, {
            "roomid": 14,
            "service": 4
        }, {
            "roomid": 12,
            "service": 1
        }, {
            "roomid": 6,
            "service": 3
        }, {
            "roomid": 14,
            "service": 7
        }, {
            "roomid": 9,
            "service": 5
        }, {
            "roomid": 20,
            "service": 1
        }, {
            "roomid": 12,
            "service": 2
        }, {
            "roomid": 13,
            "service": 8
        }, {
            "roomid": 5,
            "service": 6
        }, {
            "roomid": 11,
            "service": 2
        }, {
            "roomid": 4,
            "service": 8
        }, {
            "roomid": 15,
            "service": 1
        }, {
            "roomid": 11,
            "service": 6
        }, {
            "roomid": 11,
            "service": 4
        }, {
            "roomid": 18,
            "service": 1
        }, {
            "roomid": 8,
            "service": 5
        }, {
            "roomid": 18,
            "service": 7
        }, {
            "roomid": 9,
            "service": 1
        }, {
            "roomid": 8,
            "service": 4
        }, {
            "roomid": 7,
            "service": 8
        }, {
            "roomid": 19,
            "service": 1
        }, {
            "roomid": 19,
            "service": 8
        }, {
            "roomid": 10,
            "service": 5
        }, {
            "roomid": 8,
            "service": 6
        }, {
            "roomid": 14,
            "service": 3
        }, {
            "roomid": 12,
            "service": 7
        }, {
            "roomid": 17,
            "service": 8
        }, {
            "roomid": 20,
            "service": 3
        }, {
            "roomid": 13,
            "service": 6
        }, {
            "roomid": 17,
            "service": 7
        }, {
            "roomid": 12,
            "service": 6
        }, {
            "roomid": 2,
            "service": 6
        }, {
            "roomid": 4,
            "service": 5
        }, {
            "roomid": 7,
            "service": 1
        }, {
            "roomid": 2,
            "service": 3
        }, {
            "roomid": 9,
            "service": 8
        }, {
            "roomid": 4,
            "service": 8
        }, {
            "roomid": 1,
            "service": 5
        }, {
            "roomid": 10,
            "service": 8
        }, {
            "roomid": 5,
            "service": 7
        }, {
            "roomid": 4,
            "service": 1
        }, {
            "roomid": 4,
            "service": 1
        }, {
            "roomid": 17,
            "service": 6
        }, {
            "roomid": 19,
            "service": 7
        }, {
            "roomid": 11,
            "service": 8
        }, {
            "roomid": 14,
            "service": 7
        }, {
            "roomid": 8,
            "service": 1
        }, {
            "roomid": 12,
            "service": 4
        }, {
            "roomid": 5,
            "service": 4
        }, {
            "roomid": 11,
            "service": 1
        }, {
            "roomid": 5,
            "service": 7
        }, {
            "roomid": 20,
            "service": 7
        }, {
            "roomid": 19,
            "service": 6
        }, {
            "roomid": 16,
            "service": 2
        }, {
            "roomid": 5,
            "service": 2
        }, {
            "roomid": 14,
            "service": 8
        }, {
            "roomid": 14,
            "service": 1
        }, {
            "roomid": 10,
            "service": 8
        }, {
            "roomid": 8,
            "service": 3
        }, {
            "roomid": 7,
            "service": 3
        }, {
            "roomid": 19,
            "service": 7
        }, {
            "roomid": 6,
            "service": 1
        }, {
            "roomid": 13,
            "service": 1
        }, {
            "roomid": 17,
            "service": 2
        }, {
            "roomid": 10,
            "service": 5
        }]
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()')
            item.updatedAt = Sequelize.literal('NOW()')
            return item
        })
        await queryInterface.bulkInsert('RoomServices', data, {});
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
