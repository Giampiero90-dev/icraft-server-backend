"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "creations",
      [
        {
          title: "Embroidery kit",
          description:
            "Frida Kahlo said, I paint flowers so they will not die. Now you can embroidery Frida and some flowers to keep the same spirit alive! This sweet entry-level embroidery took me 2 days to realise due to the details. The wooden embroidery hoop is used for holding the fabric while stitching, and then is also used as the frame to display the finished work.",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2682/5886/products/DSC_6462.jpg?v=1612206619",
          difficulty: 2,
          categoryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Crochet Octopus",
          description:
            "I really enjoyed crafting these ones. They came out very cute and my daughter already loves them! Its crocheted entirely from 100% prime quality cotton. A great way to practice your crochet skills for the fanatics like myself! Give it a try, if you have any questions let me know.",
          imageUrl:
            "https://i.etsystatic.com/13864336/r/il/65066e/1169665397/il_794xN.1169665397_ehps.jpg",
          difficulty: 3,
          categoryId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cotton Scrunchies",
          description:
            "100 % cotton scrunchies handmade by myself. I used a meter long cotton from Liberty London Fabrics to create a full scrunchie. Ask me any questions if you want to try to craft one, it is pretty easy.",
          imageUrl:
            "https://www.madeeveryday.com/wp-content/uploads/2020/07/scrunchies-Dana-Willard-1.jpg",
          difficulty: 1,
          categoryId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Macrame Hanging Shelf",
          description:
            "Handmade Macrame Wall Hanging shelves made with love. The shelves dimensions are 20cm long with 10cm depth and approx 40cm from the top hanging knot to the shelf. These shelves can be beautiful features in any room and perfect for displaying plants and other special pieces in your home.",
          imageUrl:
            "https://i.etsystatic.com/25132728/r/il/de2541/2866543297/il_794xN.2866543297_gt3u.jpg",
          difficulty: 4,
          categoryId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Plant Embroidery Kit",
          description:
            "A beautiful, modern design cactus and house plants, a minimalist green design. No tracing needed, just thread your needle and start creating! Perfect for beginner and beyond. You can enjoy DIY embroidery with children.Your embroidery works can also be used as special gifts for family or friends in Mother's day, Thanksgiving, Christmas and housewarming.",
          imageUrl:
            "https://i.etsystatic.com/24737729/r/il/e08a33/2914290184/il_794xN.2914290184_71ve.jpg",
          difficulty: 2,
          categoryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rattle giraffe",
          description:
            "This product was crocheted entirely from 100% prime quality cotton. It has a wooden ring at the bottom that can be used as teether for small children. A great way to practice your crochet skills for the fanatics like myself! Give it a try, if you have any questions let me know.",
          imageUrl:
            "https://i.etsystatic.com/9454236/r/il/e2bcfb/1271875004/il_794xN.1271875004_fw58.jpg",
          difficulty: 3,
          categoryId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Macrame plant hanger",
          description:
            "Handmade Macrame plant hanger! Give your livingspaces a touch of design with this simple Macrame. A must for the Macrame lovers! It took me around 4 hours to complete this craft and around one roll of bio organic cotton.",
          imageUrl:
            "https://i.etsystatic.com/20573300/r/il/72b9f6/2895300567/il_794xN.2895300567_cg0d.jpg",
          difficulty: 2,
          categoryId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "DIY stamps cork",
          description:
            "Handmade stamps made entirely from wine corks! A great idea to make your children play. It is pretty easy to realize them, give it a shot!",
          imageUrl:
            "https://i.pinimg.com/originals/75/00/11/7500113b1493c71036af207659f7e759.jpg",
          difficulty: 1,
          categoryId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Industrial pipe shelves",
          description:
            "I crafted these shelves after my plumber left me with some extra pipes after replacing our sink in the kitchen. So I thought of (re)using them in order to build something useful for my living room. This is for the advanced crafters!",
          imageUrl:
            "https://m.media-amazon.com/images/I/61STKiTvl7L._AC_SS450_.jpg",
          difficulty: 5,
          categoryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Macrame wall hanging tapestry",
          description:
            "This beautiful macrame wall hanging is handmade with 100% high quality cotton cord. It took me around 2 weeks to complete it since is one of the biggest I made but it was totally worthed as you can see the results. Fell free to contact me if you wanna try craft one yourself.",
          imageUrl:
            "https://i.etsystatic.com/13527283/r/il/837501/2310572901/il_794xN.2310572901_a36q.jpg",
          difficulty: 5,
          categoryId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cross Stitch embroidery",
          description:
            "This beautiful cross stitch artwork is one of my most difficult project that I crafted. It measures 46cm with and 60cm height. It took me around a month to comlpete it since the high number of shadows and color changes that I needed to apply.",
          imageUrl:
            "https://i.etsystatic.com/23729354/r/il/ba29c3/2458936271/il_794xN.2458936271_pt41.jpg",
          difficulty: 5,
          categoryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Embroidered Floral Scrunchies",
          description:
            "Cute embroidered floral scrunchies to add to your hair accessories collection. These scrunchies are good quality and eye-catching that will go with any occasion and outfit. It took me more time than usual since I decided to embroider the flowers myself. Let me know if you need any guidance to craft it yourself.",
          imageUrl:
            "https://i.etsystatic.com/23842830/r/il/2811ee/2968304373/il_794xN.2968304373_89pz.jpg",
          difficulty: 2,
          categoryId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("creations", null, {});
  },
};
