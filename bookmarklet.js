// Check if soon.put.io or old interface
if(!document.getElementById("bc-folder-link")){
	// soon.put.io
	var title = encodeURIComponent(document.getElementById("breadcrumb-items").firstElementChild.firstElementChild.innerHTML);
	var pathname = document.getElementById("video-sidebar").firstElementChild.children[1].children[0].getAttribute("href");
	alert('http://10.20.30.40/cgi-bin/show?'+pathname+'&title='+title);
} else {
	// old interface
	var title = encodeURIComponent(document.getElementById("bc-folder-link").innerHTML);

	// Check if mp4 converted file exists
	if(document.getElementById("mp4-download")){
		var pathname = document.getElementById("mp4-download").firstElementChild.getAttribute("href");
	} else {
		var pathname = document.getElementsByClassName("movie-download")[1].firstElementChild.getAttribute("href");
	}
	window.open('http://10.20.30.40/cgi-bin/show?'+pathname+'&title='+title);
}
