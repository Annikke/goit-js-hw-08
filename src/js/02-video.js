import Player from "@vimeo/player";
import {throttle} from "lodash";

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle(function (data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  };
}, 1000);

player.on('timeupdate', onTimeUpdate);

const getSavedTime = function () {
  try {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(savedTime).seconds;
  } catch (error) {
    console.error(error);
  };
};

player.setCurrentTime(getSavedTime());