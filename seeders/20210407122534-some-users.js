"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "James Watt",
          bio:
            "Hi there, I am a DIY fanatic and I recently became a father and I started making toys for kids. As well, I really enjoy creating decorations for interiors and using particular materials. Please feel free to reach me on my email address for any questions or tips.",
          email: "james@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Marc Flander",
          bio:
            "G'day fellow DIY enthusiast. My craftwork is specialized in embroidery cross stitch works and I could do this all day every day. That's why I like to share my ideas with other people and maybe we could exchange ideas so I can even embroider more. Sharing is caring guys. Have fun looking (and working) at my designs! Contact info on webpage.",
          email: "marc@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Floris de Jong",
          bio:
            "Hola! They call me the scrunchie girl. On my webpage it's all things scrunchie, because there is nothing better than wearing scrunchies, right? Well, now there's no need to buy them anymore, you can make them yourself easily as I did. I also do custommade scrunchies, you can contact me through email or on my Instagram(@floris-scrunchies).",
          email: "floris@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Mila Fortunato",
          bio:
            "Mac(ra)me crazy. 1001 macrame ideas will be available on this page. A few are already listed. I have a passion for crafting and recently found this page to see there are more likeminded people. Much love from NY!",
          email: "mila@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
