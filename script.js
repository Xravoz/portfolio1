  var pageContent = document.getElementById("section"),
	pagecopy = pageContent.cloneNode(true),
	blurryContent = document.getElementById("header");
	header.appendChild(pagecopy);
	window.onscroll = function() { header.scrollTop = window.pageYOffset; }