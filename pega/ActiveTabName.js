// ==UserScript==
// @name         Active Tab Name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://agilestudio.pega.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var originTitle = document.title;
    var setActiveTabTitle = function() {
        const el = document.querySelector('.dc-header .tStrCntr li[role=tab][aria-selected=true]');
        if (el) {
            document.title = el.getAttribute('title') + " - " + originTitle;
            return true;
        } else {
            return false;
        }
    };
    var interval = setInterval(function(){
        var tab = document.querySelector('.dc-header .tStrCntr');
        if (tab) {
            setActiveTabTitle();
            //clearInterval(interval);
        }
    }, 200);
})();
