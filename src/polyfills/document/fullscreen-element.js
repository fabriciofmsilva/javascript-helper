/**
 * document.fullscreenElement polyfill
 * Adapted from https://shaka-player-demo.appspot.com/docs/api/lib_polyfill_fullscreen.js.html
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!document.fullscreenElement) {

	Object.defineProperty(document, 'fullscreenElement', {
		get: function() {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
		}
	});

	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function() {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
		}
	});
}
