const request = require('request');

request({
    url :'https://maps.googleapis.com/maps/api/geocode/json?address=4/612%20senthilnathan%20street%20madurai',
    json: true
},(error,response,body)=>{
// console.log('error: ' ,error)
// console.log('response: '+response && response.statusCode)
console.log(JSON.stringify(body));
})

//3e2245585b7699f064de474d25cce2f2