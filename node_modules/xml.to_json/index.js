module.exports = function(data){
  var parser = require('x2js')
  return new parser().xml2js(data)
}
