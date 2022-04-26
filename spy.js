function Person(name) {
    this.name = name;
}

Person.prototype.introduceTo = function (target) {
    return "Hello " + target + ", I am " + this.name;
};

var vladimir = new Person("Vladimir");

//////////////////////

/**
 * Реализовать функцию spy, которая позволяет "шпионить" за указанной функцией.
 *
 * Список данных, которые можно узнать о работе целевой функции:
 * * {boolean} hasBeenCalled - была ли вызвана целевая функция
 * * {number} calls - количество вызовов целевой функции после начала слежения
 * * {Array<any>} lastCallArguments - массив с аргументами последнего вызова
 * * {any} lastReturn - возвращенное значения последнего вызова
 *
 * Шпионаж не должен отменять работу целевой функции.
 * Она должна по-прежнему также работать.
 *
 * @params {function} целевая функция шпионажа
 * @returns {function} функция, подставляемая вместо целевой
 */

function spy(targetFn) {
    executeTargetFn.hasBeenCalled = false;
    executeTargetFn.calls = 0;
    executeTargetFn.lastCallArguments = null;
    executeTargetFn.lastReturn = null;

    function executeTargetFn() {
        executeTargetFn.hasBeenCalled = true;
        executeTargetFn.calls++;
        executeTargetFn.lastCallArguments = [...arguments];
        executeTargetFn.lastReturn = targetFn.call(this, ...arguments);
        return executeTargetFn.lastReturn;
    }

    return executeTargetFn;
}

// Создаем шпиона на функцию "vladimir.introduceTo"
vladimir.introduceTo = spy(vladimir.introduceTo);

console.log(vladimir.introduceTo.hasBeenCalled); // -> false
console.log(vladimir.introduceTo("Lola")); // -> Hello Lola, I am Vladimir
console.log(vladimir.introduceTo.hasBeenCalled); // -> true

console.log(vladimir.introduceTo.calls); // -> 1
console.log(vladimir.introduceTo.lastCallArguments); // -> ["Lola"];
console.log(vladimir.introduceTo.lastReturn); // -> "Hello Lola, I am Vladimir"
