// module.exports = require('./couch/couch');

function log(){
    return console.log.apply(this, arguments);
}

var Couch = require('./couch/couch');
// log(Couch)

var couch = new Couch.Couch();
// var couch = new Couch.Couch({host:"127.0.0.1"});
var client = new Couch.Client(couch);

// client.request("POST /!!!BOOOOOOM!!!").done(function(stream, data){
//     // log(data)
//     // log(stream.request.headers)
//     // log(stream.request.body)
//     // log(stream.request.toString())
//     // log("---")
//     // log(stream.response.headers)
//     // log(stream.response.body)
//     // log(stream.response.toString())
//});

// client.request({
//     method: "HEAD",
//     uri: "/",
//     uriParams: {a:1},
//     body: {b:2},
//     headers: {"X-Foo":"The foo!"}
// }).done(function(stream, data){
//     // log(stream.request.headers)
//     // log(stream.request.body)
//     // log(stream.request.toString())
//     // log("---")
//     // log(stream.response.headers)
//     // log(stream.response.body)
//     // log(stream.response.toString())
// });

var server = new Couch.Server(client);
// server.ping(function(stream){
//     console.log(stream.error);
//     console.log(stream.request.toString());
//     console.log(stream.response.toString());
//     console.log("%j", stream.response.isStatusCode(200));
// });
// server.restart(function(stream, data){
//     console.log(data);
// });
// ver.info(null, function(stream, data){
//     console.log(data);
// });
// server.info("vendor.name", function(stream, data){
//     console.log(data);
// });
// server.version(function(stream, data){
//     console.log(data);
// });
// server.getActiveTasks(function(stream, data){
//     console.log(data);
// });
// server.getAllDatabases(function(stream, data){
//     console.log(data);
// });
// server.getDatabaseUpdates(function(stream, data){
//     console.log(data);
// });
// server.getLogs(null, function(stream, data){
//     console.log(data);
// });
// server.replicate({source:"foo", target:"foo_replica", create_target:true}, function(stream, data){
//     console.log(data);
// });
// server.getStats("", function(stream, data){
// // server.getStats("/couchdb/request_time", function(stream, data){
//     console.log(data);
// });
// server.getUuid(null, function(stream, data){
// // server.getUuid(3, function(stream, data){
//     console.log(data);
// });
// // server.getConfig(null, null, function(stream, data){
// // server.getConfig("couchdb", null, function(stream, data){
// server.getConfig("couchdb", "uuid", function(stream, data){
//     console.log(data);
// });
// server.setConfig("couchdb", "foo", "the foo!", function(stream, data){
//     console.log(data !== false);
// });
// server.removeConfig("couchdb", "_", function(stream, data){
//     console.log(data !== false);
// });

// var uuid = new Couch.Uuid();
// console.log(uuid.toString())

var database = new Couch.Database(client, "foo");
// database.ping(function(stream){
//     console.log("%j", stream.response.isStatusCode(200));
// });
// database.info(null, function(stream, data){ console.log(data); });
// database.info("db_name", function(stream, data){ console.log(data); });
