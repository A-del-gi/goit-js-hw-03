function filterArray(numbers, value) {
    const arrNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            arrNumbers.push(numbers[i]);
        }
    }
    return arrNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел
//     (numbers) та значення(value) як параметри.Функція повинна повертати 
//     новий масив лише тих чисел із масиву numbers, які більші за значення value.