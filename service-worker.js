"use strict";var precacheConfig=[["/index.html","e53e1ff60549127e2d27aa676202b6d8"],["/static/js/main.e5d49d75.js","1d3e6b10973470491974c66ade8ff0d5"],["/static/media/blend.f7c868e7.png","f7c868e7049d1789890101d1cf535796"],["/static/media/bodega.b5850901.jpg","b585090183be0793314a6667ecacd3ad"],["/static/media/bottle.35e15887.jpg","35e15887e00282c59b9b2375655fa762"],["/static/media/cab.046b4ac3.png","046b4ac3f7d89bb431c4f98fe0872bcc"],["/static/media/chassenac.d973bc82.png","d973bc822531e82513b96a8eb9e8ddc3"],["/static/media/cognac.b1e95f94.png","b1e95f943b68b281a3fb4c3ab0d287ac"],["/static/media/countryside.b5773596.jpg","b577359628c064a612520375a9d59b88"],["/static/media/douro.87683a2a.jpg","87683a2ab8e01ecbb561029cd572da77"],["/static/media/grape.ca0792ea.png","ca0792ea6ad035d06cfff42b5e8cc9fa"],["/static/media/logo.f42fa157.png","f42fa157298cc5d8e6b6a170144b93e6"],["/static/media/malbec.558afa79.png","558afa79d97a7b4602b1965c0f371739"],["/static/media/map.9f396d4d.png","9f396d4da8125a677535572fae092af8"],["/static/media/mondon.358d81ee.png","358d81ee2cdf2d6fea3de21285bc0f2c"],["/static/media/parais.0fa67e5d.png","0fa67e5d1e7dd745c68d98b3788c3555"],["/static/media/pericou.0172b51b.png","0172b51b5a70077b52448ee8e3882f46"],["/static/media/pinasse.86d5d898.png","86d5d89865b63c2757afc103da939718"],["/static/media/sebutal.6f49eb6b.jpg","6f49eb6b72e037821f285f442a7286ee"],["/static/media/sebutal.b602f57d.png","b602f57d1b8f2b81a475212db743a329"],["/static/media/star.c863b32a.png","c863b32a954e5725bc570779b00e7635"],["/static/media/vanzeller.74e82ba9.png","74e82ba91e4b34887dd9266a60dfbba1"],["/static/media/white.9bd72e0d.png","9bd72e0d27c5cded1202ef136cc7b5b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});