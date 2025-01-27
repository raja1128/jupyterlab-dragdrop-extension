import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';

/**
 * Initialization data for the disable-drag-and-drop extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jtlab-dragdrop-ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Disabling drag-and-drop in File Browser.');

    // Wait until the application is ready and the file browser is added to the shell
    app.restored.then(() => {
      // Iterate through widgets in the left area to find the file browser
      const widgets = app.shell.widgets('left');
      let fileBrowser: Widget | null = null;

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
        fileBrowser.node.addEventListener(
          'drop',
          (event) => {
            console.log('Drop event prevented.');
            event.preventDefault();
            event.stopPropagation();
          },
          true
        );
      } else {
        console.warn('File browser widget not found.');
      }
    });
  },
};

export default plugin;