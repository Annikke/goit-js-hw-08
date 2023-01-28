import { throttle } from "lodash";

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const form = document.querySelector('.feedback-form');

checkStorage();

form.addEventListener('input', throttle(saveFeedback, 500));
form.addEventListener("submit", formSubmit);

function saveFeedback(eve) {
    formData [eve.target.name] = eve.target.value;
    save(STORAGE_KEY, formData);
};

function formSubmit(eve) {
    eve.preventDefault();
    eve.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};

function checkStorage(eve) {
    const storageState = load(STORAGE_KEY);
    if (storageState) {
        form.email.value = storageState.email;
        form.message.value = storageState.message;
    };
};

function save(key, value) {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error(err);
    };
};

function load(key) {
    try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    };
};