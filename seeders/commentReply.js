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
      "parrentid": 1,
      "roomid": 2,
      "content": "com.bizjournals.Cardify"
    }, {
      "parrentid": 1,
      "roomid": 5,
      "content": "com.webs.Redhold"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "ly.ow.Fixflex"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "org.gmpg.Sub-Ex"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "de.1und1.Treeflex"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "com.tumblr.Redhold"
    }, {
      "parrentid": 2,
      "roomid": 5,
      "content": "com.slate.Lotlux"
    }, {
      "parrentid": 2,
      "roomid": 4,
      "content": "com.merriam-webster.Lotlux"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "cn.google.Aerified"
    }, {
      "parrentid": 2,
      "roomid": 5,
      "content": "jp.ne.ocn.Overhold"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "com.foxnews.Kanlam"
    }, {
      "parrentid": 2,
      "roomid": 4,
      "content": "us.icio.Zamit"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "com.diigo.Bitwolf"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "jp.exblog.Daltfresh"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "com.cnn.Biodex"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "net.cpanel.Tempsoft"
    }, {
      "parrentid": 2,
      "roomid": 5,
      "content": "com.bloglines.Pannier"
    }, {
      "parrentid": 1,
      "roomid": 1,
      "content": "gov.census.Cardguard"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "net.seesaa.Solarbreeze"
    }, {
      "parrentid": 2,
      "roomid": 4,
      "content": "edu.msu.Regrant"
    }, {
      "parrentid": 2,
      "roomid": 4,
      "content": "net.cpanel.Zaam-Dox"
    }, {
      "parrentid": 2,
      "roomid": 3,
      "content": "com.example.Stim"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "com.washingtonpost.Zamit"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "com.engadget.Sonsing"
    }, {
      "parrentid": 2,
      "roomid": 3,
      "content": "fr.unblog.Andalax"
    }, {
      "parrentid": 2,
      "roomid": 2,
      "content": "com.foxnews.Y-find"
    }, {
      "parrentid": 2,
      "roomid": 5,
      "content": "net.behance.Ventosanzap"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "co.g.Aerified"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "com.tripod.Tin"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "edu.washington.Bitwolf"
    }, {
      "parrentid": 2,
      "roomid": 3,
      "content": "com.canalblog.Domainer"
    }, {
      "parrentid": 1,
      "roomid": 5,
      "content": "com.dailymotion.Bitchip"
    }, {
      "parrentid": 1,
      "roomid": 4,
      "content": "com.apple.Zaam-Dox"
    }, {
      "parrentid": 2,
      "roomid": 3,
      "content": "ru.odnoklassniki.Zathin"
    }, {
      "parrentid": 1,
      "roomid": 2,
      "content": "de.e-recht24.Konklab"
    }, {
      "parrentid": 1,
      "roomid": 2,
      "content": "cn.google.Tres-Zap"
    }, {
      "parrentid": 1,
      "roomid": 2,
      "content": "com.cnbc.Y-Solowarm"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "com.lycos.Stim"
    }, {
      "parrentid": 2,
      "roomid": 1,
      "content": "gov.senate.Stronghold"
    }, {
      "parrentid": 2,
      "roomid": 5,
      "content": "org.npr.Zontrax"
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()')
      item.updatedAt = Sequelize.literal('NOW()')
      return item
    })
    await queryInterface.bulkInsert('CommentReplies', data, {});

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
