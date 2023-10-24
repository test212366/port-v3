const work = document.getElementById('work')
const start = document.getElementById('is')

const workWindow = document.getElementById('works')
const startWindow = document.getElementById('start')
work.addEventListener('click', function (e) {
	e.preventDefault()
	workWindow.scrollIntoView({
		block: 'center',
		inline: 'nearest',
		behavior: 'smooth'
	})
})
start.addEventListener('click', function (e) {
	e.preventDefault()
	startWindow.scrollIntoView({
		block: 'center',
		inline: 'nearest',
		behavior: 'smooth'
	})
})