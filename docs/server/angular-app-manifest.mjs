
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
    'index.csr.html': {size: 1962, hash: '41e74389bc5fc3fa4f196d819cb30aa19474f3a85604ab3d22ba7fb348aa6653', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1214, hash: '1c14e030438a24e9f145d49079326299488ca7fc98aa6b46512fa2ff87dd44bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56192, hash: '493ac04e4a1be77c6488e2916675c89b6a45d77501a859417b4171c9217e3ea0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
