/*--- ТОЧКА ВХОДА ---*/

/*
    Импорты других модулей
    Вызовы общих функций
    Настройка скриптов
    ...
 */
import './setup.js';
import {createWizards} from './data.js';

const SIMILAR_WIZARD_COUNT = 4;

console.log(
    createWizards(SIMILAR_WIZARD_COUNT)
);