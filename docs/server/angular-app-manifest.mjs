
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
    'index.csr.html': {size: 1941, hash: 'a38aa647c7c8c41b75b06002ef1afd9bb5065a364196218a0023db9ace5b83e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1193, hash: '52dfad63d342a833f21df04600fbbc1b6beebb5b5e77b5540400898a3ae666e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52505, hash: 'cb10af738b5c55972cab84e807e7ab6a77f8637c88a8dfe6c77b213f74e471b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
