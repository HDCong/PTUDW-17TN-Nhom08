'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        "price": 67,
        "imagepath": "images/listrooms-images/room1.jpg",
        "rating": 4,
        "name": "Sea Diamond 1",
        "isbooking": false,
        "description": "Our Sea Diamond 1 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 5,
        "area": 50,
        "count": 759
      },
      {
        "price": 56,
        "imagepath": "images/listrooms-images/room2.jpg",
        "rating": 4,
        "name": "Sea Diamond 2",
        "isbooking": false,
        "description": "Our Sea Diamond 2 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 5,
        "area": 45,
        "count": 744
      },
      {
        "price": 63,
        "imagepath": "images/listrooms-images/room3.jpg",
        "rating": 4,
        "name": "Sea Diamond 3",
        "isbooking": false,
        "description": "Our Sea Diamond 3 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 1,
        "area": 34,
        "count": 426
      },
      {
        "price": 45,
        "imagepath": "images/listrooms-images/room4.jpg",
        "rating": 4,
        "name": "Sea Diamond 4",
        "isbooking": false,
        "description": "Our Sea Diamond 4 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 2,
        "area": 43,
        "count": 765
      },
      {
        "price": 97,
        "imagepath": "images/listrooms-images/room5.jpg",
        "rating": 4,
        "name": "Sea Diamond 5",
        "isbooking": false,
        "description": "Our Sea Diamond 5 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 5,
        "area": 24,
        "count": 57
      },
      {
        "price": 118,
        "imagepath": "images/listrooms-images/room6.jpg",
        "rating": 4,
        "name": "Sea Diamond 6",
        "isbooking": false,
        "description": "Our Sea Diamond 6 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 1,
        "area": 24,
        "count": 64
      },
      {
        "price": 120,
        "imagepath": "images/listrooms-images/room7.jpg",
        "rating": 4,
        "name": "Sea Diamond 7",
        "isbooking": false,
        "description": "Our Sea Diamond 7 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 1,
        "area": 32,
        "count": 346
      },
      {
        "price": 141,
        "imagepath": "images/listrooms-images/room8.jpg",
        "rating": 4,
        "name": "Sea Diamond 8",
        "isbooking": false,
        "description": "Our Sea Diamond 8 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 5,
        "area": 35,
        "count": 645
      },
      {
        "price": 152,
        "imagepath": "images/listrooms-images/room9.jpg",
        "rating": 4,
        "name": "Sea Diamond 9",
        "isbooking": false,
        "description": "Our Sea Diamond 9 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 10,
        "area": 30,
        "count": 254
      },
      {
        "price": 150,
        "imagepath": "images/listrooms-images/room10.jpg",
        "rating": 4,
        "name": "Sea Diamond 10",
        "isbooking": false,
        "description": "Our Sea Diamond 10 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 10,
        "area": 31,
        "count": 765
      },
      {
        "price": 200,
        "imagepath": "images/listrooms-images/room11.jpg",
        "rating": 4,
        "name": "Sea Diamond 11",
        "isbooking": false,
        "description": "Our Sea Diamond 11 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 10,
        "area": 21,
        "count": 354
      },
      {
        "price": 56,
        "imagepath": "images/listrooms-images/room12.jpg",
        "rating": 4,
        "name": "Sea Diamond 12",
        "isbooking": false,
        "description": "Our Sea Diamond 12 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 6,
        "area": 24,
        "count": 243
      },
      {
        "price": 46,
        "imagepath": "images/listrooms-images/room13.jpg",
        "rating": 4,
        "name": "Sea Diamond 13",
        "isbooking": false,
        "description": "Our Sea Diamond 13 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 4,
        "area": 45,
        "count": 654

      },
      {
        "price": 70,
        "imagepath": "images/listrooms-images/room14.jpg",
        "rating": 4,
        "name": "Sea Diamond 14",
        "isbooking": false,
        "description": "Our Sea Diamond 14 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 8,
        "area": 30,
        "count": 244
      },
      {
        "price": 45,
        "imagepath": "images/listrooms-images/room15.jpg",
        "rating": 4,
        "name": "Sea Diamond 15",
        "isbooking": false,
        "description": "Our Sea Diamond 15 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 10,
        "area": 34,
        "count": 442
      },
      {
        "price": 90,
        "imagepath": "images/listrooms-images/room16.jpg",
        "rating": 4,
        "name": "Sea Diamond 16",
        "isbooking": false,
        "description": "Our Sea Diamond 16 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 10,
        "area": 28,
        "count": 233
      },
      {
        "price": 111,
        "imagepath": "images/listrooms-images/room17.jpg",
        "rating": 4,
        "name": "Sea Diamond 17",
        "isbooking": false,
        "description": "Our Sea Diamond 17 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 2,
        "area": 29,
        "count": 445
      },
      {
        "price": 143,
        "imagepath": "images/listrooms-images/room18.jpg",
        "rating": 4,
        "name": "Sea Diamond 18",
        "isbooking": false,
        "description": "Our Sea Diamond 18 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 5,
        "area": 29,
        "count": 444
      },
      {
        "price": 177,
        "imagepath": "images/listrooms-images/room19.jpg",
        "rating": 4,
        "name": "Sea Diamond 19",
        "isbooking": false,
        "description": "Our Sea Diamond 19 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 2,
        "area": 24,
        "count": 58
      },
      {
        "price": 143,
        "imagepath": "images/listrooms-images/room20.jpg",
        "rating": 4,
        "name": "Sea Diamond 20",
        "isbooking": false,
        "description": "Our Sea Diamond 20 provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.",
        "capacity": 14,
        "area": 25,
        "count": 23
      }
    ]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()')
      item.updatedAt = Sequelize.literal('NOW()')
      return item
    })
    await queryInterface.bulkInsert('Rooms', data, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Rooms', null, {});

  }
};
