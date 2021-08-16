'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts',
      [
        {
          "title": "Cupidatat aliquip aute in aliqua ad.",
          "content": "Minim amet sunt aliqua minim consequat proident veniam est velit mollit do laborum. Lorem anim reprehenderit duis dolor eiusmod"
        },
        {
          "title": "Laborum cillum aliquip ea qui eiusmod.",
          "content": "Et amet officia irure quis eiusmod duis quis veniam officia."
        },
        {
          "title": "Est sint eiusmod occaecat dolor dolor pariatur nulla.",
          "content": "Proident excepteur fugiat officia culpa non. Amet est nostrud aute aute sint enim ea et sint quis id. Adipisicing est nostrud ipsum amet id est aliquip. "
        },
        {
          "title": "Consequat minim enim labore commodo anim commodo sunt in.",
          "content": "Mollit Lorem commodo laborum deserunt nisi Lorem exercitation consectetur occaecat commodo irure ea. "
        },
        {
          "title": "Ad ex voluptate eu ipsum proident anim.",
          "content": "Dolor aute magna voluptate laborum velit qui consectetur. Minim quis amet excepteur voluptate ea sunt do do ut Lorem. "
        },
        {
          "title": "Deserunt voluptate sit non eiusmod deserunt eu voluptate id.",
          "content": "Eiusmod adipisicing laborum dolore in cupidatat Lorem velit ut voluptate minim."
        },
        {
          "title": "Esse ut id amet voluptate minim nostrud cillum commodo aliqua ea laborum.",
          "content": "Nulla aliqua eu voluptate est. Occaecat velit id minim labore Lorem commodo ad."
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', {}, null);
  }
};
