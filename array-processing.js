// Исходные данные
const students = [
    {
        name: 'John',
        age: 17,
        gender: "M",
        grade: 8,
        state: "Florida"
    },
    {
        name: 'Sarah',
        age: 19,
        gender: "F",
        grade: 9,
        state: "Alaska"
    },
    {
        name: 'Peter',
        age: 21,
        gender: "M",
        grade: 5,
        state: "California"
    },
    {
        name: 'Bred',
        age: 19,
        gender: "M",
        grade: 8,
        state: "Florida"
    },
    {
        name: 'Garry',
        age: 24,
        gender: "M",
        grade: 9,
        state: "Tennessee"
    },
    {
        name: 'Samantha',
        age: 14,
        gender: "F",
        grade: 7,
        state: "California"
    },
    {
        name: 'Garold',
        age: 16,
        gender: "M",
        grade: 8,
        state: "Washington"
    }
];



/**
 * ===================
 *
 * Записать выражения для подсчета и присвоения следующий данных
 *
 * ===================
 */



/**
 * [Number] количество совершеннолетних (возвраст >= 18)
 */
var adultsCount;


/**
 * [Number] Средний бал среди всех учащихся
 */
var meanGrade;


/**
 * [Number] Средний бал среди несовершеннолетних (возраст < 18)
 */
var teenMeanGrade;


/**
 * [Number] Средний бал среди совершеннолетних парней
 */
var menMeanGrade;


/**
 * [Array<Srudent>] Массив учащихся, отсортированных по возрастанию балов.
 */
var studentsByGrades;


/**
 * [Array<String>] Массив имен всех учащихся
 */
var studentNames;


/**
 * [Array<String>] Массив имен всех девушек
 */
var girlNames;


/**
 * [Array<String>] Имена всех штатов, в которых живут учащиеся (без повторений!)
 */
var states;


/**
 * [Array<String>] Имена всех совершеннолетних из штата California
 */
var californians;


/**
 * [Number] Средний бал учащихся из Аляски, с именем начинающимся на "S"
 */
var alaskaSMeanGrade;
