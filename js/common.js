const audio = new Audio('/hacktrain/audio/train.mp3');
const volume = document.querySelector('.volume');
const button = document.querySelector('#navbar-toggle');


volume.addEventListener('click', audioVolume);
button.addEventListener('click', openMenu);

playAudio();

function audioVolume(e) {
    if(!document.querySelector('.up')) {
        playAudio();
        volume.classList.add('up');
        volume.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        pauseAudio();
        volume.classList.remove('up');
        volume.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }
}

function playAudio() {
    audio.play();
    audio.loop = true;
}

function pauseAudio() {
    audio.pause();
}

function openMenu() {
    const active = document.querySelector('.active');

    if (active) {
        navigation.classList.remove('active');
    } else navigation.classList.add('active');
}

$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
