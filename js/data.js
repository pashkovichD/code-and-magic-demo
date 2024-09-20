/*
    Объект состоит из трех ключей:
    name, строка - случайно сгенерированное имя персонажа.
    Имя генерируется из массива имен и фамилий: нужно случайным образом выбрать
    из массива имен имя, а из массива фамилий фамилию и сложить их.

    coatColor, строка - случайный цвет мантии на выбор.

    eyesColor, строка - случайный цвет глаз персонажда на выбор.
*/

import {getRandomArrayElement} from "./util.js";

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

/* Функция, которая создает волшебника */
const createWizard = () => {    
    return {
        name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
        coatColor: getRandomArrayElement(COAT_COLORS),
        eyesColor: getRandomArrayElement(EYES_COLORS)
    };
};

// const similarWizards = Array.from({length: SIMILAR_WIZARD_COUNT}, createWizard);

// заменяем переменную, в которой лежит массив объектов, на функцию, которая возвращает массив объектов,
//т.е. предоставляет интерфейс для получения массива волшебников

/* задача функции createWizards - вернуть массив объектов, т.е. данный модуль предоставляет интерфейс (функцию), 
 с помощью которого(ой) вы можете получить массив волшебников...
 */
const createWizards = (count) => Array.from({length: count}, createWizard);


// console.log(similarWizards);
//...а потом её экспортируем
export {createWizards};