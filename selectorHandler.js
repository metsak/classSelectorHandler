var SelectorHandler = function(el, selectors) {
  'use strict';

  var eventListener = function (el, evt, fn, bubble) {
    document.querySelector(el).addEventListener(evt, fn, bubble);
  },

  getSelectors = function (evt) {
    var elemSelectors;

    // Check that clicked element is not container.
    if (evt.target !== evt.currentTarget) {
      elemSelectors = evt.target.getAttribute('class');
      toggleSelector(elemSelectors, selectors);
    }
  },

  toggleSelector = function (elemSelectors, selectors) {
    for (var el in selectors) {
      if (elemSelectors.indexOf(el) > -1) {
        var arr = elemSelectors.split(' ');

        for (var i = 0; i < arr.length; i++) {
          if (el === arr[i]) {
            var elem = document.querySelector('.' + el);
            elem.classList.toggle(selectors[el])
          }
        }
      }
    }
  };

  var selectorHandler = function (el, selectors) {
    this.init();
  };

  classManager.prototype.init = function() {
    eventListener(el, 'click', getSelectors, false);
  };


  return new selectorHandlerad(el, selectors);
};

