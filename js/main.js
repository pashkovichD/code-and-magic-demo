import startGame from './game.js';
// ^ не обращайте внимания на эту строчку,
// о подключении одних JS-файлов внутри других
// мы поговорим совсем скоро


// С помощью JavaScript'а настраивается поведение игры:

// - размер фаербола
const FIREBALL_SIZE = 22;
// - ширина мага
const WIZARD_WIDTH = 70;
// - скорость мага
const WIZARD_SPEED = 3;

// - скорость движение фаербола (вчсл)
function getFireballSpeed(isMovingLeft) {
    /* if(isMovingLeft) {
        return 2;
    }
    return 5; */
    
    // ...или лучше с помощью тернарного оператора
    return isMovingLeft ? 2 : 5;
}

// - высота мага (вчсл)
function getWizardHeight() {
    return 1.337 * WIZARD_WIDTH;
}

// - начальное положение на игровом поле (вчсл)
function getWizardX(gameFieldWidth) {
    return (gameFieldWidth - WIZARD_WIDTH) / 2;
}
function getWizardY(gameFieldHeight) {
    return gameFieldHeight / 3;
}

// Поведение игры
startGame(
    FIREBALL_SIZE,
    getFireballSpeed,
    WIZARD_WIDTH,
    WIZARD_SPEED,
    getWizardHeight,
    getWizardX,
    getWizardY
);