// ==UserScript==
// @name        Studydrive Downloader
// @namespace   Violentmonkey Scripts
// @match       https://www.studydrive.net/*/doc/*
// @grant       none
// @version     1.1
// @author      steffanossa
// @license     MIT
// @description 06/09/2023, 13:56:21
// ==/UserScript==

(function() {
  'use strict';
  console.log('Ich grüße meine liebe Oma, die langsamste Frau der Welt ❤️');

  function extractAndOpenLink() {
    window.open(sdWindow.document.file_preview);
  }

  const downloadButton = document.querySelector('[data-specific-auth-trigger="download"]');
  let buttonCopy;
  if (downloadButton) {
    buttonCopy = downloadButton.cloneNode(true);
    downloadButton.parentNode.replaceChild(buttonCopy, downloadButton);
    buttonCopy.addEventListener('click', extractAndOpenLink);
    buttonCopy.title = 'Download';
  }
})();
