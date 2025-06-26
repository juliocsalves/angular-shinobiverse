
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
    'index.csr.html': {size: 1962, hash: '26cfd99741c0696d8167e4b01d863384dac26b241202ce9887ed9327de2f62ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1214, hash: 'bd32e813ef5e1a5c5bd23108e1d14e4fa8daec070021639f3fb4de49974464c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49133, hash: '42b9409fc30d11bbb5c462e5e4c6f9ace614e1da5ec172f58c0b4dedb3e24d7c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
