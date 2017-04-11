module.exports = function(data){
  var cheerio = require('cheerio')
  $ = cheerio.load(data)
  return $(data)
}
