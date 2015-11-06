var Class = require("./util/class");

var Server = Class.create("Server", {
    client: null,

    __init__: function(client){
        if (!client) {
            throw new Error("Client must me instance of Couch.Client!");
        }
        this.client = client;
    },

    ping: function(callback){
        return this.client.head("/", null, callback);
    },
    info: function(key, callback) {
        return this.client.get("/", null, function(stream){
            return callback(stream, stream.response.getData(key));
        });
    },
    version: function(callback){
        return this.info("version", callback);
    },
    getActiveTasks: function(callback){
        return this.client.get("/_active_tasks", null, callback);
    },
    getAllDatabases: function(callback){
        return this.client.get("/_all_dbs", null, callback);
    },
    getDatabaseUpdates: function(query, callback){
        return this.client.get("/_db_updates", {uriParams: query}, callback);
    },
    getLogs: function(query, callback){
        return this.client.get("/_log", {uriParams: query}, callback);
    },
    replicate: function(query, callback) {
        query = query || {};
        if (!query.source || !query.target) {
            throw new Error("Both source & target required!");
        }
        return this.client.post("/_replicate", {body: query}, callback);
    },
    restart: function(callback){
        return this.client.post("/_restart", null, callback);
    }
});

module.exports = Server;
