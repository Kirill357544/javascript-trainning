/**
 * Реализовать функцию "createFullName", для получения строки с
 * полным именем человека в формате "firstName middleName lastName"
 * при условии, что какой-либо части имени может и не быть
 * (или сразу нескольких частей) - тогда эти части должны игнорироваться.
 */
function createFullName(person) {
    const personMap = new Map();
    personMap.set("firstName", person.firstName);
    personMap.set("middleName", person.middleName);
    personMap.set("lastName", person.lastName);

    let result = "";

    for (const value of personMap.values()) {
        if (value !== undefined && value !== null) {
            result += `${value} `;
        }
    }

    return result.trim();
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
