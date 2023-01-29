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

const savedTime = getSavedTime(STORAGE_KEY);
checkSavedTime();

function checkSavedTime() {
  if (savedTime) {
    player.setCurrentTime(savedTime.seconds);
  }
};

function getSavedTime (key) {
    try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    };
};


