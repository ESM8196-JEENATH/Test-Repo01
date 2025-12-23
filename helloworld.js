// hello world script — works in Node and browser
;(function(){
	const msg = 'Hello, world!'

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		// Browser: place message into element with id "hello" or create one
		document.addEventListener('DOMContentLoaded', () => {
			let el = document.getElementById('hello')
			if (!el) {
				el = document.createElement('div')
				el.id = 'hello'
				document.body.appendChild(el)
			}
			el.textContent = msg
		})
	} else if (typeof console !== 'undefined') {
		// Node / CLI
		console.log(msg)
	}

	// Expose helper for manual invocation in browser console
	try { if (typeof window !== 'undefined') window.helloMessage = () => msg } catch(e){}
})();

