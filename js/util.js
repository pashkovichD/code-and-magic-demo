const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const getRandomArrayElement = (elements) => {
//   return elements[getRandomPositiveInteger(0, elements.length - 1)];
// };

// const isEscapeKey = (evt) => {
//   return evt.key === 'Escape';
// };

// const isEnterKey = (evt) => {
//   return evt.key === 'Enter';
// };

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape'; // возвращает true, если нажата клавиша ESC (может часто где в коде встречаться)
const isEnterKey = (evt) => evt.key === 'Enter'; // возвращает true, если нажата клавиша ENTER (может часто где в коде встречаться)

export {getRandomArrayElement, isEscapeKey, isEnterKey};
