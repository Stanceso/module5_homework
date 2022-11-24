let y = +prompt('Введите число')
if  (isNaN(y)) {
    alert('Упс, кажется, вы ошиблись ')
} else if (y % 2 === 0)  {
    alert('Число ' +y+ ' Четное')
} else {
    alert('Число ' +y+ ' Нечетное')
}