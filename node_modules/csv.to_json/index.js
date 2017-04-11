module.exports = function(data, callback){
  var csv=require('csvtojson')
  csv().fromString(data).on('end_parsed', function(result){
    callback(result)
  })
}
