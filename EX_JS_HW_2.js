// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 

for ( let degree = 1; degree <= 10; degree++){
    console.log(Math.pow(2, degree));
}

//  1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const anythingDegree = function(degree1) {
    console.log(Math.pow(2, degree1))
}
anythingDegree(1)
anythingDegree(5)
anythingDegree(10)

//  Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

for ( let str = 1; str <= 5; str++){
    let smile = ":)"
    console.log(smile.repeat(str));
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    for ( str = 1; str <= numberOfRows; str++){
         console.log(stroka.repeat(str));
    }
}
printSmile ("(1) ", 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

// через includes
function getWordStructure_new(word){
    let arr = word.toLowerCase().split('');
    let vowels = 'aeioy';
    let consonants = 'bcdfghjklmnpqrstvwxz';
    let count_vowels = 0;
    let count_consonants = 0;
    for ( let i=0; i<arr.length; i++){
     if (vowels.includes(arr[i])){
        count_vowels++;
             }
    if (consonants.includes(arr[i])){
         count_consonants++ 
        }
     }
 console.log( "Слово " + word + " состоит из: " +  count_vowels + " гласных и " + count_consonants + " согласных букв")
 }
 
 getWordStructure_new("case")
 getWordStructure_new("Case")
 getWordStructure_new("Check-list")

// вариант циклы

function getWordStructure(word){
   let arr = word.toLowerCase().split('');
   let vowels = 'aeioy';
   let consonants = 'bcdfghjklmnpqrstvwxz';
     let count_vowels = 0;
   let count_consonants = 0;
   for ( let i=0; i<arr.length; i++){
    for (let j = 0; j < vowels.length; j++){
            if (arr[i] == vowels[j]){ count_vowels++ }
            }
    }
    for ( let i=0; i<arr.length; i++){
        for (var j = 0; j < consonants.length; j++){
                if (arr[i] == consonants[j]){ count_consonants++ }
                }
        }
console.log( "Слово " + word + " состоит из: " +  count_vowels + " гласных и " + count_consonants + " согласных букв")
}

getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")

// вариант indexOf

function getWordStructure1(word_new){
    let arr = word_new.toLowerCase().split('');
    let vowels = 'aeioy';
    let consonants = 'bcdfghjklmnpqrstvwxz';
    let count_vowels = 0;
    let count_consonants = 0;
    for ( let i=0; i<arr.length; i++){
        if (vowels.indexOf(arr[i]) !== -1) {
            count_vowels++;
        }
      
        if (consonants.indexOf(arr[i]) !== -1) {
            count_consonants ++;  
        }
    }
    return (`Слово ${word_new} состоит из ${count_vowels} гласных и ${count_consonants} согласных букв`);
 }

console.log(getWordStructure1('case'));
console.log(getWordStructure1('Сase'));
console.log(getWordStructure1('Check-List'));

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word_Palindrom){
    let arr = word_Palindrom.toLowerCase().split('');
    for (let i = 0, j = arr.length - 1 ; i < j; i++, j--){
          if (arr[i] != arr[j]) {
          return false;
          }
    }  
    return true;
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));
console.log(isPalindrom('Abcba'));
console.log(isPalindrom('Abrasdba'));
console.log(isPalindrom('Abrafdrba'));
console.log(isPalindrom('Absarba'));
console.log(isPalindrom('Abrasba'));
console.log(isPalindrom('Abcasisacba'));