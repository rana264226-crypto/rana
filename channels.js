const channels = [
  {
    name: "Saudi Quran",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4atGM34rXtNQzx2wCnQQVzGSjU805qIOdFw&usqp=CAU",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/SaudiQuran-142/playlist.m3u8"
  },
  {
    name: "Saudi Sunnah",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGupfsMkkP5X3iP6XZx6yi2LSzq8_6TIOC-w&usqp=CAU",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/SaudiSunnah-141/live/141M/chunks.m3u8"
  },
  {
    name: "Madani Tv",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLdTFn4TdP5-rF7YyPXTvOKguRsWJ0q0-cEDZUJ1gKGIl85TEpTiYSx0&s=10",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/Madni-121/playlist.m3u8"
  },
  {
    name: "PTV Home",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsvRHu6ZhAQdM0FE5MRF4Goto2-mcA6K4sw&usqp=CAU",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/ptv-home-174/playlist.m3u8"
  },
  {
    name: "Bol TV",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIKXUbh96lR2jrQ90lzfteBQuVL8TROFk0w&usqp=CAU",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/bolnent-159-4/playlist.m3u8"
  },
  {
    name: "Bol News",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgK3r8pJhDdYfdu-8lGclYbvW6W4wB9lNqF-1MvwY05aPkBrB_1zigQHA&s=10",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/bolnews-159-3/playlist.m3u8"
  }
];

const grid = document.getElementById("channelGrid");

channels.forEach((ch, index) => {
  const img = document.createElement("img");
  img.src = ch.logo;
  img.alt = ch.name;
  img.className = "channel-logo";
  img.onclick = () => playChannel(img, ch.name, ch.url);
  grid.appendChild(img);
});
