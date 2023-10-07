import { defaultWords } from './utilities.js';

const getWords = async () => {
  let words = [];
  try {
    const request = await fetch('https://random-word-api.herokuapp.com/all');
    const response = await request.json();
    words = response;
  } catch (error) {
    console.error(error);
    words = [...defaultWords];
  }
  return words;
};

const chooseWord = (wordsArray) => {
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const convertWordToDashes = (word) => {
  return word.split('').map(() => '_');
};

export { getWords, chooseWord, convertWordToDashes };
