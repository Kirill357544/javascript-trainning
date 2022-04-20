/*
 * Реализовать возможность на любом объекте вызывать метод rename(oldName, newName),
 * который будет изменять указананное имя старого свойства на новое имя
 */

Object.prototype.rename = function (oldName, newName) {
    this[newName] = this[oldName];
    delete this[oldName];
};

// Например, имеется объект person
const person = {
    name: "James Carn",
    address: "j.carn@mscarn.com",
};

// На котором уже может вызывать .rename
person.rename("address", "email");

// После этого этот же объект должен уже выглядеть как
// person = {
//    name: "James Carn",
//    email: "j.carn@mscarn.com"
// };
