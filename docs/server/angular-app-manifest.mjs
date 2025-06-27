
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
    'index.csr.html': {size: 1941, hash: '0222d4db3a89d6dc937b81d35d2145813f0846de2de6f9ee4b19a1f9fda6160c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1193, hash: '885a821d61c5a9aea79997bdbb60570cdbfc55d68aacdd7d71065623e5a2ec09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52505, hash: '1a9a6858cb35e67acaedc16c56a9708c01f884ad6d21f758b29a9f6a33b02e2f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
