'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER
      },
      checkin: {
        type: Sequelize.BIGINT
      },
      checkout: {
        type: Sequelize.BIGINT
      },
      total: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cusname: {
        type: Sequelize.TEXT
      },
      cusphone: {
        type: Sequelize.INTEGER
      },
      cusmail: {
        type: Sequelize.TEXT
      },
      cusstate: {
        type: Sequelize.TEXT
      },
      custime: {
        type: Sequelize.TEXT
      },
      services: {
        type: Sequelize.TEXT
      },
      request: {
        type: Sequelize.TEXT
      },
      reservationid: {
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};