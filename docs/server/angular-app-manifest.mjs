
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
    'index.csr.html': {size: 1941, hash: '486eaedfcea197a86b566ff99f6fee417e9616e85ccee226975d1194a25f19e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1193, hash: '3f5152dc4b51c9b6281c49bdbf3af85ea6c40b5b37fd7084f55c6dfe3656d72b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52505, hash: '1069f060386711ec1b266d973daa1854cdd25d66d99d3de31c12c799191ec5e1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H5HSFTQH.css': {size: 73934, hash: 'FLE4wIn6uqQ', text: () => import('./assets-chunks/styles-H5HSFTQH_css.mjs').then(m => m.default)}
  },
};
