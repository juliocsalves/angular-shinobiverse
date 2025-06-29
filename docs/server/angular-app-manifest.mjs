
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
    'index.csr.html': {size: 1962, hash: '4b62ec29a6a0aa841500aaf6dc46f2f55a7762c41ebff478810d02e79dad6302', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1214, hash: '621319eb2eb4e4214e0a55bcb535afd662797737ac11fb3f6418cb8e6efd0a21', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56313, hash: 'b492b9d8418c0d82476a58a95d651b741ebd113ff4a879f5e6c31b18cf85897c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
