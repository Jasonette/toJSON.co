describe('tests', function(){
	describe('cson to json', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.cson").toString()

    // require + setup
    require('to_json').use('cson', require('./index'))

    // usage
		var json = str.to_json('cson')	
		console.log("parsed = ", json)
	})
})
