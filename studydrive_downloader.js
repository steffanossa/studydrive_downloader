// ==UserScript==
// @name        Studydrive Downloader
// @namespace   Violentmonkey Scripts
// @match       https://www.studydrive.net/*/doc/*
// @grant       none
// @version     1.2.1
// @author      steffanossa
// @license     MIT
// @description Stellt die Downloadmöglichkeit für Dokumente wieder her.
// ==/UserScript==

(function () {
	fetch(document.location.href)
		.then(res => res.text())
		.then(res => {
			let fileName = /display_file_name":"(.*?)"/.exec(res)[1];
			let url = /file_preview":"(.*?)"/.exec(res)[1];
			url = url.replace('\\', '');

			fetch(url)
				.then(res => res.arrayBuffer())
				.then(res => {
					let file = new Blob([res], { type: 'application/pdf' });
					let fileURL = URL.createObjectURL(file);

					console.log('Ich grüße meine liebe Oma, die langsamste Frau der Welt ❤️');
					console.log('Friede dem Wellblech, Krieg den Palästen');

					let downloadButton = document.querySelector('[data-specific-auth-trigger="download"]');
					let buttonCopy;
					if (downloadButton) {
						buttonCopy = downloadButton.cloneNode(true);
						downloadButton.parentNode.replaceChild(buttonCopy, downloadButton);
						buttonCopy.addEventListener('click', () => extractAndOpenLink(fileURL, fileName));
						buttonCopy.title = 'Download';
						buttonCopy.style.color = 'white';
						buttonCopy.style.background = '#38a7fb';
					}
				});
		});

	function extractAndOpenLink(fileUrl, fileName) {
		let a = document.createElement('a');
		a.href = fileUrl;
		a.download = fileName;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
})();
