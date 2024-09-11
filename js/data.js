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

/* Функция, которая создает волшебника */
const createWizard = () => {    
    return {
        name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandomPositiveInteger(0, SURNAMES.length - 1)],
        coatColor: COAT_COLORS[getRandomPositiveInteger(0, COAT_COLORS.length - 1)],
        eyesColor: EYES_COLORS[getRandomPositiveInteger(0, EYES_COLORS.length - 1)]
    };
};

console.log(createWizard());