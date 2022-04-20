// /////////////////////////////////////////////////////////////
// Файл не подлежит изменению!
// Задание решается в файле ./solution.js
// /////////////////////////////////////////////////////////////

/**
 * Базовая(тестовая) реализация API, для проверки результата выполнения
 */
UserService = function () {
    /**
     * @type {Array<User>}
     */
    const users = [{
        id: 1,
        username: 'icatbin',
        fullName: 'Ian Catbin',
        position: 'Junior Developer'
    },
    {
        id: 2,
        username: 'plott',
        fullName: 'Paul Lott',
        position: 'Front-End Developer'
    },
    {
        id: 3,
        username: 'izeiner',
        fullName: 'Irad Zeiner',
        position: 'Project Manager'
    }];

    /**
     * @type {Array<Project>}
     */
    const projects = [{
        id: 1,
        code: 'smsaled',
        title: 'SuperMarket Sales'
    },
    {
        id: 2,
        code: 'avc',
        title: 'Active Vendi Craft'
    },
    {
        id: 3,
        code: 'royal-dc',
        title: 'Royal Dino Club'
    }];

    /**
     * @type {Array<UserProjectInfo>}
     */
    const userProjects = [{
        userId: 1,
        projectCodes: ['avc']
    },
    {
        userId: 2,
        projectCodes: ['smsaled', 'avc']
    },
    {
        userId: 3,
        projectCodes: ['smsaled', 'avc', 'royal-dc']
    }];

    const projectUsers = [{
        projectId: 1,
        users: ['plott', 'izeiner']
    },
    {
        projectId: 2,
        users: ['icatbin', 'plott', 'izeiner']
    },
    {
        projectId: 3,
        users: ['izeiner']
    }];

    this.getUser = function (userName) {
        return new Promise(function (resolve) {
            const matchUsers = users.filter(u => u.username === userName);
            setTimeout(function () {
                resolve(matchUsers.length ? matchUsers[0] : null);
            }, 107);
        });
    };

    this.getProject = function (projectCode) {
        return new Promise(function (resolve) {
            const matchProjects = projects.filter(p => p.code === projectCode);
            setTimeout(function () {
                resolve(matchProjects.length ? matchProjects[0] : null);
            }, 281);
        });
    };

    this.getUserProjectInfo = function (userId) {
        return new Promise(function (resolve) {
            const matchUserProjects = userProjects.filter(up => up.userId === userId);
            setTimeout(function () {
                resolve(matchUserProjects.length ? matchUserProjects[0] : null);
            }, 197);
        });
    };

    this.getProjectUsers = function (projectId) {
        return new Promise(function (resolve) {
            const matchProjectUsers = projectUsers.filter(pu => pu.projectId === projectId);
            setTimeout(function () {
                resolve(matchProjectUsers.length ? matchProjectUsers[0].users : []);
            }, 312);
        });
    };
};

