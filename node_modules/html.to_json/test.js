describe('html to json', function(){
	it('should work', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.html").toString()

    // require + setup
    require('to_json').use('html', require('./index'))

    // usage
		var json = str.to_json('html')	
		console.log("parsed = ", json)
	})
})
