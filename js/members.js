const members = [
    // GENERATION 0 JP
    { name: "Tokino Sora", genID: [ "JP" ], debutDate: new Date("2017-09-07"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg", twitter: "https://twitter.com/tokino_sora",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433553", hololiveJP: "https://www.hololive.tv/portfolio/items/336222" },
    { lastName: "Roboco", genID: [ "JP" ], debutDate: new Date("2018-03-04"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCDqI2jOz0weumE8s7paEk6g", twitter: "https://twitter.com/robocosan",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433579", hololiveJP: "https://www.hololive.tv/portfolio/items/336223" },
    { lastName: "Sakura Miko", genID: [ "JP" ], debutDate: new Date("2018-08-01"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA", twitter: "https://twitter.com/sakuramiko35",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433578", hololiveJP: "https://www.hololive.tv/portfolio/items/336371" },
    { lastName: "Hoshimachi Suisei", genID: [ "JP" ], debutDate: new Date("2018-03-22"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A", twitter: "https://twitter.com/suisei_hosimati",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433550", hololiveJP: "https://www.hololive.tv/portfolio/items/345947" },
    { lastName: "AZKi", genID: [ "JP", "INNK" ], debutDate: new Date("2018-11-15"), graduation: null,
    youtube: "https://www.hololive.tv/portfolio/items/345947", twitter: "https://twitter.com/AZKi_VDiVA",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433588", hololiveJP: "https://www.hololive.tv/portfolio/items/336226" },

    // GENERATION 1 JP
    { lastName: "Yozora Mel", genID: [ "JP" ], debutDate: new Date("2018-05-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCD8HOxPs4Xvsm8H0ZxXGiBw", twitter: "https://twitter.com/yozoramel",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433549", hololiveJP: "https://www.hololive.tv/portfolio/items/336404" },
    { lastName: "Shirakami Fubuki", genID: [ "JP", "GAMERS" ], debutDate: new Date("2018-06-01"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg", twitter: "https://twitter.com/shirakamifubuki",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433587", hololiveJP: "https://www.hololive.tv/portfolio/items/336378" },
    { lastName: "Natsuiro Matsuri", genID: [ "JP" ], debutDate: new Date("2018-06-01"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCQ0UDLQCjY0rmuxCDE38FGg", twitter: "https://twitter.com/natsuiromatsuri",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433575", hololiveJP: "https://www.hololive.tv/portfolio/items/336381" },
    { lastName: "Aki Rosenthal", genID: [ "JP" ], debutDate: new Date("2018-06-07"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA", twitter: "https://twitter.com/akirosenthal",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433574", hololiveJP: "https://www.hololive.tv/portfolio/items/336382" },
    { lastName: "Akai Haato", genID: [ "JP" ], debutDate: new Date("2018-06-02"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg", twitter: "https://twitter.com/akaihaato",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433551", hololiveJP: "https://www.hololive.tv/portfolio/items/336380" },
    { lastName: "Hitomi Chris", genID: [ "JP" ], debutDate: new Date("2018-06-03"), graduation: undefined,
    youtube: null, twitter: "https://twitter.com/hitomikurisu",
    hololiveEN: null, hololiveJP: null },

    // GENERATION 2 JP
    { lastName: "Minato Aqua", genID: [ "JP" ], debutDate: new Date("2018-08-08"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg", twitter: "https://twitter.com/minatoaqua",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433565", hololiveJP: "https://www.hololive.tv/portfolio/items/336383" },
    { lastName: "Murasaki Shion", genID: [ "JP" ], debutDate: new Date("2018-08-17"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw", twitter: "https://twitter.com/murasakishionch",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433577", hololiveJP: "https://www.hololive.tv/portfolio/items/336387" },
    { lastName: "Nakiri Ayame", genID: [ "JP" ], debutDate: new Date("2018-09-03"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC7fk0CB07ly8oSl0aqKkqFg", twitter: "https://twitter.com/nakiriayame",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433583", hololiveJP: "https://www.hololive.tv/portfolio/items/336384" },
    { lastName: "Yuzuki Choco", genID: [ "JP" ], debutDate: new Date("2018-09-05"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg", twitter: "https://twitter.com/yuzukichococh",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433552", hololiveJP: "https://www.hololive.tv/portfolio/items/336386" },
    { lastName: "Oozora Subaru",genID: [ "JP" ], debutDate: new Date("2018-09-16"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA", twitter: "https://twitter.com/oozorasubaru",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433593", hololiveJP: "https://www.hololive.tv/portfolio/items/336385" },

    // GAMERS
    // Fubuki already listed in gen 0
    { lastName: "Ookami Mio", genID: [ "GAMERS" ], debutDate: new Date("2018-12-07"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg", twitter: "https://twitter.com/ookamimio",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433580", hololiveJP: "https://www.hololive.tv/portfolio/items/336400" },
    { lastName: "Nekomata Okayu", genID: [ "GAMERS" ], debutDate: new Date("2019-04-06"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw", twitter: "https://twitter.com/nekomataokayu",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433581", hololiveJP: "https://www.hololive.tv/portfolio/items/336402" },
    { lastName: "Inugami Korone", genID: [ "GAMERS" ], debutDate: new Date("2019-04-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q", twitter: "https://twitter.com/inugamikorone",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433592", hololiveJP: "https://www.hololive.tv/portfolio/items/336401" },

    // GENERATION 3 JP
    { lastName: "Usada Pekora", genID: [ "JP" ], debutDate: new Date("2019-07-17"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ", twitter: "https://twitter.com/usadapekora",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433585", hololiveJP: "https://www.hololive.tv/portfolio/items/336270" },
    { lastName: "Uruha Rushia", genID: [ "JP" ], debutDate: new Date("2019-07-18"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ", twitter: "https://twitter.com/uruharushia",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433576", hololiveJP: "https://www.hololive.tv/portfolio/items/336265" },
    { lastName: "Shiranui Flare", genID: [ "JP" ], debutDate: new Date("2019-08-07"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg", twitter: "https://twitter.com/shiranuiflare",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433584", hololiveJP: "https://www.hololive.tv/portfolio/items/336354" },
    { lastName: "Shirogane Noel", genID: [ "JP" ], debutDate: new Date("2019-08-08"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCdyqAaZDKHXg4Ahi7VENThQ", twitter: "https://twitter.com/shiroganenoel",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433582", hololiveJP: "https://www.hololive.tv/portfolio/items/336353" },
    { lastName: "Houshou Marine", genID: [ "JP" ], debutDate: new Date("2019-08-11"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg", twitter: "https://twitter.com/houshoumarine",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433586", hololiveJP: "https://www.hololive.tv/portfolio/items/336351" },

    // GENERATION 4 JP
    { lastName: "Amane Kanata", genID: [ "JP" ], debutDate: new Date("2019-12-27"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg", twitter: "https://twitter.com/amanekanatach",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433562", hololiveJP: "https://www.hololive.tv/portfolio/items/360916" },
    { lastName: "Kiryu Coco", genID: [ "JP" ], debutDate: new Date("2019-12-28"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w", twitter: "https://twitter.com/kiryucoco",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433563", hololiveJP: "https://www.hololive.tv/portfolio/items/360918" },
    { lastName: "Tsunomaki Watame", genID: [ "JP" ], debutDate: new Date("2019-12-29"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA", twitter: "https://twitter.com/tsunomakiwatame",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433561", hololiveJP: "https://www.hololive.tv/portfolio/items/360919" },
    { lastName: "Tokoyami Towa", genID: [ "JP" ], debutDate: new Date("2020-01-03"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC1uv2Oq6kNxgATlCiez59hw", twitter: "https://twitter.com/tokoyamitowa",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433567", hololiveJP: "https://www.hololive.tv/portfolio/items/360920" },
    { lastName: "Himemori Luna", genID: [ "JP" ], debutDate: new Date("2020-01-04"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCa9Y57gfeY0Zro_noHRVrnw", twitter: "https://twitter.com/himemoriluna",
    hololiveEN: "https://en.hololive.tv/portfolio/items/433566", hololiveJP: "https://www.hololive.tv/portfolio/items/360921" },

    // GENERATION 5 JP
    { lastName: "Yukihana Lamy", genID: [ "JP" ], debutDate: new Date("2020-08-12"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCFKOVgVbGmX65RxO3EtH3iw", twitter: "https://twitter.com/yukihanalamy",
    hololiveEN: "https://en.hololive.tv/portfolio/items/554781", hololiveJP: "https://www.hololive.tv/portfolio/items/554688" },
    { lastName: "Momosuzu Nene", genID: [ "JP" ], debutDate: new Date("2020-08-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA", twitter: "https://twitter.com/momosuzunene",
    hololiveEN: "https://en.hololive.tv/portfolio/items/554783", hololiveJP: "https://www.hololive.tv/portfolio/items/554694" },
    { lastName: "Shishiro Botan", genID: [ "JP" ], debutDate: new Date("2020-08-14"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCUKD-uaobj9jiqB-VXt71mA", twitter: "https://twitter.com/shishirobotan",
    hololiveEN: "https://en.hololive.tv/portfolio/items/554786", hololiveJP: "https://www.hololive.tv/portfolio/items/554695" },
    { lastName: "Omaru Polka", genID: [ "JP" ], debutDate: new Date("2020-08-16"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA", twitter: "https://twitter.com/omarupolka",
    hololiveEN: "https://en.hololive.tv/portfolio/items/554793", hololiveJP: "https://www.hololive.tv/portfolio/items/554697" },
    { lastName: "Mano Aloe", genID: [ "JP" ], debutDate: new Date("2020-08-15"), graduation: new Date("2020-08-31"),
    youtube: null, twitter: "https://twitter.com/manoaloe",
    hololiveEN: null, hololiveJP: null },

    // INNK MUSIC
    // AZKi already listed in gen 0

    // GENERATION 1 ID
    { lastName: "Ayunda Risu", genID: [ "ID" ], debutDate: new Date("2020-04-10"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCOyYb1c43VlX9rc_lT6NKQw", twitter: "https://twitter.com/ayunda_risu",
    hololiveEN: "https://en.hololive.tv/portfolio/items/438283", hololiveJP: "https://www.hololive.tv/portfolio/items/440312" },
    { lastName: "Moona Hoshinova", genID: [ "ID" ], debutDate: new Date("2020-04-11"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCP0BspO_AMEe3aQqqpo89Dg", twitter: "https://twitter.com/moonahoshinova",
    hololiveEN: "https://en.hololive.tv/portfolio/items/438286", hololiveJP: "https://www.hololive.tv/portfolio/items/440320" },
    { lastName: "Airani Iofifteen", genID: [ "ID" ], debutDate: new Date("2020-04-12"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg", twitter: "https://twitter.com/airaniiofifteen",
    hololiveEN: "https://en.hololive.tv/portfolio/items/438288", hololiveJP: "https://www.hololive.tv/portfolio/items/440326" },

    // GENERATION 2 ID
    { lastName: "Kureiji Ollie", genID: [ "ID" ], debutDate: new Date("2020-12-04"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCYz_5n-uDuChHtLo7My1HnQ", twitter: "https://twitter.com/kureijiollie",
    hololiveEN: "https://en.hololive.tv/portfolio/items/684687", hololiveJP: "https://www.hololive.tv/portfolio/items/684664" },
    { lastName: "Anya Melfissa", genID: [ "ID" ], debutDate: new Date("2020-12-05"), graduation: null,
    youtube: "https://www.youtube.com/channel/UC727SQYUvx5pDDGQpTICNWg", twitter: "https://twitter.com/anyamelfissa",
    hololiveEN: "https://en.hololive.tv/portfolio/items/684688", hololiveJP: "https://www.hololive.tv/portfolio/items/684665" },
    { lastName: "Pavolia Reine", genID: [ "ID" ], debutDate: new Date("2020-12-06"), graduation: null,
    youtube: "https://www.youtube.com/channel/UChgTyjG-pdNvxxhdsXfHQ5Q", twitter: "https://twitter.com/pavoliareine",
    hololiveEN: "https://en.hololive.tv/portfolio/items/684689", hololiveJP: "https://www.hololive.tv/portfolio/items/684666" },

    // GENERATION 1 EN
    { lastName: "Mori Calliope", genID: [ "EN" ], debutDate: new Date("2020-09-12"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg", twitter: "https://twitter.com/moricalliope",
    hololiveEN: "https://en.hololive.tv/portfolio/items/584527", hololiveJP: "https://www.hololive.tv/portfolio/items/584535" },
    { lastName: "Takanashi Kiara", genID: [ "EN" ], debutDate: new Date("2020-09-12"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCHsx4Hqa-1ORjQTh9TYDhww", twitter: "https://twitter.com/takanashikiara",
    hololiveEN: "https://en.hololive.tv/portfolio/items/584528", hololiveJP: "https://www.hololive.tv/portfolio/items/584540" },
    { lastName: "Ninomae Ina'nis", genID: [ "EN" ], debutDate: new Date("2020-09-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg", twitter: "https://twitter.com/ninomaeinanis",
    hololiveEN: "https://en.hololive.tv/portfolio/items/584532", hololiveJP: "https://www.hololive.tv/portfolio/items/584542" },
    { lastName: "Gawr Gura", genID: [ "EN" ], debutDate: new Date("2020-09-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g", twitter: "https://twitter.com/gawrgura",
    hololiveEN: "https://en.hololive.tv/portfolio/items/584533", hololiveJP: "https://www.hololive.tv/portfolio/items/584544" },
    { lastName: "Watson Amelia", genID: [ "EN" ], debutDate: new Date("2020-09-13"), graduation: null,
    youtube: "https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg", twitter: "https://twitter.com/watsonameliaEN",
    hololiveEN: "https://en.hololive.tv/portfolio/items/584534", hololiveJP: "https://www.hololive.tv/portfolio/items/584546" },

    // GENERATION 1 CN
    { lastName: "Yogiri", genID: [ "CN" ], debutDate: new Date("2019-09-28"), graduation: new Date("2020-12-20"),
    youtube: null, twitter: "https://twitter.com/_YOGiRi_owo",
    hololiveEN: null, hololiveJP: null },
    { lastName: "Civia", genID: [ "CN" ], debutDate: new Date("2019-11-01"), graduation: new Date("2020-12-18"),
    youtube: null, twitter: "https://twitter.com/_Civia",
    hololiveEN: null, hololiveJP: null },
    { lastName: "Space Echo", genID: [ "CN" ], debutDate: new Date("2020-01-30"), graduation: new Date("2020-12-21"),
    youtube: null, twitter: "https://twitter.com/SpadeEcho",
    hololiveEN: null, hololiveJP: null },

    // GENERATION 2 CN
    { lastName: "Doris", genID: [ "CN" ], debutDate: new Date("2020-03-06"), graduation: new Date("2020-11-05"),
    youtube: null, twitter: "https://twitter.com/Doris_Hololive",
    hololiveEN: null, hololiveJP: null },
    { lastName: "Rosalyn", genID: [ "CN" ], debutDate: new Date("2020-04-07"), graduation: new Date("2020-12-27"),
    youtube: null, twitter: "https://twitter.com/Doris_Hololive",
    hololiveEN: null, hololiveJP: null },
    { lastName: "Artia", genID: [ "CN" ], debutDate: new Date("2020-04-11"), graduation: new Date("2020-12-19"),
    youtube: null, twitter: "https://twitter.com/Artia_OW",
    hololiveEN: null, hololiveJP: null },
]