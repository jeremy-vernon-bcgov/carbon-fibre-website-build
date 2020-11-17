/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-da3b5883d5eea66d0672.js"
  },
  {
    "url": "styles.02c55e6dd8507c019743.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-42c6967497b54b2d0373.js"
  },
  {
    "url": "9a679482-abbd095f08dad7e2eced.js"
  },
  {
    "url": "1c920f04-5efa478d532ee19b4ffe.js"
  },
  {
    "url": "2fb713ed-c07ddadcc7352d38bb3a.js"
  },
  {
    "url": "439716bf-efd03194effed0496f6b.js"
  },
  {
    "url": "761cb607-e16d4a96f0afa582f41c.js"
  },
  {
    "url": "6e2d9d0a-57d3d6ab7d46791125cf.js"
  },
  {
    "url": "e51a3977-674eb33dbdcc0f708ac1.js"
  },
  {
    "url": "4119064d-e3e41cd5f60e96e197dd.js"
  },
  {
    "url": "0e6451da-2c6cb942fd310193d374.js"
  },
  {
    "url": "262b3caa-b56b31e141459d3ef1b3.js"
  },
  {
    "url": "da011f70-e803092a4278715fda0e.js"
  },
  {
    "url": "23420901-0eadd56ac7e9565b6a56.js"
  },
  {
    "url": "2f37a77d-91ed0b90d95892d5dc56.js"
  },
  {
    "url": "c2ec1d10-b77ce02f449db67e53c6.js"
  },
  {
    "url": "8edc3fe5-47c3de963afe6c87ae9f.js"
  },
  {
    "url": "fc20e1c4-376f62f2be37084b3290.js"
  },
  {
    "url": "43a99af2-bb44b15051cd5add1967.js"
  },
  {
    "url": "c4169ad2-a7d5496e519c8b33a980.js"
  },
  {
    "url": "ea683af8-d8cca9764a1d4ba5b6f1.js"
  },
  {
    "url": "cfc6b023-954e730a8be44989a1bc.js"
  },
  {
    "url": "056bf7cd-03a9e6d7284f84856879.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "af9b3c4dcd65b605495050ea033f82c5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4218bf19246651003620.js"
  },
  {
    "url": "polyfill-73d772c9d24fa0d203e1.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5601fa72ef9ddf52b5ad2851eef276c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-912458ec9c5ce39f5957.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
