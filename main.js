



const obj = cartObj()
let sum = 10000
let oqat = ''
let tovar = 0

for (const key in obj) {
oqat +=  `${key} ${obj[key].info}`
 tovar +=  obj[key].price
}
let text = `sizning buyurtmangiz ${oqat} yetqazib berish bilan birga bolgan narx ${tovar + sum} yetkazish xaqi ${sum} `
console.log(text);