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
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/filebrowser */ "webpack/sharing/consume/default/@jupyterlab/filebrowser");
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Initialization data for the disable-drag-and-drop extension.
 */
const plugin = {
    id: 'jtlab-dragdrop-ext:plugin',
    autoStart: true,
    requires: [_jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_0__.IDefaultFileBrowser],
    // requires: [IFileBrowserFactory],
    activate: (app, browser) => {
        console.log('Disabling drag-and-drop in File Browser.');
        // Access the file browser widget
        const fileBrowser = browser;
        // Add event listeners to disable drag and drop
        fileBrowser.node.addEventListener('drop', (event) => {
            console.log('Drop event prevented.');
            event.preventDefault();
            event.stopPropagation();
        }, true);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.a60d64ee1f125602123f.js.map