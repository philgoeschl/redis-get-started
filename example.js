var redis = require('redis');

var redisHost = '127.0.0.1';
var redisPort = process.argv[3] || 6379;
var redisAuth = 'thisismypassword';

var client = redis.createClient({
    port : redisPort,
    host : redisHost
});

// client.auth(redisAuth, function(err, response) {
//     if(err){
//         throw err;
//     }
// });

// How to store a key-value pair

console.log('### Set some key-value');
client.set('foo', 'bar');
console.log('### Get the value with the key');
client.get('foo', function(err,response){
    if(err) {
        throw err;
    } else {
        console.log(response);
    }
});

// how to store a list in Redis

const myList = 'nameOfList';

client.lpush(myList, 'item B');
client.lpush(myList, 'item B');
client.lpush(myList, 'item C');

// Get the stored list in Redis
client.lrange(myList, 0, 10, function(err,response){
    if(err) {
        throw err;
    } else {
        console.log(response);
    }
});

// Delete the list
client.del(myList);