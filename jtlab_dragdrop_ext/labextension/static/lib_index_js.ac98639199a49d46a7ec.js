"use strict";
(self["webpackChunkjtlab_dragdrop_ext"] = self["webpackChunkjtlab_dragdrop_ext"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Initialization data for the disable-drag-and-drop extension.
 */
const plugin = {
    id: 'jtlab-dragdrop-ext:plugin',
    autoStart: true,
    activate: (app) => {
        console.log('Disabling drag-and-drop and external copy/paste.');
        const shellNode = app.shell.node;
        shellNode.addEventListener('drop', (event) => {
            console.log('Drop event prevented.');
            event.preventDefault();
            event.stopPropagation();
        }, true);
        shellNode.addEventListener('paste', (event) => {
            if (event.clipboardData) {
                const types = event.clipboardData.types;
                const isJupyterClipboard = (types.length == 1 && types.includes('text/plain'));
                if (!isJupyterClipboard) {
                    console.log('External paste detected and blocked.');
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    return;
                }
            }
        }, true);
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.ac98639199a49d46a7ec.js.map