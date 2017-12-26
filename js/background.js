$(document).ready(function() {
    var a = function() {
        if (document.getElementsByClassName('ytp-play-button')[0]['title'] == "もう一回見る") {
            document.getElementsByClassName('ytp-play-button')[0].click();
        }
    };
    setInterval(a, 300);
});
