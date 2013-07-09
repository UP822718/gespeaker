var last_jplayer_index = 0;

function create_new_jplayer(basefile, description) {
    last_jplayer_index++;
    var index=last_jplayer_index;
    // Create new player
    document.write('<span id="jquery_jplayer_' + index + '"></span>');
    // Create a link to use for play and pause the audio file
    document.write('<a href="#" id="playButton' + index + '">' + description + '</a>');
    jQuery("#jquery_jplayer_" + index).jPlayer( {
        errorAlerts: true,
        swfPath: '../resources/jplayer/Jplayer.swf',
        solution: 'flash, html',
        supplied : 'mp3, oga, m4a, wav',
        ready: function () {
          jQuery(this).jPlayer("setMedia", {
            mp3: '../resources/demo/' + basefile + '/sample.mp3',
            oga: '../resources/demo/' + basefile + '/sample.oga',
            m4a: '../resources/demo/' + basefile + '/sample.m4a',
            wav: '../resources/demo/' + basefile + '/sample.wav'
          });
        }
    });
    $('#playButton' + index).click(function() {
        if ($('#jquery_jplayer_' + index).data("jPlayer").status.paused) {
          $('#jquery_jplayer_' + index).jPlayer('play');
        } else {
          $('#jquery_jplayer_' + index).jPlayer('stop');
        }
    });
    return;
}

