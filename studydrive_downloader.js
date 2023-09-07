// ==UserScript==
// @name        Studydrive Downloader
// @namespace   Violentmonkey Scripts
// @match       https://www.studydrive.net/de/doc/*
// @grant       none
// @version     1.0
// @author      steffanossa
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
    buttonCopy.style.backgroundColor = 'rgba(var(--colors-blue-600))';
    buttonCopy.style.color = 'white';
    buttonCopy.title = 'Herunterladen';
  }


})();
