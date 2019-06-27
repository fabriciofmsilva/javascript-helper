/**
 * Stop an iframe or HTML5 video from playing
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} element The parent element the video is in
 */
var stopVideo = function (element) {
	var iframe = element.querySelector('iframe');
	var video = element.querySelector('video');

  if (iframe !== null) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}

  if (video !== null) {
		video.pause();
	}
};
