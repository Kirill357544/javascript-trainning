/*
 * ЗАДАНИЕ
 *
 * Необходимо реализовать функцию userColleagues, которая составит
 * массив-карту коллег по проектам для указанного имени пользователя
 */

// Для получения данных используется объект userService
// (описание его методов и возвращаемых типов находится в ./api.js)
const userService = new UserService();

function userColleagues(userName) {
    // Весь код должен располагаться в этой функции.
}



/*
 * Пример того как должна работать программа
 */

// Имеется входной параметр - имя пользователя в система
const username = 'icatbin';

// Вызов функции возвращает "обещание" с результируемой "картой коллег"
userColleagues(username).then(function (colleagueMap) {

    // Где colleagueMap будет массив вида
    // colleagueMap = [
    //     {
    //         projectTitle: 'Project Title 1', // Наименование проекта
    //         users: [ // Массив полных(!) имен коллег указанного сотрудника (исключая самого сотрудника(!))
    //             'Ivanov Ivan',
    //             'Petrov Petr',
    //             'Sidorov Semen'
    //         ],
    //     },
    //     {
    //         projectTitle: 'Project Title 2',
    //         users: [
    //             'Petrov Petr',
    //             'Kovalev Vasily'
    //         ],
    //     },
    //     // ...
    // ];

    console.log(colleagueMap);
});
