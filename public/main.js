function loadFoehnDiagram() {
    const timestamp = Math.floor(Date.now() / 1000);
    const img = document.getElementById('foehndiagramm');
    img.src = `https://stations.wetterring.at/wetterkarten/foehndiagramm_ibk.png?random=${timestamp}`;
  }
  
  loadFoehnDiagram();
  setInterval(loadFoehnDiagram, 5 * 60 * 1000);
  

  