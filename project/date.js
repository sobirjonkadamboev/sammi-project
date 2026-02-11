// const now = new Date()

// const parse = Date.parse('2006-11-15')
// console.log(parse)
// // console.log(now.getFullYear())
// // console.log(now.getHours())
// // console.log(now.getUTCHours())

// // now.setHours(12)
// // console.log(now)

let startDate = new Date()

for (let i = 0; i < 100000; i++) {
	let number = i ** 3
}

let endDate = new Date()

console.log(`Loop was worked ${endDate - startDate} milliseconds`)
