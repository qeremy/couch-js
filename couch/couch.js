var Couch = {};
Couch.NAME = "Couch";
Couch.VERSION = "1.0";

Couch.Couch = function(config){
    this.setConfig(config);
};

Couch.Couch.prototype = {
    config: {},
    setConfig: function(config){
        if (config) {
            for (var i in config) {
                this.config[i] = config[i];
            }
        }
    },
    getConfig: function(){
        return this.config;
    }
};

global.Couch = Couch;

Couch.Util = require("./util/util");
Couch.Client = require("./client");
Couch.Server = require("./server");

module.exports = Couch;
