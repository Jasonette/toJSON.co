describe('csv to json', function(){
	it('csv to json', function(done){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.csv").toString()

    // require + setup
    require('to_json').use('csv', require('./index'))

    // usage
		str.to_json('csv', function(json){
      console.log("parsed = ", json)
      done()
    })
	})
})
