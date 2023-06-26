/**
 *
 * Scripts
 *
 * Initialization of the template base and page scripts.
 *
 *
 */

class Scripts {
  constructor() {

    this._init();
  }

  // Showing the template after waiting for a bit so that the css variables are all set
  // Initialization of the common scripts and page specific ones
  _init() {
    setTimeout(() => {
      document.documentElement.setAttribute('data-show', 'true');
      document.body.classList.remove('spinner');

      this._initPlugins();
    }, 100);
  }


  // Plugin pages initialization
  _initPlugins() {
    // carousels.js initialization
    if (typeof Carousels !== 'undefined') {
      const carousels = new Carousels();
    }

  }




}

// Shows the template after initialization of the settings, nav, variables and common plugins.
(function () {
  window.addEventListener('DOMContentLoaded', () => {
    // Initializing of the Scripts
    if (typeof Scripts !== 'undefined') {
      const scripts = new Scripts();
    }
  });
})();

// Disabling dropzone auto discover before DOMContentLoaded
(function () {
  if (typeof Dropzone !== 'undefined') {
    Dropzone.autoDiscover = false;
  }
})();
