// module.exports = require('./couch/couch');

var log = function(){
    return console.log.apply(this, arguments);
};

var c = require('./couch/couch');
// log(c)

// var cfg = {host:"127.0.0.1"};
var couch = new c.Couch();
var client = new c.Client(couch);

// client.request("GET /");
client.request({
    method: "PUT",
    uri: "/",
    uriParams: {a:1},
    body: {b:2},
    headers: {"X-Foo":"The foo!"}
}).done(function(req, res){
    log(res)
});

