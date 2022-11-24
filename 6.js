let num = [1 , 3 , 4, 1];
let x = true;
console.log(num.length)
console.log(num [0])
for (let i = 1;i < num.length; i++) {
    if (num[0] != num[i])
    {x = false; break;}
}
console.log(x)