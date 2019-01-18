var moment = require ('moment');
var url = require('url');
var queryString = require('querystring')

console.log(moment().format ("MMMM YYYY"));
// dddd  => thursday
//MMMM do YY => January 9th 19




const myUrl = url.parse('http://mumstudents.org/cs572/?name=ranjan/', true);

console.log(myUrl.query.name);

 
// for (key in myUrl) {
//     console.log(key + ":" +myUrl[key]);
// }
var info =
    {
        name : 'ranjan bhusal',
        course: 'MWA modern web application'
    };

const result = queryString.stringify(info);

console.log(result);

info = queryString.parse(result);

console.log(info.course);