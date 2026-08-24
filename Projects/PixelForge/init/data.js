const sampleListings = [
  // 1
  {
    title: "Grand Theft Auto VI",
    description:
      "Experience the next chapter of the legendary Grand Theft Auto series.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202606/1818/9f51f0ccdb65bd29c36a0907a738c2902a712f03e2fd6470.png?w=1920",
    price: 7499,
    developer: "Rockstar Games",
    genre: "Action-Adventure",
  },

  // 2
  {
    title: "Black Myth: Wukong",
    description:
      "An action RPG inspired by the legendary Chinese tale Journey to the West.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202405/2117/bd406f42e9352fdb398efcf21a4ffe575b2306ac40089d21.png?w=1920",
    price: 2799,
    developer: "Game Science",
    genre: "Action RPG",
  },

  // 3
  {
    title: "EA SPORTS FC 27",
    description:
      "Experience the next generation of football with EA SPORTS FC.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202607/2322/78e0ba12f88a79c454b6b17d1638f2ae0b2943f1dbc98a17.png?w=1920",
    price: 8999,
    developer: "EA Sports",
    genre: "Sports",
  },

  // 4
  {
    title: "Mortal Shell II",
    description:
      "A dark and challenging action RPG filled with brutal combat and dangerous enemies.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202605/1509/1d0b85f713fa47d73f2a649a9e12a940361ec51d0b2cefb5.png?w=1920",
    price: 2999,
    developer: "Cold Symmetry",
    genre: "Action RPG",
  },

  // 5
  {
    title: "Call of Duty",
    description:
      "Jump into intense first-person shooter combat across a variety of battlefields.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202605/2815/e7c940f1c3b9c2725e08b10979926ed6b71482f6f42a65ba.png?w=1920",
    price: 5999,
    developer: "Activision",
    genre: "First-Person Shooter",
  },

  // 6
  {
    title: "Marvel's Wolverine",
    description:
      "Take control of Wolverine in an intense action-packed Marvel adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202510/0721/e54995d925972b21f0092d0f27a4884f2c883c439514dede.png?w=1920",
    price: 4999,
    developer: "Insomniac Games",
    genre: "Action-Adventure",
  },

  // 7
  {
    title: "EA SPORTS FC 26",
    description:
      "Build your ultimate football experience with EA SPORTS FC 26.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202608/0314/5217c783f0198d437a0e0e97848d0a3a61c4af84262fd5f2.png?w=1920",
    price: 4999,
    developer: "EA Sports",
    genre: "Sports",
  },

  // 8
  {
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    description:
      "Explore a dangerous post-apocalyptic world filled with mutants and mysteries.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202608/0416/de7e107b83a2a6024ea287ee615643edf20429d1104b85cf.png?w=1920",
    price: 2449,
    developer: "GSC Game World",
    genre: "Survival Horror",
  },

  // 9
  {
    title: "007 First Light",
    description:
      "Step into the world of James Bond in this action-packed spy adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202507/0215/f98041a10ccc22d45fc2f6eded09eec50abd106d01547a5d.png?w=1920",
    price: 3999,
    developer: "IO Interactive",
    genre: "Action-Adventure",
  },

  // 10
  {
    title: "Fortnite",
    description:
      "Battle, build and survive in the ever-changing world of Fortnite.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202608/2000/2c7ee56fbf89ace584ee82e74ec198d061a3e035d9f8ee7f.png?w=1920",
    price: 0,
    developer: "Epic Games",
    genre: "Battle Royale",
  },

  // 11
  {
    title: "Grand Theft Auto V",
    description:
      "Explore Los Santos and experience one of the most iconic open-world games ever created.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=1920",
    price: 1669,
    developer: "Rockstar Games",
    genre: "Action-Adventure",
  },

  // 12
  {
    title: "TEKKEN 8",
    description:
      "Enter the next generation of fighting games with intense martial arts combat.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png?w=1920",
    price: 1499,
    developer: "Bandai Namco Studios",
    genre: "Fighting",
  },

  // 13
  {
    title: "Ghost of Yotei",
    description:
      "Embark on an epic samurai adventure through a beautiful and dangerous Japanese landscape.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/050bb77f895515e0b0e906b0b9d75b6174b37eece097b462.png?w=1920",
    price: 4999,
    developer: "Sucker Punch Productions",
    genre: "Action-Adventure",
  },

  // 14
  {
    title: "UFC 6",
    description:
      "Step into the octagon and experience realistic mixed martial arts combat.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202604/2216/83baec5746075ec3e379c096dfe68111095c91cb7139a633.png?w=1920",
    price: 4999,
    developer: "EA Sports",
    genre: "Sports",
  },

  // 15
  {
    title: "Assassin's Creed Black Flag Resynced",
    description:
      "Return to the golden age of piracy and experience an iconic Assassin's Creed adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202603/1215/0962bc91a4952e6433367fcfec38b7e0655c6bd29b431712.png?w=1920",
    price: 4199,
    developer: "Ubisoft",
    genre: "Action-Adventure",
  },

  // 16
  {
    title: "WWE 2K26",
    description:
      "Experience the world of professional wrestling with an expanded WWE roster.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202601/2617/7d34370effa78b3d662f03900e7934d577d48b030d192f97.png?w=1920",
    price: 4999,
    developer: "Visual Concepts",
    genre: "Sports",
  },

  // 17
  {
    title: "Forza Horizon 5",
    description:
      "Drive through the stunning landscapes of Mexico in an open-world racing experience.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202501/2717/42b3ee6b1b2094212231b0b0a82824f687fc5c4dc9bde31c.png?w=1920",
    price: 3999,
    developer: "Playground Games",
    genre: "Racing",
  },

  // 18
  {
    title: "Mafia: Definitive Edition",
    description:
      "Experience a cinematic crime story set in the world of organized crime.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202006/1023/35jaBRLW6kV4wfF3bi0nxRIH.png?w=1920",
    price: 374,
    developer: "Hangar 13",
    genre: "Action-Adventure",
  },

  // 19
  {
    title: "Mafia: The Old Country",
    description:
      "Discover the origins of the Mafia through a story set in the Sicilian underworld.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202504/2416/06f677b905f8794395b855a0de3e9fcb42b567e78c50aaed.png?w=1920",
    price: 4999,
    developer: "Hangar 13",
    genre: "Action-Adventure",
  },

  // 20
  {
    title: "NBA 2K27",
    description: "Experience the next generation of basketball with NBA 2K.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202606/2913/4a31f711e2ff460cd44ad646983f36533278cea61f639be9.png?w=1920",
    price: 4999,
    developer: "Visual Concepts",
    genre: "Sports",
  },

  // 21
  {
    title: "Phantom Blade Zero",
    description:
      "A fast-paced action RPG featuring intense sword combat and a dark martial arts world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202607/2810/8ea15bce1b7336894aa364867c03a3ea32ecd2f1455a4333.png?w=1920",
    price: 4299,
    developer: "S-GAME",
    genre: "Action RPG",
  },

  // 22
  {
    title: "Roblox",
    description:
      "Explore millions of user-created experiences and create your own virtual adventures.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202604/0801/f2bdf0b6807d0e43c432e4de00f444df6c97732065904006.png?w=1920",
    price: 0,
    developer: "Roblox Corporation",
    genre: "Adventure",
  },

  // 23
  {
    title: "Minecraft",
    description:
      "Explore, build and survive in an endlessly creative block-based world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png?w=1920",
    price: 1499,
    developer: "Mojang Studios",
    genre: "Sandbox",
  },

  // 24
  {
    title: "Onimusha: Way of the Sword",
    description:
      "Take up the sword and battle supernatural enemies in a dark samurai world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202605/1308/79a186e6a055909cfeb66264230ad3d76915587b0269cd0d.png?w=1920",
    price: 4999,
    developer: "Capcom",
    genre: "Action",
  },

  // 25
  {
    title: "Cricket 26 - The Official Game of the Ashes",
    description:
      "Experience authentic cricket gameplay and compete in the ultimate cricket experience.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202510/1410/9eee11270bf24e2fb87671f8b3d554af09be0b1e998579d1.jpg?w=1920",
    price: 4399,
    developer: "Big Ant Studios",
    genre: "Sports",
  },

  // 26
  {
    title: "Diablo IV",
    description:
      "Enter a dark fantasy world and battle demonic forces in an epic action RPG.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202405/3123/4168ef9b8695981a2e53f4a548319c27a32e320535a938ec.jpg?w=1920",
    price: 2496,
    developer: "Blizzard Entertainment",
    genre: "Action RPG",
  },

  // 27
  {
    title: "Microsoft Flight Simulator 2024",
    description:
      "Take to the skies and explore the world in an immersive flight simulation experience.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202509/1813/0f0bc1caecb1452ea2699ddbda3f5ae4dacb3144f28265ab.png?w=1920",
    price: 5000,
    developer: "Asobo Studio",
    genre: "Simulation",
  },

  // 28
  {
    title: "Battlefield 6",
    description:
      "Experience massive-scale warfare with intense multiplayer combat.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/7262f0bce0e977a4eda78df1a00af04578583c15d8fb1e10.png?w=1920",
    price: 4999,
    developer: "DICE",
    genre: "First-Person Shooter",
  },

  // 29
  {
    title: "eFootball",
    description:
      "Play competitive football with teams and players from around the world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202608/1804/b4352d6f6fc5b3bd02435bde0a5444312009f430309adf6d.jpg?w=1920",
    price: 0,
    developer: "Konami",
    genre: "Sports",
  },

  // 30
  {
    title: "The Crew Motorfest",
    description:
      "Explore a vibrant open world and experience high-speed racing across beautiful locations.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202411/2217/a4c27a1ff10c6c071d660d212f3ccd623d3f386e939027a9.jpg?w=1920",
    price: 999,
    developer: "Ubisoft Ivory Tower",
    genre: "Racing",
  },

  // 31
  {
    title: "Wuthering Waves",
    description:
      "Explore a vast post-apocalyptic world in this open-world action RPG.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202608/0509/16f6f16e942e81e6946f0830e1399e8ef8fdeb87f5b23439.png?w=1920",
    price: 0,
    developer: "Kuro Games",
    genre: "Action RPG",
  },

  // 32
  {
    title: "Gran Turismo 7",
    description:
      "Experience realistic driving and an extensive collection of cars and tracks.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/y7iyxoBE8VKotN89QCFhLgLM.png?w=1920",
    price: 4999,
    developer: "Polyphony Digital",
    genre: "Racing",
  },

  // 33
  {
    title: "Marvel's Spider-Man 2",
    description:
      "Swing through New York and experience an action-packed Spider-Man adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg?w=1920",
    price: 4999,
    developer: "Insomniac Games",
    genre: "Action-Adventure",
  },

  // 34
  {
    title: "ELDEN RING",
    description:
      "Explore a vast fantasy world filled with powerful enemies, secrets and challenging combat.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/636522fa4f2f7130c23e833a94774354a6dfb79db469face.jpg?w=1920",
    price: 3499,
    developer: "FromSoftware",
    genre: "Action RPG",
  },

  // 35
  {
    title: "NTE: Neverness to Everness",
    description:
      "Explore an urban fantasy world filled with supernatural mysteries and action.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202606/1806/884ceb0dadc51b4c46e7748b0bf1f05d4a65a29efd6a0985.jpg?w=1920",
    price: 0,
    developer: "Hotta Studio",
    genre: "Action RPG",
  },

  // 36
  {
    title: "ASTRO BOT",
    description:
      "Join Astro on a colorful platforming adventure across imaginative worlds.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/80ecf657918558eeef8da3ee4cef326e4517d34e6c69d950.jpg?w=1920",
    price: 3999,
    developer: "Team Asobi",
    genre: "Platformer",
  },

  // 37
  {
    title: "It Takes Two",
    description:
      "Join forces with a friend in this unique cooperative adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/UkFiVyReEoiV28rXgyHYKhfS.png?w=1920",
    price: 2499,
    developer: "Hazelight Studios",
    genre: "Co-op Adventure",
  },

  // 38
  {
    title: "Assassin's Creed Shadows",
    description:
      "Explore feudal Japan as two unique assassins with different abilities and playstyles.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202412/2018/f5a4f3f89d83a53b6ce319816637fb358e4880b7505ee37d.jpg?w=1920",
    price: 5599,
    developer: "Ubisoft",
    genre: "Action RPG",
  },

  // 39
  {
    title: "Crimson Desert",
    description:
      "Explore a vast open world and fight through an epic medieval fantasy adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202603/1311/7f6eac305ef26d5fd7c6fd34800d38df8975177d0333fc13.jpg?w=1920",
    price: 4499,
    developer: "Pearl Abyss",
    genre: "Action-Adventure",
  },

  // 40
  {
    title: "Batman: Arkham Knight",
    description:
      "Become Batman and protect Gotham City from its most dangerous villains.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/0915/33a2bc694cae0b6ea1210602a36360427af8486f3b10c0d4.jpg?w=1920",
    price: 374,
    developer: "Rocksteady Studios",
    genre: "Action-Adventure",
  },

  // 41
  {
    title: "Assassin's Creed Odyssey",
    description: "Explore ancient Greece and forge your own legendary journey.",
    image:
      "https://image.api.playstation.com/cdn/EP0001/CUSA09303_00/tzKcptCCUkiigpacybO8xWmvxPS7vIzk.png?w=1920",
    price: 799,
    developer: "Ubisoft Quebec",
    genre: "Action RPG",
  },

  // 42
  {
    title: "The Sinking City 2",
    description:
      "Investigate supernatural mysteries in a dark world inspired by cosmic horror.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202606/2213/60ddc0fa2e11999f42733614aaf5508b45fbfa363b6159c9.jpg?w=1920",
    price: 4162,
    developer: "Frogwares",
    genre: "Horror",
  },

  // 43
  {
    title: "The Blood of Dawnwalker",
    description:
      "Enter a dark fantasy world where humans and supernatural creatures fight for survival.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202603/3009/2fe5f1f871ec6cbbd9be2923f146591df90c03137bb01169.jpg?w=1920",
    price: 3999,
    developer: "Rebel Wolves",
    genre: "Action RPG",
  },

  // 44
  {
    title: "HITMAN World of Assassination",
    description:
      "Become Agent 47 and execute strategic assassinations across locations around the world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202501/0713/2f787fa1850b9d4187e870d4684d64b9d45462633ee6a3ff.png?w=1920",
    price: 5827,
    developer: "IO Interactive",
    genre: "Stealth",
  },

  // 45
  {
    title: "F1 25",
    description: "Experience the speed and intensity of Formula 1 racing.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202505/1521/80e6788c8f7efd41b3ad8ea2369ae05a451e75ab291ab357.png?w=1920",
    price: 4999,
    developer: "Codemasters",
    genre: "Racing",
  },

  // 46
  {
    title: "Mortal Kombat 1",
    description:
      "Enter a reborn Mortal Kombat universe with brutal fighting and iconic characters.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/101ab6f4acb5f917fd61d9cc91de48f520d3986abf9bfe33.jpg?w=1920",
    price: 2999,
    developer: "NetherRealm Studios",
    genre: "Fighting",
  },

  // 47
  {
    title: "Split Fiction",
    description:
      "Team up with a friend and travel through imaginative worlds in this cooperative adventure.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202502/2109/e91a606a8a96309d2349f48aac49c75bb8769b6610321f6b.png?w=1920",
    price: 3999,
    developer: "Hazelight Studios",
    genre: "Co-op Adventure",
  },

  // 48
  {
    title: "World of Warships: Legends",
    description:
      "Command powerful warships and compete in strategic naval battles.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202607/2413/037ef52eb3805cc5325f60ca97681c4a061138a1ffc37728.jpg?w=1920",
    price: 0,
    developer: "Wargaming",
    genre: "Action",
  },
];

module.exports = { data: sampleListings };
