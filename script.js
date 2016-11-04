// Custom JS
$(document).ready(function() {

var videos = [
{'url':'HQ8Avkxv3-4', 'name':'Don\'t worry, be happy', 'artist':'Bobby McFerrin', 'level':'Intermédiaire', 'chords':'http://www.ukulele-tabs.com/fr/tablatures/bobby-mcferrin/dont-worry-be-happy-uke-tab-18613.html', 'tutorial':'https://www.youtube.com/watch?v=4sQBqFp5uFo'},
{'url':'nq34lN39sj8', 'name':'Raggamuffin', 'artist':'Selah Sue', 'level':'Intermédiaire', 'chords':'http://tabstabs.com/tab/selah-sue/raggamuffin/ukulele_chords#3153696','tutorial':'https://www.google.fr'},
{'url':'L2yDHaWZKmU', 'name':'Get Lucky', 'artist':'Daft Punk', 'level':'Intermédiaire', 'chords':'https://ukutabs.com/d/daft-punk/get-lucky-feat-pharrel-williams/', 'tutorial':'https://www.youtube.com/watch?v=3C9PJRSfPR4'},
{'url':'gBWMLo0CSbM', 'name':'The Scientist', 'artist':'Coldplay', 'level':'Intermédiaire', 'chords':'https://ukutabs.com/c/coldplay/the-scientist/', 'tutorial':'https://www.youtube.com/watch?v=dFU4ihOB0W8'},
{'url':'oI1lLJPnsqE', 'name':'Somewhere over the rainbow', 'artist':'Israel IZ', 'level':'Confirmé', 'chords':'https://ukutabs.com/i/israel-kamakawiwoole/somewhere-over-the-rainbow-what-a-wonderful-world/', 'tutorial':'https://www.youtube.com/watch?v=1PiscVZSuEE'},
{'url':'jyMBspET9kI', 'name':'Is This Love', 'artist':'Bob Marley', 'level':'Confirmé', 'chords':'https://ukutabs.com/b/bob-marley/is-this-love/', 'tutorial':'https://www.youtube.com/watch?v=JlftGlvwTjo'},
{'url':'qlwnRhlh7ts', 'name':'Can\'t Help Falling In Love', 'artist':'Elvis Presley', 'level':'Confirmé', 'chords':'https://ukutabs.com/t/twenty-one-pilots/cant-help-falling-in-love/', 'tutorial':'https://www.youtube.com/watch?v=I3qlaouFEAY'},
];

var index=Math.floor(Math.random() * videos.length);
var videoOptions = videos[index];
var html='<div id="video"><h3>Votre vidéo arrive...</h3><iframe width="720" height="480" src="http://www.youtube.com/embed/' + videoOptions.url + '" frameborder="0" allowfullscreen></iframe></div>';


$("#video").html(html);

$("#video-title").html(videoOptions.name);

$("#video-artist").html(videoOptions.artist);

$("#video-level").html(videoOptions.level);

$("#chords-link").attr('href', videoOptions.chords);

$("#tuto-link").attr('href', videoOptions.tutorial);

});



