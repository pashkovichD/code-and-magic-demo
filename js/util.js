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

export {getRandomArrayElement};