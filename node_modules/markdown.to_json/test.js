describe('markdown to json', function(){
	it('should work', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.md").toString()

    // require + setup
    require('to_json').use('md', require('./index'))

    // usage
		var json = str.to_json('md')	
		console.log("parsed = ", json)
	})
})
