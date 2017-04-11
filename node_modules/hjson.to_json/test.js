describe('tests', function(){
	describe('hjson to json', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.hjson").toString()

    // require + setup
    require('to_json').use('hjson', require('./index'))

    // usage
		var json = str.to_json('hjson')	
		console.log("parsed = ", json)
	})
})
