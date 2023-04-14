(function (global) {
  'use strict';

  function AI(selector) {
    if (!(this instanceof AI)) {
      return new AI(selector);
    }

    this.elements = Array.from(document.querySelectorAll(selector));
  }

  AI.prototype = {
    each: function (callback) {
      this.elements.forEach(callback);
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this.elements[0].innerHTML;
      }

      this.each(function (element) {
        element.innerHTML = content;
      });

      return this;
    },

    on: function (event, handler) {
      this.each(function (element) {
        element.addEventListener(event, handler);
      });

      return this;
    },

    off: function (event, handler) {
      this.each(function (element) {
        element.removeEventListener(event, handler);
      });

      return this;
    },

    ajax: function (options) {
      const xhr = new XMLHttpRequest();
      const method = options.method ? options.method.toUpperCase() : 'GET';
      const data = options.data || null;

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            options.success && options.success(xhr.responseText);
          } else {
            options.error && options.error(xhr.status, xhr.statusText);
          }
        }
      };

      xhr.open(method, options.url, true);

      if (method === 'POST' && data) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      }

      xhr.send(data);

      return this;
    },
  };

  global.AI = global.ai = AI;

})(window);
