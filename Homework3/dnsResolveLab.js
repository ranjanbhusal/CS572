// using callbacks
const dns = require('dns');
function domainNameSys(dname) {
    dns.resolve4(dname, function (err, data) {
        if(err) console.log("error occured");
        console.log(data);
    });
}

domainNameSys('www.mum.edu');

//using promises

function getIpAddress (domainName) {
    return new Promise (function(resolve, reject){
        dns.resolve4(domainName, function(err, data) {
            if(err) reject(err);
            else resolve(data);
        });
    });
} 

getIpAddress('www.mum.edu')
    .then (data => console.log(data))
    .catch((err) => console.log(err));

//using async/await

async function getIpAddressUsingAsync (domainName) {
    try { 
        const result = await getIpAddress(domainName)
        console.log("Async " + result[0]);
        return result;
    }catch (error) {
        throw console.error("error occured");
    }
} 

getIpAddressUsingAsync('www.mum.edu');




// async function getIpAddressAsync(value) {
//     try {
//       const result = await getIpAddress(value);
//       console.log("async", result[0]);
//       return result;
//     } catch (error) {
//       throw console.error("Error occured");
//     }
//   }
//   getIpAddressAsync("www.mum.edu");