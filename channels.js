const channelList = [
  {name:"Saudi Quran", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4atGM34rXtNQzx2wCnQQVzGSjU805qIOdFw&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/SaudiQuran-142/playlist.m3u8"},
  {name:"Saudi Sunnah", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGupfsMkkP5X3iP6XZx6yi2LSzq8_6TIOC-w&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/SaudiSunnah-141/live/141M/chunks.m3u8"},
  {name:"Madani TV", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLdTFn4TdP5-rF7YyPXTvOKguRsWJ0q0-cEDZUJ1gKGIl85TEpTiYSx0&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/Madni-121/playlist.m3u8"},
  {name:"PTV Home", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsvRHu6ZhAQdM0FE5MRF4Goto2-mcA6K4sw&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/ptv-home-174/playlist.m3u8"},
  {name:"Bol TV", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIKXUbh96lR2jrQ90lzfteBQuVL8TROFk0w&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/bolnent-159-4/playlist.m3u8"},
  {name:"Bol News", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgK3r8pJhDdYfdu-8lGclYbvW6W4wB9lNqF-1MvwY05aPkBrB_1zigQHA&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/bolnews-159-3/playlist.m3u8"},
  {name:"Express News", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwagVGRGWczQgdzNC-RdEl1t0eF_C8_yzh-o-9WlBh7yfFR6ovB8AIKi61&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/ExpressNews-155/playlist.m3u8"},
  {name:"Express Ent", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfJKkUhCHVllOSPBVjwCFpPn9b-P_of0kjA&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/EXP-ENT-159-1/playlist.m3u8"},
  {name:"Jalwa", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWayKJ8devGcnrbcnfboF1RETCKoWr2aFjP-1W8iw-1p4TlYmZ6bQwnlG&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/JalwaTV-135/live/135M/chunks.m3u8"},
  {name:"8XM", logo:"http://8xm.tv/wp-content/uploads/2019/02/512X512p.png", url:"https://vodzong.mjunoon.tv:8087/streamtest/8XM-131/playlist.m3u8"},
  {name:"Oxygen Tv", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pVm-0Pp3hKucynZctFMIeh985gMe84RR3A&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/132M/playlist.m3u8"},
  {name:"Geo Tv", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvGC860EQrod1hNmPrj9gyzoub5Qgg2M0l_12dQS18O914xV-yjE1-zHH&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/geoent-122/playlist.m3u8"},
  {name:"Geo News", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvmQmYYa9mh7dXePN1DEBpawvKb2Jcd0Shw&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/geonews-137/playlist.m3u8"},
  {name:"Urdu 1", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxnA2_kHg8QgWos0GjlvCvENmdUgQhhTO1hIAwqSOE4Txfibg0oCxaq4&s=10", url:"https://vodzong.mjunoon.tv:8087/streamtest/Urdu1-158-4/playlist.m3u8"},
  {name:"A Plus", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzutge89wiGQnXi2_-xgth7iKTQiHQS1ZzQ&usqp=CAU", url:"https://vodzong.mjunoon.tv:8087/streamtest/APlus-118/playlist.m3u8"},
];

const grid = document.getElementById("channelGrid");
channelList.forEach(ch=>{
  const img=document.createElement("img"); img.src=ch.logo; img.alt=ch.name; img.className="channel-logo";
  img.onclick=()=>playChannel(img,ch.name,ch.url);
  grid.appendChild(img);
});
