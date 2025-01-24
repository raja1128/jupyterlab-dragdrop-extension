import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IDefaultFileBrowser } from '@jupyterlab/filebrowser';
/**
 * Initialization data for the disable-drag-and-drop extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jt-dragdrop-ext:plugin',
  autoStart: true,
  requires: [IDefaultFileBrowser],
  // requires: [IFileBrowserFactory],
  activate: (app: JupyterFrontEnd, browser: IDefaultFileBrowser) => {
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

export default plugin;
