var places = [
    'tent',
    'window',
    'slide',
    'sofa',
    'closet'
];

var placeIndex = Math.floor(Math.random() * 5);
var noSound = new Audio('./sound/no.mp3');
var yesSound = new Audio('./sound/yes.mp3');

$(function() {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
        e.preventDefault();
        var name = $(this).attr('alt');
        var win = name === places[placeIndex];
        $('.' + (win ? 'found' : 'empty') + '.' + name).removeClass('hidden');
        if(win) {
            $('.reload').removeClass('hidden');
            yesSound.play();
        } else {
            noSound.load();
            noSound.play();
        }
    });

    $('.reload').on('click', function() {
        location.reload();
    });
})
