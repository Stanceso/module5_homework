let x = false
if (typeof(x) === 'string'){
    console.log("x - строка")
} else if (typeof(x) === 'boolean') {
    console.log("x - Логический тип")
} else if (typeof(x) === 'number') {
    console.log("x - число");
}
else {
    console.log("Тип x не определен")
}