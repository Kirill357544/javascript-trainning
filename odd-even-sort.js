// Дан массив
const array = [2, 21, 10, 12, 4, 17, 3, 20, 15, 1, 7];

/*
 * Отсортировать элементы по возрастанию,
 * Но(!),
 * чтобы сначала шли все нечетные элементы, а затем после них все четные.
 */

/*
 * Например, для указанного массива
 * ожидаемый результат:
 * [1, 3, 7, 15, 17, 21, 2, 4, 10, 12, 20]
 */

// ////////////////////////////////////////////////////////
// 1. Реализация любым способом
//
// Реализовать, используя всё, что необходимо, чтобы получился отсортированный массив

/* Здесь код первой реализации */

function getOddNumbers(array) {
    return array.filter((element) => element % 2 !== 0).sort(ascendingSort);
}

function getEvenNumbers(array) {
    return array.filter((element) => element % 2 === 0).sort(ascendingSort);
}

function ascendingSort(prev, next) {
    return prev - next;
}

const sortedArray = [...getOddNumbers(array), ...getEvenNumbers(array)];

// ////////////////////////////////////////////////////////
// 2. Сортировка через метод .sort()
//
// Реализовать сортировку, используя только один вызов метода sort

// Пример использования
array.sort(compareFunction); // После этого массив уже отсортирован

/*
 * Решение задания сводится к реализации функции compareFunction
 */
function compareFunction(a, b) {
    return (b % 2) - (a % 2) || a - b;
}
