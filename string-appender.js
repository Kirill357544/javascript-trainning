/**
 * Написать реализацию функции StringAppender.
 * Функция позволяет с помощью конвейерных вызовов производить конкатенацию строк.
 */
function StringAppender() {
    let result = "";

    function append(string) {
        result += string;
        return append;
    }

    append.toString = function () {
        return result;
    };

    return append;
}

/*
 * Примеры использования функции
 */

// str1 = "Hello, World!"
var str1 = StringAppender()("Hello")(", ")("World!").toString();
console.log(str1);

// str2 = "1234567890"
var str2 = StringAppender()("1")("2")("3")("4")("5")("6")("7")("8")("9")("0").toString();
console.log(str2);

// Использование как конструктора
var appender = new StringAppender();
appender = appender("Java");
appender = appender("Script");
var javascript = appender.toString();

console.log(javascript); // "JavaScript"
