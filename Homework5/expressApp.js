const express = require ('express');
const axios = require ('axios');

const app = express();

app.set('case sensitive routing', true);
app.set('strict routing', true);    
app.get('/users', (req, res) => {
    const first = '<https://randomuser.me/api/?results=1> rel="first"'
    const prev = '<https://randomuser.me/api/?results=9> rel="prev"'
    const next = '<https://randomuser.me/api/?results=10> rel="next"'
    const last = '<https://randomuser.me/api/?results=100> rel="last"'
    res.set('Link', `${first} ${prev} ${next} ${last}`);
    res.set('Cache-Control', 'private, max-age=86400' );

    axios.get('https://randomuser.me/api/?results=10')
    .then((data) => res.json(data.data))
    .catch((err) => console.log(err))

});


// const result = async () => {
//     try{
//         return await axios.get('https://randomuser.me/api/?results=10');
//     }catch (erroe){
//         console.error(error);
//     }
// }


app.listen(8085, ()=>console.log('listening on 8085'));

