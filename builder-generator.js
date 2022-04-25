/**
 * Реализовать функцию-конструктор Builder,
 * которая позволяет создавать новые функции-конструкторы
 * как строитель объектов с указанными параметрами.
 *
 * Функция Builder принимает переменное число строковых аргументов,
 * которые будут именами свойств создаваемых объектов.
 * Созданная функция-конструктор от Builder уже будет принимать
 * такое же количество аргументов как значения данных свойств.
 */

function Builder() {
    const propNames = [...arguments];

    return function () {
        const obj = {};

        for (let i = 0; i < propNames.length; i++) {
            obj[propNames[i]] = arguments[i];
        }

        return obj;
    };
}

// Например создание строителя House
var House = new Builder("floors", "apartments", "type", "address");

// После этого уже через вызов функции House можно создавать объекты.
var house29 = new House(10, 80, "brick", "Green str., 29");

// После этого вызова переменная будет иметь следующую структура
// house29 = {
//     floors: 10,
//     apartments: 80,
//     type: 'brick',
//     address: 'Green str., 29'
// };

// Также потом можно создавать другие новые строители:
var Apartment = new Builder("house", "number", "rooms");
var apartment42 = new Apartment(house29, 42, 3);

// Структура объекта apartment42
// apartment42 = {
//     house: { // это просто ссылка на объект house29
//         floors: 10,
//         apartments: 80,
//         type: 'brick',
//         address: 'Green str., 29'
//     },
//     number: 42,
//     rooms: 3
// };
