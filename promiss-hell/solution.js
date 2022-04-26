/*
 * ЗАДАНИЕ
 *
 * Необходимо реализовать функцию userColleagues, которая составит
 * массив-карту коллег по проектам для указанного имени пользователя
 */

// Для получения данных используется объект userService
// (описание его методов и возвращаемых типов находится в ./api.js)
const userService = new UserService();

// function userColleagues(userName) {
//     return new Promise(function (resolve) {
//         userService.getUser(userName).then(function (user) {
//             const userName = user.username;
//             userService.getUserProjectInfo(user.id).then(function (projectInfo) {
//                 const colleagueMap = [];
//                 for (const iterator of projectInfo.projectCodes) {
//                     userService.getProject(iterator).then(function (project) {
//                         const projectTitle = project.title;
//                         userService.getProjectUsers(project.id).then(function (projectUsers) {
//                             const partners = projectUsers.filter((user) => user !== userName);
//                             colleagueMap.push({
//                                 projectTitle,
//                                 users: partners,
//                             });
//                         });
//                         resolve(colleagueMap);
//                     });
//                 }
//             });
//         });
//     });
// }

// let userName;
// const projectsCode = [];
// const colleagueMap = [];

// function userColleagues(userName) {
//     return new Promise(function (resolve) {
//         userService
//             .getUser(userName)
//             .then(function (user) {
//                 userName = user.username;
//                 return userService.getUserProjectInfo(user.id);
//             })
//             .then(function (projectInfo) {
//                 for (const iterator of projectInfo.projectCodes) {
//                     userService.getProject(iterator).then(function (project) {
//                         const projectTitle = project.title;
//                         userService.getProjectUsers(project.id).then(function (projectUsers) {
//                             const partners = projectUsers.filter((user) => user !== userName);
//                             colleagueMap.push({
//                                 projectTitle,
//                                 users: partners,
//                             });
//                             return colleagueMap;
//                         });
//                     });
//                 }
//             });
//     });
// }

const projectCodes = [];

function userColleagues(userName) {
    const promise = new Promise(function (resolve) {
        resolve(userService.getUser(userName));
    });

    promise
        .then(function (user) {
            userName = user.username;
            console.log(user);
            return userService.getUserProjectInfo(user.id);
        })
        .then(function (projectInfo) {
            console.log(projectInfo);
            for (const iterator of projectInfo.projectCodes) {
                console.log(iterator);
                projectCodes.push(iterator);
            }
            // console.log(projectCodes);
        });

    return promise;
}

// Вызов функции возвращает "обещание" с результируемой "картой коллег"
userColleagues(username).then(function (colleagueMap) {
    console.log(colleagueMap);
});
