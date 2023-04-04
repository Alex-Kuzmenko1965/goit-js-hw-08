import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const setCurrentTime = () => {
    if (localStorage.getItem("videoplayer-current-time") === null) {
        localStorage.setItem("videoplayer-current-time", 0);
        return localStorage.getItem("videoplayer-current-time");
    } else {
        localStorage.getItem("videoplayer-current-time");
    }
};
console.log('currentTime_init:', localStorage.getItem("videoplayer-current-time"));

const onPlay = function({ seconds }) {
    console.log(seconds);
    localStorage.setItem("videoplayer-current-time", seconds);
    // setCurrentTime = localStorage.getItem("videoplayer-current-time")
    // setCurrentTime = localStorage.getItem("videoplayer-current-time");
    // console.log('currentTime_play:', setCurrentTime);  
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(setCurrentTime).then(function(seconds) {
    if (setCurrentTime === null) {
        setCurrentTime = 0;
        console.log('currentTime_0:', setCurrentTime);
    }
    else {
        return;
        console.log('currentTime_set:', setCurrentTime);
    };
});