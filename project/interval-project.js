/* setTimeout(() => {
	console.log('TimeOut')
}, 1500) //1 second = 1000ms

//2.
setTimeout(interval, 3000)

function interval() {
	console.log('3s timeout')
}
*/

/* const id = setTimeout(interval, 3000)

clearInterval(id) - deletes the interval

function interval() {
	console.log('3s timeout')
} */

const btn = document.querySelector('#btn')

let setTimer,
	index = 0

btn.addEventListener('click', () => {
	const id = setTimeout(interval, 500)
	function interval() {
		console.log('3s timeout')
	}
})
