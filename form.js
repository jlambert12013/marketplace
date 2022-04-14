const xhr = new XMLHttpRequest()
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText)
	}
})

xhr.open(
	'GET',
	'https://motorcycle-specs-database.p.rapidapi.com/article/2020/Yamaha/YZF%20R15'
)
xhr.setRequestHeader(
	'X-RapidAPI-Host',
	'motorcycle-specs-database.p.rapidapi.com'
)
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY')

xhr.send(data)

console.log(data)
