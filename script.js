// Custom JS
$(document).ready(function() {

var videos = [
{'url':'HQ8Avkxv3-4', 'name':'Don\'t worry, be happy', 'artist':'Bobby McFerrin', 'level':'test', 'chords':'http://www.ukulele-tabs.com/fr/tablatures/bobby-mcferrin/dont-worry-be-happy-uke-tab-18613.html', 'tutorial':'https://www.youtube.com/watch?v=4sQBqFp5uFo'},
{'url':'nq34lN39sj8', 'name':'Raggamuffin', 'artist':'Selah Sue', 'level':'test1', 'chords':'http://www.ukulele-tabs.com/fr/tablatures/bobby-mcferrin/dont-worry-be-happy-uke-tab-18613.html','tutorial':'http://digibidule.fr'},
{'url':'pRpvdcjkT3k', 'name':'lolo', 'artist':'Bobby test', 'level':'test2', 'chords':'http://www.ukulele-tabs.com/fr/tablatures/bobby-mcferrin/dont-worry-be-happy-uke-tab-18613.html', 'tutorial':'http://digibidule.fr'},
];

var index=Math.floor(Math.random() * videos.length);
var videoOptions = videos[index];
var html='<div id="video"><h3>Random Video</h3><iframe width="720" height="480" src="http://www.youtube.com/embed/' + videoOptions.url + '" frameborder="0" allowfullscreen></iframe></div>';


$("#video").html(html);

$("#video-title").html(videoOptions.name);

$("#video-artist").html(videoOptions.artist);

$("#video-level").html(videoOptions.level);

$("#chords-link").attr('href', videoOptions.chords);

$("#tuto-link").attr('href', videoOptions.tutorial);

});



