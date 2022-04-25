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
    const colleagueMap = [];

    return new Promise(function (resolve) {
        userService
            .getUser(userName)
            .then((user) =>
                userService
                    .getUserProjectInfo(user.id)
                    .then((projectInfo) =>
                        userService
                            .getProject(projectInfo.projectCodes[0])
                            .then((project) =>
                                userService.getProjectUsers(project.id).then((users) => resolve(users))
                            )
                    )
            );
    });
}

/*
 * Пример того как должна работать программа
 */

// Имеется входной параметр - имя пользователя в система
const username = "icatbin";

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

const prom = new Promise(function (res, rej) {
    setTimeout(function () {
        res("Kirill");
    }, 1000);
});

prom.then((name) => {
    console.log("fist promise");
    return `My name is ${name}`;
}).then((greetings) => {
    console.log("second promise");
    setTimeout(function () {
        console.log(greetings);
    }, 3000);
});
