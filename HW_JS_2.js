// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


//     for (let i = 1; i <= 10; i++) {
//         result = 2 **i;
    
//     console.log(result)
// }
  


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


// const grade = function (b) {
//     for (let a = 1; a <= b; a++) {
//         result = 2 **a;
        
//     console.log(result)
//     }
// }
// grade(20)



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), 
// во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)


// let a = ":)"
// for (let i = 1; i <= 5; i++) {
//     result = new Array(i + 1).join(a)
//     console.log(result)
//     }



// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
//(как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)


// function smile(a, n) {

//     for (let i = 1; i <= n; i++) {
//     result = new Array(i + 1).join(a)
//     console.log(result)
//     }
// }
// smile("8)", 20)



// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
// сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв


// function getWordStructure(str) {
    
//     let glasn = 0
//     let soglasn = 0
//     const bukva = ['a', 'e', 'i', 'o', 'u', 'y']
//     const bbb = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

//     for (let char of str.toLowerCase()) {
//         if (bukva.includes(char)) {
//             glasn+=1
//         } else 
//             if (bbb.includes(char)) {
//             soglasn+=1
//         }
//     }
//     console.log("Слово " + str + " состоит из " + glasn + " гласных и " + soglasn + " согласных букв.")
// }

// getWordStructure("KOGDA-to")



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)


// function palindrome(str_entry){
//     let str = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
// 	// let ccount = 0
//     let n = str.length
//     for (let i = 0; i < n/2; i++) {  
//         if (str[i] !== str[str.length - 1 - i]) {
//             console.log("Ne palindrome")
//             return false
//         }
//     }
//     console.log("Palindrome")
//     return true
// }

// palindrome("asdfghjsa")
// palindrome('12321')
// palindrome('AbbaAbba')
// palindrome('fvodfgsdfxf')

