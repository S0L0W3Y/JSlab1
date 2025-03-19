console.log('Виконання першої функції:');
   function isIPAddress(ip) {
        const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipPattern.test(ip);
    }
    
    let ip = prompt('Введіть IP адресу:');
    console.log(isIPAddress(ip) ? 'Це IP адреса' : 'Це не IP адреса');
    
console.log('Виконання другої функції:');
    function findRGBA(text) {
    const rgbaPattern = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0?\.\d+|1|0)\s*\)/;
    
    const match = text.match(rgbaPattern);
    
    return match ? match[0] : null;
}

console.log(findRGBA("Цей колір: rgba(255, 99, 71, 0.5) виглядає чудово!"));
console.log(findRGBA("background-color: rgba(0, 0, 0, 1);"));
console.log(findRGBA("rgb(255, 255, 255) не є RGBA"));

console.log('Виконання третьої функції:');
    function findHexColor(text) {
        let hexPattern = /#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})/;
    
        let match = text.match(hexPattern); 
    
        if (match) {
            return match[0];
        } else {
            return null; 
        }
    }
    
    console.log(findHexColor("Колір у тексті: #ABC"));  
    console.log(findHexColor("Ось інший колір: #A1B2C3"));
    console.log(findHexColor("Тут немає кольору."));   

console.log('Виконання четвертої функції:');
function findTags(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>`, 'gi'); 
    return text.match(regex) || [];
}

let s = `<div><img src="image1.jpg"><p>Hello</p><img src="image2.png"></div>`;
let tags = findTags(s, "img");
console.log(tags);

console.log('Виконання п\'ятої функції:');

function findPosNum(text) {
    const numbers = text.match(/-?\d+/g);
    const posNum = [];
    if (numbers) {
        for ( let num of numbers) {
            if (Number(num) > 0) {
                posNum.push(Number(num));
            }
        }
    }
    return posNum;
}
    let a = "Рядок з числами: 10, -20, -30, 40, 50, -60, 70, 80, 90, -100";
    let numbers = findPosNum(a);
    console.log(numbers);
 
console.log('Виконання шостої функції:');

function  findDates(text) {
    const datePattern =  /\b\d{4}-\d{2}-\d{2}\b/g;
    return text.match(datePattern) || [];
}
    const text = "Дата народження: 2006-10-06, дата створення: 2025-03-19";
    console.log(findDates(text));

    console.log('Виконання сьомої функції:');
    function findEmail(text) {
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
        return text.match(emailPattern) || [];
    }
        let text1 = "Мій email: dmytro.semko-ip243@nung.edu.ua";
        let emails = findEmail(text1);
        console.log(emails);