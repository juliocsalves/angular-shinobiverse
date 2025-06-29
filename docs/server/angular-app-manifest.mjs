
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1941, hash: '9a738b45d57911a5fd723e2fa425da13423ffa6d7cb2b410d33e0f145a8acdca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1193, hash: 'e9751090c285cb19380db0cbcf0ee79df2a73a63e7da6223cec7aac03fe016e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56363, hash: '3b50a72e07d416018875adfbc8a3511db351527ca5058630d37e11f257b967ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
