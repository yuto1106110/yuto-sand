const BARE_SERVER = "https://tomp.app";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./static/uv.sw.js', { scope: './static/' })
    .then(() => {
        console.log("Service worker registered successfully!");
        // BareMux.SetTransport("BareMod.BareClient", BARE_SERVER);
    })
    .catch(error => {
        console.error("Service worker registration failed:", error);
    });
}
