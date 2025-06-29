
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-shinobiverse/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-shinobiverse"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1962, hash: '8321549cc778ba738db9cc1a9fd39a52c578b604b103e08a4a30f18bef0eed58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1214, hash: '5e1f915cc560908bc5ead79bc13cd8d8fbe4c2ddb46b8c84c33af356741ff9fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55712, hash: '9a37f0e624d013e73ab8e7c2e368de34ea9575dceeb7884bee1bdd83d810af7f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
