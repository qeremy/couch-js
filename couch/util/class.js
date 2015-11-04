var Class = (function() {
    return {
        create: function(prototype){
            function Class() {
                if (this.init && this.init.apply) {
                    this.init.apply(this, arguments);
                }
            }
            Class.prototype = prototype;
            Class.prototype.constructor = Class;
            return Class;
        },
        extend: function(target, properties) {
            for (var i in properties) {
                target.prototype[i] = properties[i];
            }
            return target;
        }
    };
})();

module.exports = Class;
