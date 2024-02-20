// ==UserScript==
// @name        Studydrive Downloader
// @namespace   Violentmonkey Scripts
// @match       https://www.studydrive.net/*/doc/*
// @grant       none
// @version     1.2
// @author      steffanossa
// @license     MIT
// @description Stellt die Downloadmöglichkeit von PDFs wieder her.
// ==/UserScript==

(function () {
	fetch(document.location.href)
		.then(res => res.text())
		.then(res => {
			var fileName = /display_file_name":"(.*?)"/.exec(res)[1];
			var url = /file_preview":"(.*?)"/.exec(res)[1];
			var url = url.replace('\\', '');

			fetch(url)
				.then(res => res.arrayBuffer())
				.then(res => {
					var file = new Blob([res], { type: 'application/pdf' });
					var fileURL = URL.createObjectURL(file);

					console.log('Ich grüße meine liebe Oma, die langsamste Frau der Welt ❤️');
					console.log('Friede dem Wellblech, Krieg den Palästen');

					const downloadButton = document.querySelector('[data-specific-auth-trigger="download"]');
					let buttonCopy;
					if (downloadButton) {
						buttonCopy = downloadButton.cloneNode(true);
						downloadButton.parentNode.replaceChild(buttonCopy, downloadButton);
						buttonCopy.addEventListener('click', () => extractAndOpenLink(fileURL));
						buttonCopy.title = 'Download';
						buttonCopy.style.color = 'white';
						buttonCopy.style.background = 'magenta';
					}
				});
		});

	function extractAndOpenLink(fileUrl) {
		window.open(fileUrl);
	}
})();
