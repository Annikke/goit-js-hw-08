import Player from "@vimeo/player";
import {throttle} from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle(function (data) {
  try {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  };
}, 1000);

player.on('timeupdate', onTimeUpdate);

const getSavedTime = function () {
  try {
    const savedTime = localStorage.getItem("videoplayer-current-time");
    return JSON.parse(savedTime).seconds;
  } catch (error) {
    console.error(error);
  };
};

player.setCurrentTime(getSavedTime());