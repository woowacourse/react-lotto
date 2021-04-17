import * as __SNOWPACK_ENV__ from './env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from './pkg/react.js';
import ReactDOM from './pkg/react-dom.js';
import App from './App.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}