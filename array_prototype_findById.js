/*
 * Реализовать метод "findById" для массивов.
 */

/**
 * Возвращает первый найденных элемент из массива,
 * для которого поле "id" равно значению переданного аргумента.
 *
 * Если не найдено не одного совпадения, то возвращается значение null
 *
 * @param {number} id значение поля "id" искомого элемента
 * @returns элемент массива или null
 */
Array.prototype.findById = function (id) {
    return this.find((element) => element.id === id) || null;
};

// Пример массива для проверки работы метода
const persons = [
    {
        id: 1001,
        name: "Peter",
    },
    {
        id: 1002,
        name: "Jake",
    },
    {
        id: 1015,
        name: "Mathew",
    },
];

// Привет работы метода
console.log(persons.findById(1002)); // { id: 1002, name: 'Jake' }
console.log(persons.findById(1003)); // null
