'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bf5672b83f55bbb107b26a9caac9e13a",
"assets/AssetManifest.bin.json": "ed192c6758fdc0d96768af51f7361c24",
"assets/AssetManifest.json": "65114bfc9026fcb0dbe21b468cf7a0d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "afe393cd2fce404839269cf06a3128b1",
"assets/lib/assets/icons/dashboard.svg": "6e48412e8e9b21ed1e56326524537d9f",
"assets/lib/assets/icons/iconSystem.svg": "d01c0e554a4e857294235bfc36e1e6d3",
"assets/lib/assets/icons/mtm.svg": "332253560d3dd4fe3272640c9f336143",
"assets/lib/assets/icons/player.svg": "84ed0654b3c36b773daf5551930096f2",
"assets/lib/assets/icons/sheet_crono.svg": "57f6e803f5d068f95011a1d352cf343a",
"assets/lib/assets/images/background.png": "8f481e3ab874044559900448b6b58200",
"assets/lib/assets/images/goldenzone.png": "17e225e644544d8e4c69caab19903e2b",
"assets/lib/assets/images/Imagens_MURI/altura_braco_0.png": "35aedbdc4cd892941bb3a6cc2f6dddeb",
"assets/lib/assets/images/Imagens_MURI/altura_braco_1.png": "df6ae13d740f2c92e3ebf52e6f9d2680",
"assets/lib/assets/images/Imagens_MURI/altura_braco_4.png": "7ae886dd8f589f15a83b00d4f98ab426",
"assets/lib/assets/images/Imagens_MURI/angulo_joelhos_0.png": "0f8848b64211dea7aa9c455c0fa80ed9",
"assets/lib/assets/images/Imagens_MURI/angulo_joelhos_2.png": "e15b771e046711a4ced0867eb1e1fa2d",
"assets/lib/assets/images/Imagens_MURI/angulo_joelhos_3.png": "797d284557abf3762b2d230385da043d",
"assets/lib/assets/images/Imagens_MURI/area_alcance_0.png": "8e997e20b6ed61181e1bfb39274574e8",
"assets/lib/assets/images/Imagens_MURI/area_alcance_1.png": "47c7c5a7cd43362704ce2d033dd191f8",
"assets/lib/assets/images/Imagens_MURI/area_alcance_3.png": "ac3cb61998aaeadc200675c72daebfdf",
"assets/lib/assets/images/Imagens_MURI/caminhar_0.png": "a52af70463a6cd3e03cb233ebb6921ea",
"assets/lib/assets/images/Imagens_MURI/caminhar_1.png": "caefd8dbe277d53b4786b52b463d0796",
"assets/lib/assets/images/Imagens_MURI/caminhar_3.png": "ed53ee58493441230264ff61d992c93a",
"assets/lib/assets/images/Imagens_MURI/Cervical_0.png": "5286cd73305d66a5a0c1c769d73ac5ff",
"assets/lib/assets/images/Imagens_MURI/Cervical_2.png": "cdffbb155e3166cb452d23ba9f1b9206",
"assets/lib/assets/images/Imagens_MURI/Cervical_3.png": "ca13b51f5f6840517542f37b6e03d5c8",
"assets/lib/assets/images/Imagens_MURI/Flexao_Coluna_0.png": "16b1076e9544d88daa42b6b5865722a4",
"assets/lib/assets/images/Imagens_MURI/Flexao_Coluna_2.png": "5a06c3b14755731477b74bd718cbe55b",
"assets/lib/assets/images/Imagens_MURI/Flexao_Coluna_4.png": "edb1c6a4b7d9cc13599cb8a76496948b",
"assets/lib/assets/images/Imagens_MURI/flexao_punhos_0.png": "8072e4c68651beb6ae5d2d5cafac38a7",
"assets/lib/assets/images/Imagens_MURI/flexao_punhos_3.png": "bb243dbb8b1fae72733ac89a8c8a66d9",
"assets/lib/assets/images/Imagens_MURI/flexao_punhos_3_2.png": "2683e30f2c340e7b187afd6bc15d20ed",
"assets/lib/assets/images/Imagens_MURI/Lateral_Cervical_0.png": "d1b4fcd3b7d6e76ed750e393fec85bcb",
"assets/lib/assets/images/Imagens_MURI/Lateral_Cervical_2.png": "413448be0965310192291ddfa66870ed",
"assets/lib/assets/images/Imagens_MURI/Lateral_Cervical_3.png": "1425549eef12c5018ba2f2d568f78325",
"assets/lib/assets/images/Imagens_MURI/lateral_coluna_0.png": "78759c77d1d23d2ae908bf71f7a4e1ff",
"assets/lib/assets/images/Imagens_MURI/lateral_coluna_2.png": "9c572cda6a64cfcb99ed1d9fa35028ff",
"assets/lib/assets/images/Imagens_MURI/lateral_coluna_4.png": "8071a09fc5fd53e1b170263cb4c60060",
"assets/lib/assets/images/Imagens_MURI/rotacao_coluna_0.png": "31766b712a6c3ce97115454c52215f76",
"assets/lib/assets/images/Imagens_MURI/rotacao_coluna_2.png": "78759c77d1d23d2ae908bf71f7a4e1ff",
"assets/lib/assets/images/Imagens_MURI/rotacao_coluna_4.png": "912d1202bcb13ed7a4f3fbc37650e1bb",
"assets/lib/assets/images/Imagens_MURI/rotacao_punhos_0.png": "4089d20495ff56e89cc6b30c8d4eb351",
"assets/lib/assets/images/Imagens_MURI/rotacao_punhos_3.png": "134091ac6380557364ff157e2fc92298",
"assets/lib/assets/images/Imagens_MURI/rotacao_punhos_3_2.png": "1fca82d9cee901c27d440589b710bf4a",
"assets/lib/assets/images/Imagens_MURI/tipo_pega_0.png": "8dd33a48a6373fb8f5cf8e062e9ab657",
"assets/lib/assets/images/Imagens_MURI/tipo_pega_2.png": "3a66d6ec0f83865bce6a3d8a84e80515",
"assets/lib/assets/images/Imagens_MURI/tipo_pega_4.png": "fcf5fe77ff46c4043e49cb659d6384e3",
"assets/lib/assets/images/Imagens_MURI/transporte_cargas_0.png": "1403588a091c3ccfe59be61c1111f74b",
"assets/lib/assets/images/Imagens_MURI/transporte_cargas_1.png": "51a16eef9b1ed9992fef5e23d5e19b3e",
"assets/lib/assets/images/Imagens_MURI/transporte_cargas_4.png": "7ab1c8b108c45291fba8686970d2b694",
"assets/lib/assets/images/strikezone.png": "1c3afb3315ed58e77aaaf71d0583526c",
"assets/lib/assets/images/wms.png": "3c680c74d9b78b90cdfb4c11958e94e0",
"assets/NOTICES": "f3a903537f9b619c3db331b7096be1e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5c5296b1af4421b3c37119994332972e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c351030430bb56d3d8b7f57f72178c92",
"/": "c351030430bb56d3d8b7f57f72178c92",
"main.dart.js": "33bed34094e1d2721e89511bc5fedaf1",
"manifest.json": "f8b6724679a14907c87b9b0f4d9b77f9",
"version.json": "d5df4dcc1d41ffcc2026dba6d8e65f88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
