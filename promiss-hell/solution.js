/*
 * ЗАДАНИЕ
 *
 * Необходимо реализовать функцию userColleagues, которая составит
 * массив-карту коллег по проектам для указанного имени пользователя
 */

// Для получения данных используется объект userService
// (описание его методов и возвращаемых типов находится в ./api.js)

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

const userService = new UserService();
const username = "izeiner";

function userColleagues(userName) {
    const promise = new Promise(function (resolve) {
        resolve(userService.getUser(userName));
    });

    promise
        .then(function (user) {
            return userService.getUserProjectInfo(user.id);
        })
        .then(function (projectInfo) {
            const codes = [];

            for (const code of projectInfo.projectCodes) {
                codes.push(new Promise(function(resolve){
                    
                }));
            }

            Promise.all(codes);
        });
    return promise;
}

// Вызов функции возвращает "обещание" с результируемой "картой коллег"
userColleagues(username).then(function (colleagueMap) {
    console.log(colleagueMap);
});
