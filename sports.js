<script>
const sportsAndHDChannels = [
  {name:"ASIA CUP", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1756982709555.webp?id=16", url:"https://cdn2aws.tamashaweb.com/out/v1/bbe6ba6d0d1c47fbb8042a49b64db630/index.m3u8"},
  {name:"ASIA CUP Ads Free", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1757480580826.webp?id=17", url:"https://cdn5aws.tamashaweb.com/out/v1/9fff7780125a4614a7f3567bc506dc7a/index_5.m3u8"},
  {name:"EPL", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1755248383950.webp?id=18", url:"https://cdn06khi.tamashaweb.com:8087/jazzauth/EPL-A-abr/live/EPL-banner/chunks.m3u8"},
  {name:"Tamasha News", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/1744124970890.webp?id=100", url:"https://cdn12isb.tamashaweb.com:8087/jazzauth/Tamasha-News-abr/playlist.m3u8"},
  {name:"Eurosport", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686912440-logo.webp?id=96", url:"https://cdn22lhr.tamashaweb.com:8087/jazzauth/Eurosport-abr/playlist.m3u8"},
  {name:"MMA", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1734528338327.webp?id=79", url:"https://cdn08khi.tamashaweb.com:8087/jazzauth/MMA-abr/playlist.m3u8"},
  {name:"Ten Sports HD", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ten-sports-hd-logo.webp?id=64", url:"https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/157-3H/playlist.m3u8"},
  {name:"Discovery HD", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1749016875362.webp?id=36", url:"https://cdn23lhr.tamashaweb.com:8087/jazzauth/DiscoveryHD-abr/playlist.m3u8"},
  {name:"CGTN HD", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1749124554903.webp?id=92", url:"https://cdn23lhr.tamashaweb.com:8087/jazzauth/CgtnHD-abr/live/145M/chunks.m3u8"},
  {name:"CGTN Documentary", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1749124897580.webp?id=65", url:"https://cdn05khi.tamashaweb.com:8087/jazzauth/CgtnDocumentary-abr/playlist.m3u8"},
  {name:"PTV Sports", logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750321954030.webp?id=31", url:"https://cdn21lhr.tamashaweb.com:8087/jazzauth/PTVSports-abr/playlist.m3u8"}
];

// Render dynamically
const container = document.getElementById("channelsContainer"); // Make sure this div exists
sportsAndHDChannels.forEach(ch => {
  const card = document.createElement("div");
  card.className = "channel-card bg-white p-4 rounded-xl shadow-md flex flex-col items-center cursor-pointer";
  card.innerHTML = `
    <img src="${ch.logo}" alt="${ch.name}" class="channel-logo mb-2">
    <span class="font-bold text-center">${ch.name}</span>
  `;
  card.onclick = () => playChannel(card, ch.name, ch.url);
  container.appendChild(card);
});
</script>
