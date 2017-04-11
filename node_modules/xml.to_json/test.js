describe('xml to json', function(){
	it('should work', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.xml").toString()

    // require + setup
    require('to_json').use('xml', require('./index'))

    // usage
		var json = str.to_json('xml')	
		console.log("parsed = ", json)
	})
})
