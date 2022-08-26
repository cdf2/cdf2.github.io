			if ('serviceWorker' in navigator) {
				console.log('navigator_have');
			    window.addEventListener('load', function() {
			        navigator.serviceWorker.register('sw.js').then(function(registration) {}).catch(function(err) {})
			    })
			}

