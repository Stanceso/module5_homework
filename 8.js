let myMap = new Map() 
myMap.set('key', 'prop'),
myMap.set(1, 'item'),
myMap.set(true, 'itempro'); 
myMap.forEach((values,keys)=>{
 console.log(`Ключ-X ${keys} Значение-Y ${values}`);
})