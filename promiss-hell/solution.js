/*
 * ЗАДАНИЕ
 *
 * Необходимо реализовать функцию userColleagues, которая составит
 * массив-карту коллег по проектам для указанного имени пользователя
 */

const userService = new UserService();
const username = "izeiner";

function userColleagues(userName) {
    return userService
        .getUser(userName)
        .then(function (user) {
            return userService.getUserProjectInfo(user.id);
        })
        .then(function (projectInfo) {
            const projects = [];

            for (const code of projectInfo.projectCodes) {
                projects.push(userService.getProject(code));
            }

            return Promise.all(projects).then(function (projects) {
                return projects;
            });
        })
        .then(function (projects) {
            const colleagueMap = [];
            const colleagues = [];

            for (const project of projects) {
                colleagues.push(userService.getProjectUsers(project.id));
                colleagueMap.push({
                    projectTitle: project.title,
                });
            }

            return Promise.all(colleagues).then(function (colleagues) {
                for (let i = 0; i < colleagues.length; i++) {
                    colleagueMap[i].users = colleagues[i].filter((colleague) => colleague !== userName);
                }

                return colleagueMap;
            });
        });
}

// Вызов функции возвращает "обещание" с результируемой "картой коллег"
userColleagues(username).then(function (colleagueMap) {
    console.log(colleagueMap);
});
