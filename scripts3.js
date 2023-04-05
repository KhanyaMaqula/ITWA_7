const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = -9394

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = -4582.21000111

const divider = '----------------------------------'

// Only change below this line

const owed = leoBalance + sarahBalance
const leo = `${leoName} ${leoSurname.trim()} Owed R ${sarahBalance.toFixed(2)}`
const sarah = `${sarahName.trim()} ${sarahSurname} Owed R ${leoBalance.toFixed(2)}`
const total = "Total amount owed: "
const result = leo + '\n' + sarah + '\n' + divider + '\n' + divider + '\n' + total + `R ${owed.toFixed(2)}` + '\n' + divider

console.log(result)
