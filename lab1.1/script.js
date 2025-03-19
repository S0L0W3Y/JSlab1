function isInteger(num) {
    return num % 1 === 0;
}

let num = Number(prompt('Введіть число:'));
console.log(isInteger(num) ? 'Це ціле число' : 'Це не ціле число');