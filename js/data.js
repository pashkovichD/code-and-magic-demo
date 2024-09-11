/*
    Объект состоит из трех ключей:
    name, строка - случайно сгенерированное имя персонажа.
    Имя генерируется из массива имен и фамилий: нужно случайным образом выбрать
    из массива имен имя, а из массива фамилий фамилию и сложить их.

    coatColor, строка - случайный цвет мантии на выбор.

    eyesColor, строка - случайный цвет глаз персонажда на выбор.
*/

const NAMES = [
    'Иван',    
    'Хуан Себастьян',    
    'Мария',    
    'Кристоф',    
    'Виктор',    
    'Юлия',    
    'Лолита',    
    'Вашингтон'    
];

const SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
];

const COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(243, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

const EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

/* Сделаем код понятней.
    Удобнее будет выделить отдельную функцию, которая будет получать массив и возвращать случайный элемент этого массива
*/

const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

/* Функция, которая создает волшебника */
const createWizard = () => {    
    return {
        name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
        coatColor: getRandomArrayElement(COAT_COLORS),
        eyesColor: getRandomArrayElement(EYES_COLORS)
    };
};

console.log(createWizard());