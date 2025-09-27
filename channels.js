const channels = [
  {
    name: "Saudi Quran",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4atGM34rXtNQzx2wCnQQVzGSjU805qIOdFw&usqp=CAU",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/SaudiQuran-142/playlist.m3u8"
  },
  {
    name: "Madani Tv",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLdTFn4TdP5-rF7YyPXTvOKguRsWJ0q0-cEDZUJ1gKGIl85TEpTiYSx0&s=10",
    url: "https://vodzong.mjunoon.tv:8087/streamtest/Madni-121/playlist.m3u8"
  }
  // Add more channels here...
];

const container = document.getElementById('channel-container');

channels.forEach(ch => {
  const img = document.createElement('img');
  img.src = ch.logo;
  img.alt = ch.name;
  img.className = 'channel-logo';
  img.onclick = () => playChannel(ch);
  container.appendChild(img);
});

function playChannel(channel) {
  videoPlayer.src = channel.url;
  videoPlayer.play();
}
