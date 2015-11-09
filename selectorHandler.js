var SelectorHandler = function(el, selectors) {
  'use strict';

  var eventListener = function (el, evt, fn, bubble) {
    document.querySelector(el).addEventListener(evt, fn, bubble);
  },

  getSelectors = function (evt) {
    if (evt.target !== evt.currentTarget) {
      var elemSelectors = evt.target.getAttribute('class');
      toggleSelector(elemSelectors);
    }
  },

  toggleSelector = function (elemSelectors) {
    for (var el in selectors) {
      if (elemSelectors.indexOf(el) > -1) {
        var arr = elemSelectors.split(' ');

        for (var i = 0; i < arr.length; i++) {
          if (el === arr[i]) {
            var elem = document.querySelector('.' + el);
            elem.classList.toggle(selectors[el]);
          }
        }
      }
    }
  };

  var selectorHandler = function (el, selectors) {
    this.init();
  };

  selectorHandler.prototype.init = function() {
    eventListener(el, 'click', getSelectors, false);
  };

  return new selectorHandler(el, selectors);
};


