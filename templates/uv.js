importScripts('/templates/uv/bundle.js');
importScripts('/templates/uv/config.js');
importScripts('/templates/uv/sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
