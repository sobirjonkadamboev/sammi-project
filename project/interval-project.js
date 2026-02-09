/* setTimeout(() => {
	console.log('TimeOut')
}, 1500) //1 second = 1000ms

//2.
setTimeout(interval, 3000)

function interval() {
	console.log('3s timeout')
}

const id = setTimeout(interval, 3000)

clearInterval(id) - deletes the interval

function interval() {
	console.log('3s timeout')
} 

const btn = document.querySelector('#btn')

let setTimer,
	index = 0

btn.addEventListener('click', () => {
	setTimer = setTimeout(interval, 500)
	//setTimer = setInterval(interval, 500) //works every 0.5 seconds automatically
	if (index === 5) {
		clearInterval(setTimer)
	}
	function interval() {
		console.log('3s timeout')
		index++
	}
})

let id = setTimeout(function log() {
	console.log('this is interval')
	id = setTimeout(log, 500)
}, 500) */

const moveCar = () => {
	const car = document.querySelector('.car')
	let position = 0

	const animationId = setInterval(moving, 10)
	function moving() {
		if (position === 1000) {
			clearInterval()
		} else {
			position++
			car.style.left = position + 'px'
		}
	}
}
