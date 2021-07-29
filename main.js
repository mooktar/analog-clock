const switcher = document.querySelector('.btn-switcher')
const deg = 6
const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const analog = document.querySelector('.numeric')

switcher.addEventListener('click', (e) => {
	const html = document.querySelector('html')
	if (html.classList.contains('dark-mode')) {
		html.classList.remove('dark-mode')
		e.target.innerHTML = 'Dark'
	} else {
		html.classList.remove('light-mode')
		html.classList.add('dark-mode')
		e.target.innerHTML = 'Light'
	}
})

function time () {

	let date = new Date()
	let hh = date.getHours() * 30
	let mm = date.getMinutes() * deg
	let ss = date.getSeconds() * deg

	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
	min.style.transform = `rotateZ(${mm}deg)`
	sec.style.transform = `rotateZ(${ss}deg)`

	analog.innerHTML = `${date.toLocaleTimeString()}`
}

time()
setInterval(time, 1000)
