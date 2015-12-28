var t1 = function(b) {
    function a(c) {
        Object.apply(this, arguments);
        Object.defineProperties(this, {
            "super": {
                value: Object.getPrototypeOf(this),
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "testtest": {
                value: (function() {
                    return 10
                })(),
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "minSpeed": {
                value: 0,
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "maxSpeed": {
                value: 100,
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "_speed": {
                value: 10,
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "test": {
                value: c,
                writable: !0,
                enumerable: !0,
                configurable: !0
            },
            "funcTest": {
                value: function(val) {
                    return val * 5
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
            }
        });
        return this;
    }
    a.prototype = Object.create(Object, {

        foo: {
            value: 'hello',
            writable: !0,
            enumerable: !0,
            configurable: !0
        },

        bar: {

            get: function() {
                return 10;
            },
            set: function(value) {
                console.log('bar Setting to ', value);
            },
            enumerable: !0,
            configurable: !0
        }
    });
    a.prototype.constructor = a;

    Object.defineProperties(a.prototype, {
        "speed": {
            get: function() {
                return this._speed;
            },
            set: function(a) {
                a !== this._speed && (a > this.maxSpeed ? a = this.maxSpeed : a < this.minSpeed && (a = this.minSpeed), this._speed = a);
            },
            enumerable: !0,
            configurable: !0
        },
        "otherGetTest": {
            get: function() {
                return this._speed;
            },
            enumerable: !0,
            configurable: !0
        },
        "mixin": {
            value: function(source) {
                for (var prop in source) {
                    if (source.hasOwnProperty(prop)) {
                        this[prop] = source[prop];
                    }
                }
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
        }
    });

    return a;
}();




var t3 = function(name) {

    t1.apply(this, arguments);

    this.other = "1234string";

};

t3.prototype = Object.create(t1.prototype, {
    foox: {
        value: 'meeow',
        writable: !0,
        enumerable: !0,
        configurable: !0
    }
});

t3.prototype.constructor = t3;
t3.prototype.doSomething = function(theThing) {
    console.log(theThing);
};
var t4 = new t3("greg");


console.log(t4.speed);
t4.speed = 5000;
console.log(t4.speed);
t4.mixin({
    prop1: function(abc) {
        console.log(abc)
    }
});
console.log("instanceof:");
console.log("t4 of t3: ", t4 instanceof t3);
console.log("t4 of t1: ", t4 instanceof t1);
console.log("t4: ", t4);
console.log("t3: ", t3);
console.log("t1: ", t1);
console.log("t4.prototype: ", t4.prototype);
console.log("t3.prototype: ", t3.prototype);
console.log("t1.prototype: ", t1.prototype);
console.log("t4.super: ", t4.super);
console.log("t3.super: ", t3.super);
console.log("t1.super: ", t1.super);
console.log(t4.foo);
t4.bar = "pickle";
console.log(t4.funcTest(5));
console.log(t4.base);
console.log(t4.otherGetTest);

t4.prop1("help");
