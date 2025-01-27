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
        console.log('Disabling drag-and-drop in File Browser.');
        // Wait until the application is ready and the file browser is added to the shell
        app.restored.then(() => {
            // Iterate through widgets in the left area to find the file browser
            const widgets = app.shell.widgets('left');
            let fileBrowser = null;
            let widget = widgets.next();
            while (widget) {
                if (widget.id === 'filebrowser') {
                    fileBrowser = widget;
                    break;
                }
                widget = widgets.next();
            }
            if (fileBrowser) {
                // Add event listeners to disable drag and drop
                fileBrowser.node.addEventListener('drop', (event) => {
                    console.log('Drop event prevented.');
                    event.preventDefault();
                    event.stopPropagation();
                }, true);
            }
            else {
                console.warn('File browser widget not found.');
            }
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.a79ea3fd04ff6d7d94e4.js.map