// Користувач вводить сайти
let link = document.getElementsByTagName('a');
let linkGuest;
for(let i = 0; i < 3; i++){
    linkGuest = prompt(`Введіть улюбленну адресу ${i+1}:`)
    link[i].textContent = linkGuest
    link[i].href = 'https://' + linkGuest 

}

// Вибір коліра для фона
let colorBgBodyGuest = prompt('Введіть колір для фону:')
document.body.style.backgroundColor = colorBgBodyGuest;

// Вибір типа шрифта
let fontStyleGuest = prompt('Введіть тип шрифта (italic - курсив, normal - простой):');
document.body.style.fontStyle = fontStyleGuest;

// Вибір вирівнювання заголовка h1
let levelingGuest = prompt('Де буде h1 на екрані (left, right, center):')
document.querySelector('h1').style.textAlign = levelingGuest;

// Вибір фона для параграфа зі зссилками
let colorBgParagraphGuest = prompt('Введіть колір фону для параграфа зі зссилками:')
document.querySelector('p').style.backgroundColor = colorBgParagraphGuest;

// Вибір коліра тексту у параграфі зі зсилками і для самих зсилок
let colorParagraphGuest = prompt('Введіть колір тексту для параграфа зі зссилками:')
document.querySelector('p').style.color = colorParagraphGuest;
for(let i = 0; i < 3; i++){
    let colorLinkGuest = prompt(`Введіть колір для ${i+1} посилання`);
    link[i].style.color = colorLinkGuest;
}

// Вибір коліра, розміра, товщини тексту у елементі div
let colorDivGuest = prompt('Введіть колір тексту:');
let sizeTextDivGuest = prompt('Введіть розмір тексту(от 1 до 3):')  + 'em';
let weightDivGuest = prompt('Введіть товщину шрифта (От 1 до 9):') + '00';
document.querySelector('div').style.color = colorDivGuest;
document.querySelector('div').style.fontSize = sizeTextDivGuest;
document.querySelector('div').style.fontWeight = weightDivGuest;

// Вибір типа маркера для маркованого списку на сторінці
let typeMarkerGuest = prompt('Введіть тип маркера для списку (s - Квадрат, d - Заповнене коло, c - Пусте коло):')
if(typeMarkerGuest == 's'){
    typeMarkerGuest = 'square'
}
else if(typeMarkerGuest == 'c'){
    typeMarkerGuest = 'circle'
}
else{
    typeMarkerGuest = 'disc'
}
document.querySelector('ul').style.listStyleType = typeMarkerGuest;