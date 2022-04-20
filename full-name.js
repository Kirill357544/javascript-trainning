/**
 * Реализовать функцию "createFullName", для получения строки с
 * полным именем человека в формате "firstName middleName lastName"
 * при условии, что какой-либо части имени может и не быть
 * (или сразу нескольких частей) - тогда эти части должны игнорироваться.
 */
function createFullName(person) {
    return Object.values(person).join(" ").trim();
}

// Пример
const person1 = {
    lastName: "Carrington",
    firstName: "James",
    middleName: "Carlos",
};

const fullName1 = createFullName(person1);
// Должно получиться "James Carlos Carrington"

const person2 = {
    lastName: "Петров",
    firstName: "Иван",
    middleName: null,
};

const fullName2 = createFullName(person2);
// Должно получиться "Иван Петров"
