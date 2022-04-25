/**
 * Добавить в прототип Array метод "where", который фильтрует массив также как и метод "filter",
 * но с другим принципом использования:
 *
 * 1) .where(string, any) - принимает строки и любой второй аргумент:
 * 	проверят, что для каждого элемента(объекта), свойства по имени первого аргументы равно значению второго аргумента
 *
 * 2) .where(Object) - принимает объект:
 * 	объект с парами ключ-значение для проверки каждого элемента(объекта) с каждой парой из указанного объекта,
 * 	то есть каждое поле и значение переданного объекта должно совпадать с полем и значением искомого объекта в массиве.
 */

// ////////////////////
// Примеры:
// ////////////////////

// Исходный массив
var array = [
    { type: "Dog", age: 8 },
    { type: "Cat", age: 4 },
    { type: "Dog", age: 4 },
];

Array.prototype.where = function () {
    let result;

    if (arguments.length === 2 && typeof arguments[0] === "string") {
        result = stringWhere.call(this, ...arguments);
    } else if (arguments.length === 1 && typeof arguments[0] === "object" && arguments[0] !== null) {
        result = objectWhere.call(this, ...arguments);
    }

    return result;
};

function stringWhere() {
    const property = arguments[0];
    const value = arguments[1];
    return this.filter((element) => element[property] === value);
}

function objectWhere() {
    const object = arguments[0];
    return this.filter((element) => Object.keys(object).every((key) => element[key] === object[key]));
}

// Фильтрация по имению свойству и его значению
array.where("type", "Cat"); // => [ { type: 'Cat', age: 4 } ];
console.log(array.where("type", "Cat"));

// Фильтрация по объекту
array.where({ age: 4 }); // => [ { type: 'Cat', age: 4 }, {type: 'Dog', age: 4} ];
console.log(array.where({ age: 4 }));
