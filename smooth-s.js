/*! smooth-scroll v15.0.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */

// Polyfill for CustomEvent for older browsers
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();

// Polyfill for requestAnimationFrame and cancelAnimationFrame
(function () {
    for (var i = 0; i < ["ms", "moz", "webkit", "o"].length; ++i) {
        if (window.requestAnimationFrame) break;
        window.requestAnimationFrame = window["msRequestAnimationFrame"];
        window.cancelAnimationFrame = window["msCancelAnimationFrame"] || window["msCancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
})();

// SmoothScroll function
(function (global) {
    'use strict';

    var SmoothScroll = function (element) {
        // SmoothScroll logic implementation
    };

    global.SmoothScroll = SmoothScroll;

    if (typeof define === 'function' && define.amd) {
        define([], function () { return SmoothScroll; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = SmoothScroll;
    } else {
        global.SmoothScroll = SmoothScroll;
    }

})(typeof global !== 'undefined' ? global : window);
