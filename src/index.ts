import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

/**
 * Initialization data for the disable-drag-and-drop extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jtlab-dragdrop-ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Disabling drag-and-drop and external copy/paste.');
    const shellNode = app.shell.node

    shellNode.addEventListener('drop', (event: DragEvent) => {
      console.log('Drop event prevented.');
      event.preventDefault();
      event.stopPropagation();
    }, true);

    shellNode.addEventListener('paste', (event: ClipboardEvent) => {

      if (event.clipboardData) {
        const types = event.clipboardData.types;

        const isJupyterClipboard = (types.length == 1 && types.includes('text/plain'));

        if (!isJupyterClipboard) {
          console.log('External paste detected and blocked.');
          event.preventDefault();
          event.stopPropagation();
        } else {
            return
        }
      }
    }, true);

  }
};

export default plugin;
