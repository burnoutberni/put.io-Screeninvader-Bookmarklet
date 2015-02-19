# put.io-Screeninvader-Bookmarklet
This bookmarklet makes it easy to stream files from [put.io](https://put.io) to the [ScreenInvader](https://github.com/Metalab/ScreenInvader).

Just add the bookmarklet below to your bookmarks bar and click the bookmark, once you've selected the file you want to stream on put.io.

```javascript
javascript:(function(){if(!document.getElementById("bc-folder-link")){var%20title=encodeURIComponent(document.getElementById("breadcrumb-items").firstElementChild.firstElementChild.innerHTML);var%20pathname=document.getElementById("video-sidebar").firstElementChild.children[1].children[0].getAttribute("href");alert('http://10.20.30.40/cgi-bin/show?'+pathname+'&title='+title);}else{var%20title=encodeURIComponent(document.getElementById("bc-folder-link").innerHTML);if(document.getElementById("mp4-download")){var%20pathname=document.getElementById("mp4-download").firstElementChild.getAttribute("href");}else{var%20pathname=document.getElementsByClassName("movie-download")[1].firstElementChild.getAttribute("href");}window.open('http://10.20.30.40/cgi-bin/show?'+pathname+'&title='+title);}})();
```

This bookmarklet is preconfigured for ScreenInvader at [Metalab](https://metalab.at). Please change the IP address in the bookmarklet if you want to use it on another system.

Check out bookmarklet.js if you want a more readable version of the bookmarklets source code.
