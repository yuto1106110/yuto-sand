// Service Workerの登録スクリプト
const BARE_SERVER = "https://tomp.app";

if ('serviceWorker' in navigator) {
    // スコープを変更
    navigator.serviceWorker.register('./static/uv.sw.js', { scope: '/static/' })
    .then(() => {
        console.log("Service worker registered successfully!");
    })
    .catch(error => {
        console.error("Service worker registration failed:", error);
    });
}

// BareMux.SetTransport("BareMod.BareClient", BARE_SERVER);
