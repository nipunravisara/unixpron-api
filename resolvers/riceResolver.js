import cheerio from "cheerio";

const rices = async () => {
  // "https://www.reddit.com/r/unixporn/?f=flair_name%3A%22Screenshot%22",
  const $ = cheerio.load('<h2 class="title">Hello world</h2>');

  return [
    {
      id: 1,
      title: "New card what do you think?",
      windowManager: "BSPWM",
      image: "https://i.redd.it/yu71cryp67m71.png",
      upvotes: 166,
      riceUrl:
        "https://www.reddit.com/r/unixporn/comments/pk2k5q/bspwm_new_card_what_do_you_think/",
      author: "Psychological_Offer4",
      authorUrl: "https://www.reddit.com/user/Psychological_Offer4/",
      createdAt: "1 month ago",
    },
  ];
};

export default rices;
