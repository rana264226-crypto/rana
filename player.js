let hls, currentIndex=-1, sizeMode="fit";
const video=document.getElementById("videoPlayer");
const playBtn=document.getElementById("playBtn");
const muteBtn=document.getElementById("muteBtn");
const qualityMenu=document.getElementById("qualityMenu");
const controls=document.getElementById("controls");
const playerBox=document.getElementById("playerBox");
const channelGrid=document.getElementById("channelGrid");
const progressBar=document.getElementById("progressBar");
const progressContainer=document.getElementById("progressContainer");
const progressHandle=document.getElementById("progressHandle");
const timeDisplay=document.getElementById("timeDisplay");
const loader=document.getElementById("loader");

// Populate channel grid
channelList.forEach((ch, index)=>{
  const img = document.createElement("img");
  img.src = ch.logo;
  img.alt = ch.name;
  img.classList.add("channel-logo");
  img.onclick = ()=> playChannel(index);
  channelGrid.appendChild(img);
});

function playChannel(index){
  const ch = channelList[index];
  const imgEls = Array.from(channelGrid.children);
  imgEls.forEach(i=>i.classList.remove("active-channel"));
  imgEls[index].classList.add("active-channel");

  loader.style.visibility="visible";
  currentIndex = index;
  document.getElementById("channelName").innerText = ch.name;

  if(hls){ hls.destroy(); qualityMenu.innerHTML=""; }

  if(Hls.isSupported()){
    hls = new Hls();
    hls.loadSource(ch.url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,(event,data)=>{
      setupQualityMenu(data.levels);
      loader.style.visibility="hidden";
      video.play();
      playBtn.innerText="⏸";
    });
  } else if(video.canPlayType('application/vnd.apple.mpegurl')){
    video.src = ch.url;
    video.addEventListener("canplay",()=>{
      loader.style.visibility="hidden";
      video.play();
      playBtn.innerText="⏸";
    }, {once:true});
  }
}

// Quality menu
function setupQualityMenu(levels){
  qualityMenu.innerHTML="";
  let autoBtn = document.createElement("button");
  autoBtn.innerText = "Auto";
  autoBtn.onclick = ()=>{ hls.currentLevel=-1; updateQualityActive(autoBtn); };
  qualityMenu.appendChild(autoBtn);

  levels.forEach((lvl,i)=>{
    let btn = document.createElement("button");
    btn.innerText = lvl.height + "p";
    btn.onclick = ()=>{ hls.currentLevel=i; updateQualityActive(btn); };
    qualityMenu.appendChild(btn);
  });
  updateQualityActive(autoBtn);
}
function updateQualityActive(btn){
  Array.from(qualityMenu.children).forEach(b=>b.classList.remove("active-quality"));
  btn.classList.add("active-quality");
}

// Controls
function prevChannel(){ if(currentIndex>0) playChannel(currentIndex-1); }
function nextChannel(){ if(currentIndex<channelList.length-1) playChannel(currentIndex+1); }
function togglePlay(){ if(video.paused){ video.play(); playBtn.innerText="⏸"; } else { video.pause(); playBtn.innerText="▶"; } }
function toggleMute(){ video.muted=!video.muted; muteBtn.innerText = video.muted ? "🔇":"🔊"; }
function toggleFullScreen(){ if(!document.fullscreenElement){ playerBox.requestFullscreen(); } else { document.exitFullscreen(); } }
function toggleQualityMenu(){ qualityMenu.style.display=(qualityMenu.style.display==="block")?"none":"block"; }
function toggleSizeMode(){ if(sizeMode==="fit") setSize("fill"); else if(sizeMode==="fill") setSize("stretch"); else setSize("fit"); }
function setSize(mode){ sizeMode=mode; video.style.objectFit = (mode==="fit")?"contain":(mode==="fill")?"cover":"fill"; }
function toggleControls(){ controls.classList.toggle("hidden"); document.getElementById("channelName").classList.toggle("hidden"); progressContainer.classList.toggle("hidden"); timeDisplay.classList.toggle("hidden"); }
function goBack(){ window.location.href="index.html"; }

// Update progress bar
video.addEventListener('timeupdate', ()=>{
  if(video.duration){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.width = percent+"%";
    progressHandle.style.left = percent+"%";

    const curMin = Math.floor(video.currentTime/60).toString().padStart(2,'0');
    const curSec = Math.floor(video.currentTime%60).toString().padStart(2,'0');
    const durMin = Math.floor(video.duration/60).toString().padStart(2,'0');
    const durSec = Math.floor(video.duration%60).toString().padStart(2,'0');
    timeDisplay.innerText = `${curMin}:${curSec} / ${durMin}:${durSec}`;
  }
});

// Seek video
function seekVideo(e){
  const rect = progressContainer.getBoundingClientRect();
  let pos = (e.clientX - rect.left)/rect.width;
  video.currentTime = pos*video.duration;
}

// Drag handle
let dragging = false;
progressHandle.addEventListener("mousedown", ()=>{ dragging=true; });
document.addEventListener("mouseup", ()=>{ dragging=false; });
document.addEventListener("mousemove", (e)=>{
  if(dragging){
    const rect = progressContainer.getBoundingClientRect();
    let pos = (e.clientX - rect.left)/rect.width;
    pos = Math.max(0, Math.min(1, pos));
    video.currentTime = pos*video.duration;
  }
});
