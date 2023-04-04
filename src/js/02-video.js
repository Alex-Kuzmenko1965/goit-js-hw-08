import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

let setCurrentTime = localStorage.getItem("videoplayer-current-time");
console.log('currentTime_init:', localStorage.getItem("videoplayer-current-time"));

const onPlay = function({ seconds }) {
    console.log(seconds);
    localStorage.setItem("videoplayer-current-time", seconds);           
    setCurrentTime = localStorage.getItem("videoplayer-current-time");
    console.log('currentTime_play:', setCurrentTime);  
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(setCurrentTime).then(function(seconds) {
    if (setCurrentTime === null) {
        setCurrentTime = 0;
        console.log('currentTime_0:', setCurrentTime);
    }
    else {
        console.log('currentTime_set:', setCurrentTime);
    };
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('время было меньше 0 или больше, чем продолжительность видео');            
            break;

        default:
            console.log('произошла какая-то другая ошибка')
            break;
    }
});;