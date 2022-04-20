// /////////////////////////////////////////////////////////////
// Файл не подлежит изменению!
// Задание решается в файле ./solution.js
// /////////////////////////////////////////////////////////////

/*
 * API
 *
 * Файл с описанием типов и фиункций, которые используются в задании.
 */


/**
 * Информация о пользователе
 * @property {number} id Идентификатор пользователя
 * @property {string} username Имя пользователя в системе
 * @property {string} fullName Полное (реальное) имя пользователя
 * @property {string} position Должность
 * @typedef {object} User
 */


/**
 * Информация о проекте
 * @property {number} id Идентификатор проекта
 * @property {string} code Буквенно-цифровой код проекта системе учета
 * @property {string} title Полное наименование проекта
 * @typedef {object} Project
 */


/**
 * Информация о проектах, в которых числится пользователь
 * @property {number} userId Идентификатор пользователя
 * @property {Array<string>} projectCodes Массив с кодами проекта
 * @typedef {object} UserProjectInfo
 */


/**
 * Конструктор для создания сервиса-репозитория данных пользователей.
 * Сервис содержит методы доступа к данных о пользователях и их проектах
 * @constructor
 */
function UserService() {}

/**
 * Получение объекта User по его логину
 * @param {string} userName Имя пользователя в системе
 * @return {Promise<User>} Обещание с объектом User
 * @memberOf {UserService}
 */
UserService.prototype.getUser = function (userName) {};

/**
 * Получение данных о проектах пользователя
 * @param {number} userId Идентификатор пользователя
 * @return {Promise<UserProjectInfo>} Обещание с объектом UserProjectInfo для указанного пользователя
 */
UserService.prototype.getUserProjectInfo = function (userId) {};

/**
 * Получение проекта по его буквенно-цифровому коду
 * @param {string} projectCode Код проекта
 * @return {Promise<Project>} Обещание с объектом Project
 */
UserService.prototype.getProject = function (projectCode) {};

/**
 * Получение пользователей, которая находятся на указанном проекте
 * @param {number} projectId Идентификатор проекта
 * @return {Promise<Array<string>>} Массив строк - юзернеймов ({@link User#username}) пользователей на проекте,
 * либо пустой массив, если пользователей нет на указанном проекте
 */
UserService.prototype.getProjectUsers = function (projectId) {};
