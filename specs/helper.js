'use strict';

if (typeof Function.prototype.bind !== 'function') {
    Function.prototype.bind = function bind(obj) {
        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            Nop = function() {
            },
            bound = function() {
                return self.apply(
                    this instanceof Nop ? this : (obj || {}), args.concat(
                        Array.prototype.slice.call(arguments)
                    )
                );
            };
        Nop.prototype = this.prototype || {};
        bound.prototype = new Nop();
        return bound;
    };
} 