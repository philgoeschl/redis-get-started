var redis = require('redis');

var redisHost = '127.0.0.1';
var redisPort = process.argv[3] || 6379;
var redisAuth = 'thisismypassword';

var client = redis.createClient({
    port : redisPort,
    host : redisHost
});

client.auth(redisAuth, function(err, response) {
    if(err){
        throw err;
    }
});

client.set('foo', 'bar');
client.get('foo', function(err,response){
    if(err) {
        throw err;
    } else {
        console.log(response);
    }
});