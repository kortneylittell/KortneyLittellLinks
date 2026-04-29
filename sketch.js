function openApp(url) {

  // Instagram → open normally
  if (url.includes("instagram.com")) {
    window.open(url, "_blank");
    return;
  }

  // Preview everything else
  const appView = document.getElementById("appView");

  appView.innerHTML = `
    <div class="app-screen">
      <div class="top-bar">
        <div>Preview</div>
        <div class="close-btn" onclick="closeApp()">✕</div>
      </div>

      <iframe src="${url}"></iframe>
    </div>
  `;
}

function closeApp() {
  document.getElementById("appView").innerHTML = "";
}