import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
/**
 * A JupyterLab plugin to completely remove the left sidebar.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'remove-sidebar',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension to remove sidebar is activated!');

    // Wait until the application is fully initialized
    app.restored.then(() => {
      // Access the DOM elements for the sidebar and main panel
      const leftSidebar = document.querySelector('.jp-SideBar');
      const mainPanel = document.querySelector('#jp-main-content-panel');

      // Check if the sidebar and main panel exist, then remove the sidebar
      if (leftSidebar && mainPanel) {
        console.log('Removing the left sidebar');
        mainPanel.removeChild(leftSidebar);
      } else {
        console.warn('Left sidebar or main panel not found');
      }

        // Use querySelector to find and remove the file browser
        const fileExplorer = document.querySelector('.jp-FileBrowser');

        if (fileExplorer) {
          fileExplorer.remove(); // This will remove the file explorer from the DOM
          console.log('File explorer removed successfully!');
        } else {
          console.warn('File explorer not found.');
        }

         // Remove the right sidebar toolbar
        const rightToolbar = document.querySelector('.jp-SideBar.jp-mod-right');
        if (rightToolbar) {
          rightToolbar.remove();
          console.log('Right sidebar toolbar removed successfully!');
        } else {
          console.log('Right sidebar toolbar not found.');
        }

         // Remove the top menu bar
        const topMenu = document.querySelector('.jp-MenuBar');
        if (topMenu) {
          topMenu.remove();
          console.log('Top menu removed successfully!');
        } else {
          console.log('Top menu not found.');
        }

          // Remove the bottom menu (status bar)
        const bottomMenu = document.querySelector('.jp-StatusBar');
        if (bottomMenu) {
          bottomMenu.remove();
          console.log('Bottom menu (status bar) removed successfully!');
        } else {
          console.log('Bottom menu (status bar) not found.');
        }

        
          // Remove the bottom panel 
          const bottomPanel = document.querySelector('.jp-bottom-panel');
          if (bottomPanel) {
            bottomPanel.remove();
            console.log('Bottom panel removed successfully!');
          } else {
            console.log('Bottom panel not found.');
          }

          // Remove the top panel 
          const topPanel = document.querySelector('.jp-top-panel');
          if (topPanel) {
            topPanel.remove();
            console.log('Top panel removed successfully!');
          } else {
            console.log('Top panel not found.');
          }

          // Remove the top panel 
          const commandPalette = document.querySelector('.modal-command-palette');
          if (commandPalette) {
            commandPalette.remove();
            console.log('commandPalette removed successfully!');
          } else {
            console.log('commandPalette not found.');
          }
          

          
          // Make the workspace full screen
      const workspace = document.querySelector('.jp-DocumentMain') as HTMLElement;
      if (workspace) {
        workspace.style.width = '100vw'; // Set width to full viewport width
        workspace.style.height = '100vh'; // Set height to full viewport height
        workspace.style.position = 'absolute'; // Change position to absolute
        workspace.style.top = '0'; // Align top to 0
        workspace.style.left = '0'; // Align left to 0
        workspace.style.overflow = 'hidden'; // Prevent overflow
        console.log('Workspace set to full screen successfully!');
      } else {
        console.log('Workspace not found.');
      }


          // Try to remove the bottom panel (verify the selector is correct)
          const bottomPanel2 = document.querySelector('#jp-bottom-panel');
          if (bottomPanel2) {
            console.log('Bottom panel found:', bottomPanel);
            bottomPanel2.remove(); // Remove the element
            console.log('Bottom panel removed successfully!');
         //   removalLoopActive = false; // Stop the removal loop once the bottom panel is removed
          } else {
            console.log('Bottom panel not found.');
          }

          // Remove the top panel (verify the selector is correct)
          const topPanel2 = document.querySelector('#jp-top-panel');
          if (topPanel2) {
            topPanel2.remove();
            console.log('Top panel removed successfully!');
          } else {
            console.log('Top panel not found.');
          }

    });
  }
};

export default extension;

