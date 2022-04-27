/*
 * ЗАДАНИЕ
 *
 * Необходимо реализовать функцию userColleagues, которая составит
 * массив-карту коллег по проектам для указанного имени пользователя
 */

const userService = new UserService();
const username = "izeiner";

function userColleagues(userName) {
    const colleagueMap = [];

    return userService
        .getUser(userName)
        .then(function (user) {
            return userService.getUserProjectInfo(user.id);
        })
        .then(function (projectInfo) {
            const codes = [];

            for (const projectCode of projectInfo.projectCodes) {
                codes.push(userService.getProject(projectCode));
            }

            return Promise.all(codes).then(function (projects) {
                return projects;
            });
        })
        .then(function (projects) {
            const colleagues = [];

            for (const project of projects) {
                colleagues.push(userService.getProjectUsers(project.id));
                colleagueMap.push({
                    projectTitle: project.title,
                });
            }

            Promise.all(colleagues).then(function (projectColleagues) {
                for (let i = 0; i < projectColleagues.length; i++) {
                    colleagueMap[i].users = projectColleagues[i].filter(
                        (colleague) => colleague !== userName
                    );
                }
            });
        });
}

// Вызов функции возвращает "обещание" с результируемой "картой коллег"
userColleagues(username).then(function (colleagueMap) {
    console.log(colleagueMap);
});
