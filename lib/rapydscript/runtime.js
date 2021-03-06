var RS_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
var RS_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
var RS_cond_temp, RS_expr_temp, RS_last_exception;
var RS_object_counter = 0;
var RS_len;

var RS_len;
function RS_bool(val) {
    return !!val;
};
Object.defineProperties(RS_bool, {
    __argnames__ : {value: ["val"]}
});

function RS_print() {
    var parts;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            parts.push(RS_str(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]));
        }
        console.log(parts.join(" "));
    }
};

function RS_int(val, base) {
    var ans;
    ans = parseInt(val, base || 10);
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
};
Object.defineProperties(RS_int, {
    __argnames__ : {value: ["val", "base"]}
});

function RS_float() {
    var ans;
    ans = parseFloat.apply(null, arguments);
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
};

function RS_arraylike_creator() {
    var names;
    names = "Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    if (typeof HTMLCollection === "function") {
        names = names.concat("HTMLCollection NodeList NamedNodeMap".split(" "));
    }
    return (function() {
        var RS_anonfunc = function (x) {
            if (Array.isArray(x) || typeof x === "string" || names.indexOf(Object.prototype.toString.call(x).slice(8, -1)) > -1) {
                return true;
            }
            return false;
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["x"]}
        });
        return RS_anonfunc;
    })();
};

function options_object(f) {
    return function () {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[RS_bound_index(arguments.length - 1, arguments)][RS_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
};
Object.defineProperties(options_object, {
    __argnames__ : {value: ["f"]}
});

function RS_id(x) {
    return x.RS_object_id;
};
Object.defineProperties(RS_id, {
    __argnames__ : {value: ["x"]}
});

function RS_dir(item) {
    var arr;
    arr = RS_list_decorate([]);
    for (var i in item) {
        arr.push(i);
    }
    return arr;
};
Object.defineProperties(RS_dir, {
    __argnames__ : {value: ["item"]}
});

function RS_ord(x) {
    var ans, second;
    ans = x.charCodeAt(0);
    if (55296 <= ans && ans <= 56319) {
        second = x.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
            return (ans - 55296) * 1024 + second - 56320 + 65536;
        }
        throw new TypeError("string is missing the low surrogate char");
    }
    return ans;
};
Object.defineProperties(RS_ord, {
    __argnames__ : {value: ["x"]}
});

function RS_chr(code) {
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
};
Object.defineProperties(RS_chr, {
    __argnames__ : {value: ["code"]}
});

function RS_callable(x) {
    return typeof x === "function";
};
Object.defineProperties(RS_callable, {
    __argnames__ : {value: ["x"]}
});

function RS_bin(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(2);
    if (ans[0] === "-") {
        ans = "-" + "0b" + ans.slice(1);
    } else {
        ans = "0b" + ans;
    }
    return ans;
};
Object.defineProperties(RS_bin, {
    __argnames__ : {value: ["x"]}
});

function RS_hex(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(16);
    if (ans[0] === "-") {
        ans = "-" + "0x" + ans.slice(1);
    } else {
        ans = "0x" + ans;
    }
    return ans;
};
Object.defineProperties(RS_hex, {
    __argnames__ : {value: ["x"]}
});

function RS_enumerate(iterable) {
    var ans, iterator;
    ans = {"_i":-1};
    ans[RS_iterator_symbol] = function () {
        return this;
    };
    if (RS_arraylike(iterable)) {
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':[this._i, iterable[this._i]]};
            }
            return {'done':true};
        };
        return ans;
    }
    if (typeof iterable[RS_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
        ans["_iterator"] = iterator;
        ans["next"] = function () {
            var r;
            r = this._iterator.next();
            if (r.done) {
                return {'done':true};
            }
            this._i += 1;
            return {'done':false, 'value':[this._i, r.value]};
        };
        return ans;
    }
    return RS_enumerate(Object.keys(iterable));
};
Object.defineProperties(RS_enumerate, {
    __argnames__ : {value: ["iterable"]}
});

function RS_reversed(iterable) {
    var ans;
    if (RS_arraylike(iterable)) {
        ans = {"_i": iterable.length};
        ans["next"] = function () {
            this._i -= 1;
            if (this._i > -1) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        return ans;
    }
    throw new TypeError("reversed() can only be called on arrays or strings");
};
Object.defineProperties(RS_reversed, {
    __argnames__ : {value: ["iterable"]}
});

function RS_iter(iterable) {
    var ans;
    if (typeof iterable[RS_iterator_symbol] === "function") {
        return (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
    }
    if (RS_arraylike(iterable)) {
        ans = {"_i":-1};
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        return ans;
    }
    return RS_iter(Object.keys(iterable));
};
Object.defineProperties(RS_iter, {
    __argnames__ : {value: ["iterable"]}
});

function RS_range_next(step, length) {
    var RS_unpack;
    this._i += step;
    this._idx += 1;
    if (this._idx >= length) {
        RS_unpack = [this.__i, -1];
        this._i = RS_unpack[0];
        this._idx = RS_unpack[1];
        return {'done':true};
    }
    return {'done':false, 'value':this._i};
};
Object.defineProperties(RS_range_next, {
    __argnames__ : {value: ["step", "length"]}
});

function RS_range(start, stop, step) {
    var length, ans;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    ans = {start:start, step:step, stop:stop};
    ans[RS_iterator_symbol] = function () {
        var it;
        it = {"_i": start - step, "_idx": -1};
        it.next = RS_range_next.bind(it, step, length);
        it[RS_iterator_symbol] = function () {
            return this;
        };
        return it;
    };
    ans.count = (function() {
        var RS_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.count(val);
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return RS_anonfunc;
    })();
    ans.index = (function() {
        var RS_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.index(val);
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return RS_anonfunc;
    })();
    if (typeof Proxy === "function") {
        ans = new Proxy(ans, (function(){
            var RS_d = {};
            RS_d["get"] = (function() {
                var RS_anonfunc = function (obj, prop) {
                    var iprop;
                    if (typeof prop === "string") {
                        iprop = parseInt(prop);
                        if (!isNaN(iprop)) {
                            prop = iprop;
                        }
                    }
                    if (typeof prop === "number") {
                        if (!obj._cached) {
                            obj._cached = list(obj);
                        }
                        return (RS_expr_temp = obj._cached)[(typeof prop === "number" && prop < 0) ? RS_expr_temp.length + prop : prop];
                    }
                    return obj[(typeof prop === "number" && prop < 0) ? obj.length + prop : prop];
                };
                Object.defineProperties(RS_anonfunc, {
                    __argnames__ : {value: ["obj", "prop"]}
                });
                return RS_anonfunc;
            })();
            return RS_d;
        }).call(this));
    }
    return ans;
};
Object.defineProperties(RS_range, {
    __argnames__ : {value: ["start", "stop", "step"]}
});

function RS_getattr(obj, name, defval) {
    var ret;
    try {
        ret = obj[(typeof name === "number" && name < 0) ? obj.length + name : name];
    } catch (RS_Exception) {
        RS_last_exception = RS_Exception;
        if (RS_Exception instanceof TypeError) {
            if (defval === undefined) {
                throw new AttributeError("The attribute " + name + " is not present");
            }
            return defval;
        } else {
            throw RS_Exception;
        }
    }
    if (ret === undefined && !(name in obj)) {
        if (defval === undefined) {
            throw new AttributeError("The attribute " + name + " is not present");
        }
        ret = defval;
    }
    return ret;
};
Object.defineProperties(RS_getattr, {
    __argnames__ : {value: ["obj", "name", "defval"]}
});

function RS_setattr(obj, name, value) {
    obj[(typeof name === "number" && name < 0) ? obj.length + name : name] = value;
};
Object.defineProperties(RS_setattr, {
    __argnames__ : {value: ["obj", "name", "value"]}
});

function RS_hasattr(obj, name) {
    return name in obj;
};
Object.defineProperties(RS_hasattr, {
    __argnames__ : {value: ["obj", "name"]}
});

RS_len = function () {
    function len(obj) {
        if (RS_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        if (obj instanceof Set || obj instanceof Map) {
            return obj.size;
        }
        return Object.keys(obj).length;
    };
    Object.defineProperties(len, {
        __argnames__ : {value: ["obj"]}
    });

    function len5(obj) {
        if (RS_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        return Object.keys(obj).length;
    };
    Object.defineProperties(len5, {
        __argnames__ : {value: ["obj"]}
    });

    return (typeof Set === "function" && typeof Map === "function") ? len : len5;
}();
function RS_get_module(name) {
    return RS_modules[(typeof name === "number" && name < 0) ? RS_modules.length + name : name];
};
Object.defineProperties(RS_get_module, {
    __argnames__ : {value: ["name"]}
});

function RS_pow(x, y, z) {
    var ans;
    ans = Math.pow(x, y);
    if (z !== undefined) {
        ans %= z;
    }
    return ans;
};
Object.defineProperties(RS_pow, {
    __argnames__ : {value: ["x", "y", "z"]}
});

function RS_type(x) {
    return x.constructor;
};
Object.defineProperties(RS_type, {
    __argnames__ : {value: ["x"]}
});

function RS_divmod(x, y) {
    var d;
    if (y === 0) {
        throw new ZeroDivisionError("integer division or modulo by zero");
    }
    d = Math.floor(x / y);
    return [d, x - d * y];
};
Object.defineProperties(RS_divmod, {
    __argnames__ : {value: ["x", "y"]}
});

function RS_max() {
    var kwargs = arguments[arguments.length-1];
    if (kwargs === null || typeof kwargs !== "object" || kwargs [RS_kwargs_symbol] !== true) kwargs = {};
    var args = Array.prototype.slice.call(arguments, 0);
    if (kwargs !== null && typeof kwargs === "object" && kwargs [RS_kwargs_symbol] === true) args.pop();
    var args, x;
    if (args.length === 0) {
        if (kwargs.defval !== undefined) {
            return kwargs.defval;
        }
        throw new TypeError("expected at least one argument");
    }
    if (args.length === 1) {
        args = args[0];
    }
    if (kwargs.key) {
        args = (function() {
            var RS_Iter = RS_Iterable(args), RS_Result = [], x;
            for (var RS_Index = 0; RS_Index < RS_Iter.length; RS_Index++) {
                x = RS_Iter[RS_Index];
                RS_Result.push(kwargs.key(x));
            }
            RS_Result = RS_list_constructor(RS_Result);
            return RS_Result;
        })();
    }
    if (!Array.isArray(args)) {
        args = list(args);
    }
    if (args.length) {
        return this.apply(null, args);
    }
    if (kwargs.defval !== undefined) {
        return kwargs.defval;
    }
    throw new TypeError("expected at least one argument");
};
Object.defineProperties(RS_max, {
    __handles_kwarg_interpolation__ : {value: true}
});

var abs = Math.abs, max = RS_max.bind(Math.max), min = RS_max.bind(Math.min), bool = RS_bool, type = RS_type;
var float = RS_float, int = RS_int, arraylike = RS_arraylike_creator(), RS_arraylike = arraylike;
var print = RS_print, id = RS_id, get_module = RS_get_module, pow = RS_pow, divmod = RS_divmod;
var dir = RS_dir, ord = RS_ord, chr = RS_chr, bin = RS_bin, hex = RS_hex, callable = RS_callable;
var enumerate = RS_enumerate, iter = RS_iter, reversed = RS_reversed, len = RS_len;
var range = RS_range, getattr = RS_getattr, setattr = RS_setattr, hasattr = RS_hasattr;function RS_equals(a, b) {
    var RS_unpack, akeys, bkeys, key;
    if (a === b) {
        return true;
    }
    if (a && typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    if (b && typeof b.__eq__ === "function") {
        return b.__eq__(a);
    }
    if (RS_arraylike(a) && RS_arraylike(b)) {
        if ((a.length !== b.length && (typeof a.length !== "object" || RS_not_equals(a.length, b.length)))) {
            return false;
        }
        for (var i=0; i < a.length; i++) {
            if (!((a[(typeof i === "number" && i < 0) ? a.length + i : i] === b[(typeof i === "number" && i < 0) ? b.length + i : i] || typeof a[(typeof i === "number" && i < 0) ? a.length + i : i] === "object" && RS_equals(a[(typeof i === "number" && i < 0) ? a.length + i : i], b[(typeof i === "number" && i < 0) ? b.length + i : i])))) {
                return false;
            }
        }
        return true;
    }
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null && (a.constructor === Object && b.constructor === Object || Object.getPrototypeOf(a) === null && Object.getPrototypeOf(b) === null)) {
        RS_unpack = [Object.keys(a), Object.keys(b)];
        akeys = RS_unpack[0];
        bkeys = RS_unpack[1];
        if (akeys.length !== bkeys.length) {
            return false;
        }
        for (var j=0; j < akeys.length; j++) {
            key = akeys[(typeof j === "number" && j < 0) ? akeys.length + j : j];
            if (!((a[(typeof key === "number" && key < 0) ? a.length + key : key] === b[(typeof key === "number" && key < 0) ? b.length + key : key] || typeof a[(typeof key === "number" && key < 0) ? a.length + key : key] === "object" && RS_equals(a[(typeof key === "number" && key < 0) ? a.length + key : key], b[(typeof key === "number" && key < 0) ? b.length + key : key])))) {
                return false;
            }
        }
        return true;
    }
    return false;
};
Object.defineProperties(RS_equals, {
    __argnames__ : {value: ["a", "b"]}
});

function RS_not_equals(a, b) {
    if (a === b) {
        return false;
    }
    if (a && typeof a.__ne__ === "function") {
        return a.__ne__(b);
    }
    if (b && typeof b.__ne__ === "function") {
        return b.__ne__(a);
    }
    return !RS_equals(a, b);
};
Object.defineProperties(RS_not_equals, {
    __argnames__ : {value: ["a", "b"]}
});

var equals = RS_equals;
function RS_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            (RS_expr_temp = this)[RS_bound_index(start + i, RS_expr_temp)] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
};
Object.defineProperties(RS_list_extend, {
    __argnames__ : {value: ["iterable"]}
});

function RS_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === val || typeof (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === "object" && RS_equals((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i], val))) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
};
Object.defineProperties(RS_list_index, {
    __argnames__ : {value: ["val", "start", "stop"]}
});

function RS_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
};
Object.defineProperties(RS_list_pop, {
    __argnames__ : {value: ["index"]}
});

function RS_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
};
Object.defineProperties(RS_list_remove, {
    __argnames__ : {value: ["value"]}
});

function RS_list_to_string() {
    return "[" + this.join(", ") + "]";
};

function RS_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] = (RS_expr_temp = this)[RS_bound_index(i - 1, RS_expr_temp)];
    }
    (RS_expr_temp = this)[(typeof index === "number" && index < 0) ? RS_expr_temp.length + index : index] = val;
};
Object.defineProperties(RS_list_insert, {
    __argnames__ : {value: ["index", "val"]}
});

function RS_list_copy() {
    return RS_list_constructor(this);
};

function RS_list_clear() {
    this.length = 0;
};

function RS_list_as_array() {
    return Array.prototype.slice.call(this);
};

function RS_list_count(value) {
    return this.reduce((function() {
        var RS_anonfunc = function (n, val) {
            return n + (val === value);
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["n", "val"]}
        });
        return RS_anonfunc;
    })(), 0);
};
Object.defineProperties(RS_list_count, {
    __argnames__ : {value: ["value"]}
});

function RS_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
};
Object.defineProperties(RS_list_sort_key, {
    __argnames__ : {value: ["value"]}
});

function RS_list_sort_cmp(a, b, ap, bp) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return ap - bp;
};
Object.defineProperties(RS_list_sort_cmp, {
    __argnames__ : {value: ["a", "b", "ap", "bp"]}
});

function RS_list_sort() {
    var key = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true)) ? RS_list_sort.__defaults__.key : arguments[0];
    var reverse = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true)) ? RS_list_sort.__defaults__.reverse : arguments[1];
    var RS_kwargs_obj = arguments[arguments.length-1];
    if (RS_kwargs_obj === null || typeof RS_kwargs_obj !== "object" || RS_kwargs_obj [RS_kwargs_symbol] !== true) RS_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(RS_kwargs_obj, "key")){
        key = RS_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(RS_kwargs_obj, "reverse")){
        reverse = RS_kwargs_obj.reverse;
    }
    var mult, keymap, posmap, k;
    key = key || RS_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    posmap = dict();
    for (var i=0; i < this.length; i++) {
        k = (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i];
        keymap.set(k, key(k));
        posmap.set(k, i);
    }
    this.sort((function() {
        var RS_anonfunc = function (a, b) {
            return mult * RS_list_sort_cmp(keymap.get(a), keymap.get(b), posmap.get(a), posmap.get(b));
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return RS_anonfunc;
    })());
};
Object.defineProperties(RS_list_sort, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["key", "reverse"]}
});

function RS_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    RS_list_decorate(ans);
    return ans;
};

function RS_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    RS_list_decorate(ans);
    return ans;
};

function RS_list_iterator(value) {
    var self;
    self = this;
    return (function(){
        var RS_d = {};
        RS_d["_i"] = -1;
        RS_d["_list"] = self;
        RS_d["next"] = function () {
            this._i += 1;
            if (this._i >= this._list.length) {
                return (function(){
                    var RS_d = {};
                    RS_d["done"] = true;
                    return RS_d;
                }).call(this);
            }
            return (function(){
                var RS_d = {};
                RS_d["done"] = false;
                RS_d["value"] = (RS_expr_temp = this._list)[RS_bound_index(this._i, RS_expr_temp)];
                return RS_d;
            }).call(this);
        };
        return RS_d;
    }).call(this);
};
Object.defineProperties(RS_list_iterator, {
    __argnames__ : {value: ["value"]}
});

function RS_list_len() {
    return this.length;
};

function RS_list_contains(val) {
    for (var i = 0; i < this.length; i++) {
        if (((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === val || typeof (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === "object" && RS_equals((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i], val))) {
            return true;
        }
    }
    return false;
};
Object.defineProperties(RS_list_contains, {
    __argnames__ : {value: ["val"]}
});

function RS_list_eq(other) {
    if (!RS_arraylike(other)) {
        return false;
    }
    if ((this.length !== other.length && (typeof this.length !== "object" || RS_not_equals(this.length, other.length)))) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!(((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === other[(typeof i === "number" && i < 0) ? other.length + i : i] || typeof (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] === "object" && RS_equals((RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i], other[(typeof i === "number" && i < 0) ? other.length + i : i])))) {
            return false;
        }
    }
    return true;
};
Object.defineProperties(RS_list_eq, {
    __argnames__ : {value: ["other"]}
});

function RS_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = RS_list_to_string;
    ans.inspect = RS_list_to_string;
    ans.extend = RS_list_extend;
    ans.index = RS_list_index;
    ans.pypop = RS_list_pop;
    ans.remove = RS_list_remove;
    ans.insert = RS_list_insert;
    ans.copy = RS_list_copy;
    ans.clear = RS_list_clear;
    ans.count = RS_list_count;
    ans.concat = RS_list_concat;
    ans.pysort = RS_list_sort;
    ans.slice = RS_list_slice;
    ans.as_array = RS_list_as_array;
    ans.__len__ = RS_list_len;
    ans.__contains__ = RS_list_contains;
    ans.__eq__ = RS_list_eq;
    ans.constructor = RS_list_constructor;
    if (typeof ans[RS_iterator_symbol] !== "function") {
        ans[RS_iterator_symbol] = RS_list_iterator;
    }
    return ans;
};
Object.defineProperties(RS_list_decorate, {
    __argnames__ : {value: ["ans"]}
});

function RS_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (RS_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else if (typeof iterable[RS_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
        ans = RS_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return RS_list_decorate(ans);
};
Object.defineProperties(RS_list_constructor, {
    __argnames__ : {value: ["iterable"]}
});

RS_list_constructor.__name__ = "list";
var list = RS_list_constructor, list_wrap = RS_list_decorate;
function sorted() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true) ? undefined : arguments[0];
    var key = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true)) ? sorted.__defaults__.key : arguments[1];
    var reverse = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true)) ? sorted.__defaults__.reverse : arguments[2];
    var RS_kwargs_obj = arguments[arguments.length-1];
    if (RS_kwargs_obj === null || typeof RS_kwargs_obj !== "object" || RS_kwargs_obj [RS_kwargs_symbol] !== true) RS_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(RS_kwargs_obj, "key")){
        key = RS_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(RS_kwargs_obj, "reverse")){
        reverse = RS_kwargs_obj.reverse;
    }
    var ans;
    ans = RS_list_constructor(iterable);
    ans.pysort(key, reverse);
    return ans;
};
Object.defineProperties(sorted, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable", "key", "reverse"]}
});

var RS_global_object_id = 0, RS_set_implementation;
function RS_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x.RS_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++RS_global_object_id);
        Object.defineProperty(x, "RS_hash_key_prop", (function(){
            var RS_d = {};
            RS_d["value"] = ans;
            return RS_d;
        }).call(this));
    }
    return ans;
};
Object.defineProperties(RS_set_keyfor, {
    __argnames__ : {value: ["x"]}
});

function RS_set_polyfill() {
    this._store = {};
    this.size = 0;
};

RS_set_polyfill.prototype.add = (function() {
    var RS_anonfunc = function (x) {
        var key;
        key = RS_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
            (RS_expr_temp = this._store)[(typeof key === "number" && key < 0) ? RS_expr_temp.length + key : key] = x;
        }
        return this;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set_polyfill.prototype.clear = (function() {
    var RS_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set_polyfill.prototype.delete = (function() {
    var RS_anonfunc = function (x) {
        var key;
        key = RS_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set_polyfill.prototype.has = (function() {
    var RS_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, RS_set_keyfor(x));
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set_polyfill.prototype.values = (function() {
    var RS_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    RS_set_implementation = RS_set_polyfill;
} else {
    RS_set_implementation = Set;
}
function RS_set(iterable) {
    var ans, s, iterator, result, keys;
    if (this instanceof RS_set) {
        this.jsset = new RS_set_implementation;
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (RS_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i]);
            }
        } else if (typeof iterable[RS_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var j=0; j < keys.length; j++) {
                s.add(keys[(typeof j === "number" && j < 0) ? keys.length + j : j]);
            }
        }
        return ans;
    } else {
        return new RS_set(iterable);
    }
};
Object.defineProperties(RS_set, {
    __argnames__ : {value: ["iterable"]}
});

RS_set.prototype.__name__ = "set";
Object.defineProperties(RS_set.prototype, (function(){
    var RS_d = {};
    RS_d["length"] = (function(){
        var RS_d = {};
        RS_d["get"] = function () {
            return this.jsset.size;
        };
        return RS_d;
    }).call(this);
    RS_d["size"] = (function(){
        var RS_d = {};
        RS_d["get"] = function () {
            return this.jsset.size;
        };
        return RS_d;
    }).call(this);
    return RS_d;
}).call(this));
RS_set.prototype.__len__ = function () {
    return this.jsset.size;
};
RS_set.prototype.has = RS_set.prototype.__contains__ = (function() {
    var RS_anonfunc = function (x) {
        return this.jsset.has(x);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.add = (function() {
    var RS_anonfunc = function (x) {
        this.jsset.add(x);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.clear = function () {
    this.jsset.clear();
};
RS_set.prototype.copy = function () {
    return RS_set(this);
};
RS_set.prototype.discard = (function() {
    var RS_anonfunc = function (x) {
        this.jsset.delete(x);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype[RS_iterator_symbol] = function () {
    return this.jsset.values();
};
RS_set.prototype.difference = function () {
    var ans, s, iterator, r, x, has;
    ans = new RS_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
RS_set.prototype.difference_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
RS_set.prototype.intersection = function () {
    var ans, s, iterator, r, x, has;
    ans = new RS_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
RS_set.prototype.intersection_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
RS_set.prototype.isdisjoint = (function() {
    var RS_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.issubset = (function() {
    var RS_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.issuperset = (function() {
    var RS_anonfunc = function (other) {
        var s, iterator, r, x;
        s = this.jsset;
        iterator = other.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!s.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.pop = function () {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
RS_set.prototype.remove = (function() {
    var RS_anonfunc = function (x) {
        if (!this.jsset.delete(x)) {
            throw new KeyError(x.toString());
        }
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.symmetric_difference = (function() {
    var RS_anonfunc = function (other) {
        return this.union(other).difference(this.intersection(other));
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.symmetric_difference_update = (function() {
    var RS_anonfunc = function (other) {
        var common;
        common = this.intersection(other);
        this.update(other);
        this.difference_update(common);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_set.prototype.union = function () {
    var ans;
    ans = RS_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
RS_set.prototype.update = function () {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i][RS_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
RS_set.prototype.toString = RS_set.prototype.inspect = function () {
    return "{" + list(this).join(", ") + "}";
};
RS_set.prototype.__eq__ = (function() {
    var RS_anonfunc = function (other) {
        var iterator, r;
        if (!other instanceof this.constructor) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other[RS_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            if (!this.has(r.value)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
function RS_set_wrap(x) {
    var ans;
    ans = new RS_set;
    ans.jsset = x;
    return ans;
};
Object.defineProperties(RS_set_wrap, {
    __argnames__ : {value: ["x"]}
});

var set = RS_set, set_wrap = RS_set_wrap;
var RS_dict_implementation;
function RS_dict_polyfill() {
    this._store = {};
    this.size = 0;
};

RS_dict_polyfill.prototype.set = (function() {
    var RS_anonfunc = function (x, value) {
        var key;
        key = RS_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
        }
        (RS_expr_temp = this._store)[(typeof key === "number" && key < 0) ? RS_expr_temp.length + key : key] = [x, value];
        return this;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x", "value"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.clear = (function() {
    var RS_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.delete = (function() {
    var RS_anonfunc = function (x) {
        var key;
        key = RS_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.has = (function() {
    var RS_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, RS_set_keyfor(x));
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.get = (function() {
    var RS_anonfunc = function (x) {
        try {
            return (RS_expr_temp = this._store)[RS_bound_index(RS_set_keyfor(x), RS_expr_temp)][1];
        } catch (RS_Exception) {
            RS_last_exception = RS_Exception;
            if (RS_Exception instanceof TypeError) {
                return undefined;
            } else {
                throw RS_Exception;
            }
        }
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.values = (function() {
    var RS_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][1]};
        };
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.keys = (function() {
    var RS_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][0]};
        };
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict_polyfill.prototype.entries = (function() {
    var RS_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[RS_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    RS_dict_implementation = RS_dict_polyfill;
} else {
    RS_dict_implementation = Map;
}
function RS_dict() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true) ? undefined : arguments[0];
    var kw = arguments[arguments.length-1];
    if (kw === null || typeof kw !== "object" || kw [RS_kwargs_symbol] !== true) kw = {};
    if (this instanceof RS_dict) {
        this.jsmap = new RS_dict_implementation;
        if (iterable !== undefined) {
            this.update(iterable);
        }
        this.update(kw);
        return this;
    } else {
        return RS_interpolate_kwargs_constructor.call(Object.create(RS_dict.prototype), false, RS_dict, [iterable].concat([RS_desugar_kwargs(kw)]));
    }
};
Object.defineProperties(RS_dict, {
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable"]}
});

RS_dict.prototype.__name__ = "dict";
Object.defineProperties(RS_dict.prototype, (function(){
    var RS_d = {};
    RS_d["length"] = (function(){
        var RS_d = {};
        RS_d["get"] = function () {
            return this.jsmap.size;
        };
        return RS_d;
    }).call(this);
    RS_d["size"] = (function(){
        var RS_d = {};
        RS_d["get"] = function () {
            return this.jsmap.size;
        };
        return RS_d;
    }).call(this);
    return RS_d;
}).call(this));
RS_dict.prototype.__len__ = function () {
    return this.jsmap.size;
};
RS_dict.prototype.has = RS_dict.prototype.__contains__ = (function() {
    var RS_anonfunc = function (x) {
        return this.jsmap.has(x);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.set = RS_dict.prototype.__setitem__ = (function() {
    var RS_anonfunc = function (key, value) {
        this.jsmap.set(key, value);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key", "value"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.__delitem__ = (function() {
    var RS_anonfunc = function (key) {
        this.jsmap.delete(key);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.clear = function () {
    this.jsmap.clear();
};
RS_dict.prototype.copy = function () {
    return RS_dict(this);
};
RS_dict.prototype.keys = function () {
    return this.jsmap.keys();
};
RS_dict.prototype.values = function () {
    return this.jsmap.values();
};
RS_dict.prototype.items = RS_dict.prototype.entries = function () {
    return this.jsmap.entries();
};
RS_dict.prototype[RS_iterator_symbol] = function () {
    return this.jsmap.keys();
};
RS_dict.prototype.__getitem__ = (function() {
    var RS_anonfunc = function (key) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            throw new KeyError(key + "");
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.get = (function() {
    var RS_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            return (defval === undefined) ? null : defval;
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.set_default = (function() {
    var RS_anonfunc = function (key, defval) {
        var j;
        j = this.jsmap;
        if (!j.has(key)) {
            j.set(key, defval);
            return defval;
        }
        return j.get(key);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return RS_anonfunc;
})();
RS_dict.fromkeys = RS_dict.prototype.fromkeys = (function() {
    var RS_anonfunc = function () {
        var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true) ? undefined : arguments[0];
        var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [RS_kwargs_symbol] === true)) ? RS_anonfunc.__defaults__.value : arguments[1];
        var RS_kwargs_obj = arguments[arguments.length-1];
        if (RS_kwargs_obj === null || typeof RS_kwargs_obj !== "object" || RS_kwargs_obj [RS_kwargs_symbol] !== true) RS_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(RS_kwargs_obj, "value")){
            value = RS_kwargs_obj.value;
        }
        var ans, iterator, r;
        ans = RS_dict();
        iterator = iter(iterable);
        r = iterator.next();
        while (!r.done) {
            ans.set(r.value, value);
            r = iterator.next();
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __defaults__ : {value: {value:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["iterable", "value"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.pop = (function() {
    var RS_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            if (defval === undefined) {
                throw new KeyError(key);
            }
            return defval;
        }
        this.jsmap.delete(key);
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.popitem = function () {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
RS_dict.prototype.update = function () {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][0], iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][1]);
        }
    } else if (iterable instanceof RS_dict) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && iterable instanceof Map) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[RS_iterator_symbol] === "function") {
        iterator = iterable[RS_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var j=0; j < keys.length; j++) {
            if (keys[(typeof j === "number" && j < 0) ? keys.length + j : j] !== RS_iterator_symbol) {
                m.set(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable[RS_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable)]);
            }
        }
    }
    if (arguments.length > 1) {
        RS_dict.prototype.update.call(this, arguments[1]);
    }
};
RS_dict.prototype.toString = RS_dict.prototype.inspect = RS_dict.prototype.__str__ = RS_dict.prototype.__repr__ = function () {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(RS_repr(r.value[0]) + ": " + RS_repr(r.value[1]));
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
RS_dict.prototype.__eq__ = (function() {
    var RS_anonfunc = function (other) {
        var iterator, r, x;
        if (!(other instanceof this.constructor)) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other.items();
        r = iterator.next();
        while (!r.done) {
            x = this.jsmap.get(r.value[0]);
            if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
RS_dict.prototype.as_object = (function() {
    var RS_anonfunc = function (other) {
        var ans, iterator, r;
        ans = {};
        iterator = this.jsmap.entries();
        r = iterator.next();
        while (!r.done) {
            ans[RS_bound_index(r.value[0], ans)] = r.value[1];
            r = iterator.next();
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return RS_anonfunc;
})();
function RS_dict_wrap(x) {
    var ans;
    ans = new RS_dict;
    ans.jsmap = x;
    return ans;
};
Object.defineProperties(RS_dict_wrap, {
    __argnames__ : {value: ["x"]}
});

var dict = RS_dict, dict_wrap = RS_dict_wrap;var NameError;
NameError = ReferenceError;
function Exception() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    Exception.prototype.__init__.apply(this, arguments);
}
RS_extends(Exception, Error);
Exception.prototype.__init__ = function __init__(message) {
    var self = this;
    self.message = message;
    self.stack = (new Error).stack;
    self.name = self.constructor.name;
};
Object.defineProperties(Exception.prototype.__init__, {
    __argnames__ : {value: ["message"]}
});
Exception.__argnames__ = Exception.prototype.__init__.__argnames__;
Exception.__handles_kwarg_interpolation__ = Exception.prototype.__init__.__handles_kwarg_interpolation__;
Exception.prototype.__repr__ = function __repr__() {
    var self = this;
    return self.name + ": " + self.message;
};
Object.defineProperties(Exception.prototype.__repr__, {
    __argnames__ : {value: []}
});
Exception.prototype.__str__ = function __str__ () {
    if(Error.prototype.__str__) return Error.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(Exception.prototype, "__bases__", {value: [Error]});

function AttributeError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    AttributeError.prototype.__init__.apply(this, arguments);
}
RS_extends(AttributeError, Exception);
AttributeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AttributeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
AttributeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AttributeError.prototype, "__bases__", {value: [Exception]});


function IndexError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    IndexError.prototype.__init__.apply(this, arguments);
}
RS_extends(IndexError, Exception);
IndexError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
IndexError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
IndexError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(IndexError.prototype, "__bases__", {value: [Exception]});


function KeyError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    KeyError.prototype.__init__.apply(this, arguments);
}
RS_extends(KeyError, Exception);
KeyError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
KeyError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
KeyError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(KeyError.prototype, "__bases__", {value: [Exception]});


function ValueError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    ValueError.prototype.__init__.apply(this, arguments);
}
RS_extends(ValueError, Exception);
ValueError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ValueError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
ValueError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ValueError.prototype, "__bases__", {value: [Exception]});


function UnicodeDecodeError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    UnicodeDecodeError.prototype.__init__.apply(this, arguments);
}
RS_extends(UnicodeDecodeError, Exception);
UnicodeDecodeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
UnicodeDecodeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
UnicodeDecodeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(UnicodeDecodeError.prototype, "__bases__", {value: [Exception]});


function AssertionError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    AssertionError.prototype.__init__.apply(this, arguments);
}
RS_extends(AssertionError, Exception);
AssertionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AssertionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
AssertionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AssertionError.prototype, "__bases__", {value: [Exception]});


function ZeroDivisionError() {
    if (this.RS_object_id === undefined) Object.defineProperty(this, "RS_object_id", {"value":++RS_object_counter});
    ZeroDivisionError.prototype.__init__.apply(this, arguments);
}
RS_extends(ZeroDivisionError, Exception);
ZeroDivisionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ZeroDivisionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.RS_object_id + ">";
};
ZeroDivisionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ZeroDivisionError.prototype, "__bases__", {value: [Exception]});

var RS_in, RS_desugar_kwargs, RS_exists;
function RS_eslice(arr, step, start, end) {
    var is_string;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr = arr.slice().reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter((function() {
        var RS_anonfunc = function (e, i) {
            return i % step === 0;
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["e", "i"]}
        });
        return RS_anonfunc;
    })());
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
Object.defineProperties(RS_eslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function RS_delslice(arr, step, start, end) {
    var is_string, RS_unpack, indices;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        if (typeof start === "undefined") {
            start = arr.length;
        }
        if (typeof end === "undefined") {
            end = 0;
        }
        RS_unpack = [end, start, -step];
        start = RS_unpack[0];
        end = RS_unpack[1];
        step = RS_unpack[2];
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    if (step === 1) {
        arr.splice(start, end - start);
    } else {
        if (end > start) {
            indices = [];
            for (var i = start; i < end; i += step) {
                indices.push(i);
            }
            for (var i = indices.length - 1; i >= 0; i--) {
                arr.splice(indices[(typeof i === "number" && i < 0) ? indices.length + i : i], 1);
            }
        }
    }
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
Object.defineProperties(RS_delslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function RS_flatten(arr) {
    var ans, value;
    ans = RS_list_decorate([]);
    for (var i=0; i < arr.length; i++) {
        value = arr[(typeof i === "number" && i < 0) ? arr.length + i : i];
        if (Array.isArray(value)) {
            ans = ans.concat(RS_flatten(value));
        } else {
            ans.push(value);
        }
    }
    return ans;
};
Object.defineProperties(RS_flatten, {
    __argnames__ : {value: ["arr"]}
});

function RS_unpack_asarray(num, iterable) {
    var ans, iterator, result;
    if (RS_arraylike(iterable)) {
        return iterable;
    }
    ans = [];
    if (typeof iterable[RS_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
        result = iterator.next();
        while (!result.done && ans.length < num) {
            ans.push(result.value);
            result = iterator.next();
        }
    }
    return ans;
};
Object.defineProperties(RS_unpack_asarray, {
    __argnames__ : {value: ["num", "iterable"]}
});

function RS_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};
Object.defineProperties(RS_extends, {
    __argnames__ : {value: ["child", "parent"]}
});

RS_in = function () {
    if (typeof Map === "function" && typeof Set === "function") {
        return (function() {
            var RS_anonfunc = function (val, arr) {
                if (typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                if (arr instanceof Map || arr instanceof Set) {
                    return arr.has(val);
                }
                if (RS_arraylike(arr)) {
                    return RS_list_contains.call(arr, val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
            Object.defineProperties(RS_anonfunc, {
                __argnames__ : {value: ["val", "arr"]}
            });
            return RS_anonfunc;
        })();
    }
    return (function() {
        var RS_anonfunc = function (val, arr) {
            if (typeof arr === "string") {
                return arr.indexOf(val) !== -1;
            }
            if (typeof arr.__contains__ === "function") {
                return arr.__contains__(val);
            }
            if (RS_arraylike(arr)) {
                return RS_list_contains.call(arr, val);
            }
            return Object.prototype.hasOwnProperty.call(arr, val);
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["val", "arr"]}
        });
        return RS_anonfunc;
    })();
}();
function RS_Iterable(iterable) {
    var iterator, ans, result;
    if (RS_arraylike(iterable)) {
        return iterable;
    }
    if (typeof iterable[RS_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[RS_iterator_symbol]();
        ans = RS_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
        return ans;
    }
    return Object.keys(iterable);
};
Object.defineProperties(RS_Iterable, {
    __argnames__ : {value: ["iterable"]}
});

RS_desugar_kwargs = function () {
    if (typeof Object.assign === "function") {
        return function () {
            var ans;
            ans = Object.create(null);
            ans[RS_kwargs_symbol] = true;
            for (var i = 0; i < arguments.length; i++) {
                Object.assign(ans, arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            }
            return ans;
        };
    }
    return function () {
        var ans, keys;
        ans = Object.create(null);
        ans[RS_kwargs_symbol] = true;
        for (var i = 0; i < arguments.length; i++) {
            keys = Object.keys(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            for (var j = 0; j < keys.length; j++) {
                ans[RS_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ans)] = (RS_expr_temp = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i])[RS_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], RS_expr_temp)];
            }
        }
        return ans;
    };
}();
function RS_interpolate_kwargs(f, supplied_args) {
    var has_prop, kwobj, args, prop;
    if (!f.__argnames__) {
        return f.apply(this, supplied_args);
    }
    has_prop = Object.prototype.hasOwnProperty;
    kwobj = supplied_args.pop();
    if (f.__handles_kwarg_interpolation__) {
        args = new Array(Math.max(supplied_args.length, f.__argnames__.length) + 1);
        args[args.length-1] = kwobj;
        for (var i = 0; i < args.length - 1; i++) {
            if (i < f.__argnames__.length) {
                prop = (RS_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i];
                if (has_prop.call(kwobj, prop)) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
                    delete kwobj[prop];
                } else if (i < supplied_args.length) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
                }
            } else {
                args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
            }
        }
        return f.apply(this, args);
    }
    for (var i = 0; i < f.__argnames__.length; i++) {
        prop = (RS_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i];
        if (has_prop.call(kwobj, prop)) {
            supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
        }
    }
    return f.apply(this, supplied_args);
};
Object.defineProperties(RS_interpolate_kwargs, {
    __argnames__ : {value: ["f", "supplied_args"]}
});

function RS_interpolate_kwargs_constructor(apply, f, supplied_args) {
    if (apply) {
        f.apply(this, supplied_args);
    } else {
        RS_interpolate_kwargs.call(this, f, supplied_args);
    }
    return this;
};
Object.defineProperties(RS_interpolate_kwargs_constructor, {
    __argnames__ : {value: ["apply", "f", "supplied_args"]}
});

function RS_getitem(obj, key) {
    if (obj.__getitem__) {
        return obj.__getitem__(key);
    }
    if (typeof key === "number" && key < 0) {
        key += obj.length;
    }
    return obj[(typeof key === "number" && key < 0) ? obj.length + key : key];
};
Object.defineProperties(RS_getitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function RS_setitem(obj, key, val) {
    if (obj.__setitem__) {
        obj.__setitem__(key, val);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        obj[(typeof key === "number" && key < 0) ? obj.length + key : key] = val;
    }
};
Object.defineProperties(RS_setitem, {
    __argnames__ : {value: ["obj", "key", "val"]}
});

function RS_delitem(obj, key) {
    if (obj.__delitem__) {
        obj.__delitem__(key);
    } else if (typeof obj.splice === "function") {
        obj.splice(key, 1);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        delete obj[key];
    }
};
Object.defineProperties(RS_delitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function RS_bound_index(idx, arr) {
    if (typeof idx === "number" && idx < 0) {
        idx += arr.length;
    }
    return idx;
};
Object.defineProperties(RS_bound_index, {
    __argnames__ : {value: ["idx", "arr"]}
});

function RS_splice(arr, val, start, end) {
    start = start || 0;
    if (start < 0) {
        start += arr.length;
    }
    if (end === undefined) {
        end = arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    Array.prototype.splice.apply(arr, [start, end - start].concat(val));
};
Object.defineProperties(RS_splice, {
    __argnames__ : {value: ["arr", "val", "start", "end"]}
});

RS_exists = (function(){
    var RS_d = {};
    RS_d["n"] = (function() {
        var RS_anonfunc = function (expr) {
            return expr !== undefined && expr !== null;
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return RS_anonfunc;
    })();
    RS_d["d"] = (function() {
        var RS_anonfunc = function (expr) {
            if (expr === undefined || expr === null) {
                return Object.create(null);
            }
            return expr;
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return RS_anonfunc;
    })();
    RS_d["c"] = (function() {
        var RS_anonfunc = function (expr) {
            if (typeof expr === "function") {
                return expr;
            }
            return function () {
                return undefined;
            };
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return RS_anonfunc;
    })();
    RS_d["g"] = (function() {
        var RS_anonfunc = function (expr) {
            if (expr === undefined || expr === null || typeof expr.__getitem__ !== "function") {
                return (function(){
                    var RS_d = {};
                    RS_d["__getitem__"] = function () {
                        return undefined;
                    };
                    return RS_d;
                }).call(this);
            }
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return RS_anonfunc;
    })();
    RS_d["e"] = (function() {
        var RS_anonfunc = function (expr, alt) {
            return (expr === undefined || expr === null) ? alt : expr;
        };
        Object.defineProperties(RS_anonfunc, {
            __argnames__ : {value: ["expr", "alt"]}
        });
        return RS_anonfunc;
    })();
    return RS_d;
}).call(this);
function RS_mixin() {
    var seen, resolved_props, p, target, props, name;
    seen = Object.create(null);
    seen.__argnames__ = seen.__handles_kwarg_interpolation__ = seen.__init__ = seen.__annotations__ = seen.__doc__ = seen.__bind_methods__ = seen.__bases__ = seen.constructor = seen.__class__ = true;
    resolved_props = {};
    p = target = arguments[0].prototype;
    while (p && p !== Object.prototype) {
        props = Object.getOwnPropertyNames(p);
        for (var i = 0; i < props.length; i++) {
            seen[RS_bound_index(props[(typeof i === "number" && i < 0) ? props.length + i : i], seen)] = true;
        }
        p = Object.getPrototypeOf(p);
    }
    for (var c = 1; c < arguments.length; c++) {
        p = arguments[(typeof c === "number" && c < 0) ? arguments.length + c : c].prototype;
        while (p && p !== Object.prototype) {
            props = Object.getOwnPropertyNames(p);
            for (var i = 0; i < props.length; i++) {
                name = props[(typeof i === "number" && i < 0) ? props.length + i : i];
                if (seen[(typeof name === "number" && name < 0) ? seen.length + name : name]) {
                    continue;
                }
                seen[(typeof name === "number" && name < 0) ? seen.length + name : name] = true;
                resolved_props[(typeof name === "number" && name < 0) ? resolved_props.length + name : name] = Object.getOwnPropertyDescriptor(p, name);
            }
            p = Object.getPrototypeOf(p);
        }
    }
    Object.defineProperties(target, resolved_props);
};

function RS_instanceof() {
    var obj, bases, q, cls, p;
    obj = arguments[0];
    bases = "";
    if (obj && obj.constructor && obj.constructor.prototype) {
        bases = obj.constructor.prototype.__bases__ || "";
    }
    for (var i = 1; i < arguments.length; i++) {
        q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
        if (obj instanceof q) {
            return true;
        }
        if ((q === Array || q === RS_list_constructor) && Array.isArray(obj)) {
            return true;
        }
        if (q === RS_str && (typeof obj === "string" || obj instanceof String)) {
            return true;
        }
        if (bases.length > 1) {
            for (var c = 1; c < bases.length; c++) {
                cls = bases[(typeof c === "number" && c < 0) ? bases.length + c : c];
                while (cls) {
                    if (q === cls) {
                        return true;
                    }
                    p = Object.getPrototypeOf(cls.prototype);
                    if (!p) {
                        break;
                    }
                    cls = p.constructor;
                }
            }
        }
    }
    return false;
};
function sum(iterable, start) {
    var ans, iterator, r;
    if (Array.isArray(iterable)) {
        return iterable.reduce((function() {
            var RS_anonfunc = function (prev, cur) {
                return prev + cur;
            };
            Object.defineProperties(RS_anonfunc, {
                __argnames__ : {value: ["prev", "cur"]}
            });
            return RS_anonfunc;
        })(), start || 0);
    }
    ans = start || 0;
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans += r.value;
        r = iterator.next();
    }
    return ans;
};
Object.defineProperties(sum, {
    __argnames__ : {value: ["iterable", "start"]}
});

function map() {
    var iterators, func, args, ans;
    iterators = new Array(arguments.length - 1);
    func = arguments[0];
    args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
        iterators[RS_bound_index(i - 1, iterators)] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_func':func, '_iterators':iterators, '_args':args};
    ans[RS_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        for (var i = 0; i < this._iterators.length; i++) {
            r = (RS_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            (RS_expr_temp = this._args)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i] = r.value;
        }
        return {'done':false, 'value':this._func.apply(undefined, this._args)};
    };
    return ans;
};

function filter(func_or_none, iterable) {
    var func, ans;
    func = (func_or_none === null) ? RS_bool : func_or_none;
    ans = {'_func':func, '_iterator':RS_iter(iterable)};
    ans[RS_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        r = this._iterator.next();
        while (!r.done) {
            if (this._func(r.value)) {
                return r;
            }
            r = this._iterator.next();
        }
        return {'done':true};
    };
    return ans;
};
Object.defineProperties(filter, {
    __argnames__ : {value: ["func_or_none", "iterable"]}
});

function zip() {
    var iterators, ans;
    iterators = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        iterators[(typeof i === "number" && i < 0) ? iterators.length + i : i] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_iterators':iterators};
    ans[RS_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var args, r;
        args = new Array(this._iterators.length);
        for (var i = 0; i < this._iterators.length; i++) {
            r = (RS_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            args[(typeof i === "number" && i < 0) ? args.length + i : i] = r.value;
        }
        return {'done':false, 'value':args};
    };
    return ans;
};

function any(iterable) {
    var i;
    var RS_Iter0 = RS_Iterable(iterable);
    for (var RS_Index0 = 0; RS_Index0 < RS_Iter0.length; RS_Index0++) {
        i = RS_Iter0[RS_Index0];
        if (i) {
            return true;
        }
    }
    return false;
};
Object.defineProperties(any, {
    __argnames__ : {value: ["iterable"]}
});

function all(iterable) {
    var i;
    var RS_Iter1 = RS_Iterable(iterable);
    for (var RS_Index1 = 0; RS_Index1 < RS_Iter1.length; RS_Index1++) {
        i = RS_Iter1[RS_Index1];
        if (!i) {
            return false;
        }
    }
    return true;
};
Object.defineProperties(all, {
    __argnames__ : {value: ["iterable"]}
});
var define_str_func, RS_unpack, RS_orig_split, RS_orig_replace;
function RS_repr_js_builtin(x, as_array) {
    var ans, b, keys, key;
    ans = [];
    b = "{}";
    if (as_array) {
        b = "[]";
        for (var i = 0; i < x.length; i++) {
            ans.push(RS_repr(x[(typeof i === "number" && i < 0) ? x.length + i : i]));
        }
    } else {
        keys = Object.keys(x);
        for (var k = 0; k < keys.length; k++) {
            key = keys[(typeof k === "number" && k < 0) ? keys.length + k : k];
            ans.push(JSON.stringify(key) + ":" + RS_repr(x[(typeof key === "number" && key < 0) ? x.length + key : key]));
        }
    }
    return b[0] + ans.join(", ") + b[1];
};
Object.defineProperties(RS_repr_js_builtin, {
    __argnames__ : {value: ["x", "as_array"]}
});

function RS_html_element_to_string(elem) {
    var attrs, val, attr, ans;
    attrs = [];
    var RS_Iter0 = RS_Iterable(elem.attributes);
    for (var RS_Index0 = 0; RS_Index0 < RS_Iter0.length; RS_Index0++) {
        attr = RS_Iter0[RS_Index0];
        if (attr.specified) {
            val = attr.value;
            if (val.length > 10) {
                val = val.slice(0, 15) + "...";
            }
            val = JSON.stringify(val);
            attrs.push("" + RS_str.format("{}", attr.name) + "=" + RS_str.format("{}", val) + "");
        }
    }
    attrs = (attrs.length) ? " " + attrs.join(" ") : "";
    ans = "<" + RS_str.format("{}", elem.tagName) + "" + RS_str.format("{}", attrs) + ">";
    return ans;
};
Object.defineProperties(RS_html_element_to_string, {
    __argnames__ : {value: ["elem"]}
});

function RS_repr(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = RS_repr_js_builtin(x, true);
    } else if (typeof x === "function") {
        ans = x.toString();
    } else if (typeof x === "object" && !x.toString) {
        ans = RS_repr_js_builtin(x);
    } else {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (RS_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var RS_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                Object.defineProperties(RS_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return RS_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = RS_html_element_to_string(x);
        } else {
            ans = (typeof x.toString === "function") ? x.toString() : x;
        }
        if (ans === "[object Object]") {
            return RS_repr_js_builtin(x);
        }
        try {
            ans = JSON.stringify(x);
        } catch (RS_Exception) {
            RS_last_exception = RS_Exception;
            {
            } 
        }
    }
    return ans + "";
};
Object.defineProperties(RS_repr, {
    __argnames__ : {value: ["x"]}
});

function RS_str(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__str__ === "function") {
        ans = x.__str__();
    } else if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = RS_repr_js_builtin(x, true);
    } else if (typeof x.toString === "function") {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (RS_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var RS_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                Object.defineProperties(RS_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return RS_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = RS_html_element_to_string(x);
        } else {
            ans = x.toString();
        }
        if (ans === "[object Object]") {
            ans = RS_repr_js_builtin(x);
        }
    } else if (typeof x === "object" && !x.toString) {
        ans = RS_repr_js_builtin(x);
    }
    return ans + "";
};
Object.defineProperties(RS_str, {
    __argnames__ : {value: ["x"]}
});

define_str_func = (function() {
    var RS_anonfunc = function (name, func) {
        var f;
        (RS_expr_temp = RS_str.prototype)[(typeof name === "number" && name < 0) ? RS_expr_temp.length + name : name] = func;
        RS_str[(typeof name === "number" && name < 0) ? RS_str.length + name : name] = f = func.call.bind(func);
        if (func.__argnames__) {
            Object.defineProperty(f, "__argnames__", (function(){
                var RS_d = {};
                RS_d["value"] = ['string'].concat(func.__argnames__);
                return RS_d;
            }).call(this));
        }
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["name", "func"]}
    });
    return RS_anonfunc;
})();
RS_unpack = [String.prototype.split.call.bind(String.prototype.split), String.prototype.replace.call.bind(String.prototype.replace)];
RS_orig_split = RS_unpack[0];
RS_orig_replace = RS_unpack[1];
define_str_func("format", function () {
    var template, args, kwargs, explicit, implicit, idx, split, ans, pos, in_brace, markup, ch;
    template = this;
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments);
    kwargs = {};
    if (args[args.length-1] && args[args.length-1][RS_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    explicit = implicit = false;
    idx = 0;
    split = RS_orig_split;
    if (RS_str.format._template_resolve_pat === undefined) {
        RS_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var RS_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        RS_unpack = [arg[0], arg.slice(1)];
        first = RS_unpack[0];
        arg = RS_unpack[1];
        key = split(arg, RS_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[RS_bound_index(key.slice(0, -1), object)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    };
    Object.defineProperties(resolve, {
        __argnames__ : {value: ["arg", "object"]}
    });

    function resolve_format_spec(format_spec) {
        if (RS_str.format._template_resolve_fs_pat === undefined) {
            RS_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(RS_str.format._template_resolve_fs_pat, (function() {
            var RS_anonfunc = function (match, key) {
                if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                    return "";
                }
                return "" + kwargs[(typeof key === "number" && key < 0) ? kwargs.length + key : key];
            };
            Object.defineProperties(RS_anonfunc, {
                __argnames__ : {value: ["match", "key"]}
            });
            return RS_anonfunc;
        })());
    };
    Object.defineProperties(resolve_format_spec, {
        __argnames__ : {value: ["format_spec"]}
    });

    function apply_formatting(value, format_spec) {
        var RS_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (RS_str.format._template_format_pat === undefined) {
            RS_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            RS_unpack = format_spec.match(RS_str.format._template_format_pat).slice(1);
RS_unpack = RS_unpack_asarray(9, RS_unpack);
            fill = RS_unpack[0];
            align = RS_unpack[1];
            sign = RS_unpack[2];
            fhash = RS_unpack[3];
            zeropad = RS_unpack[4];
            width = RS_unpack[5];
            comma = RS_unpack[6];
            precision = RS_unpack[7];
            ftype = RS_unpack[8];
        } catch (RS_Exception) {
            RS_last_exception = RS_Exception;
            if (RS_Exception instanceof TypeError) {
                return value;
            } else {
                throw RS_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = value.toLocaleString("en-US");
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            if (lftype === "e") {
                value = value.toExponential((isNaN(precision)) ? 6 : precision);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = value.toFixed((isNaN(precision)) ? 6 : precision);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (ftype === "%") {
                value *= 100;
                value = value.toFixed((isNaN(precision)) ? 6 : precision) + "%";
            } else if (lftype === "g") {
                if (isNaN(precision)) {
                    precision = 6;
                }
                precision = max(1, precision);
                exp = parseInt(split(value.toExponential(precision - 1).toLowerCase(), "e")[1], 10);
                if (-4 <= exp && exp < precision) {
                    value = value.toFixed(precision - 1 - exp);
                } else {
                    value = value.toExponential(precision - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        };
        Object.defineProperties(repeat, {
            __argnames__ : {value: ["char", "num"]}
        });

        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            RS_unpack = ["0", "="];
            fill = RS_unpack[0];
            align = RS_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (RS_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    };
    Object.defineProperties(apply_formatting, {
        __argnames__ : {value: ["value", "format_spec"]}
    });

    function parse_markup(markup) {
        var key, transformer, format_spec, pos, state, ch;
        key = transformer = format_spec = "";
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[(typeof pos === "number" && pos < 0) ? markup.length + pos : pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    };
    Object.defineProperties(parse_markup, {
        __argnames__ : {value: ["markup"]}
    });

    function render_markup(markup) {
        var RS_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        RS_unpack = parse_markup(markup);
RS_unpack = RS_unpack_asarray(3, RS_unpack);
        key = RS_unpack[0];
        transformer = RS_unpack[1];
        format_spec = RS_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && split(key, /[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[(typeof lkey === "number" && lkey < 0) ? kwargs.length + lkey : lkey] : args[(typeof nvalue === "number" && nvalue < 0) ? args.length + nvalue : nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[(typeof idx === "number" && idx < 0) ? args.length + idx : idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    };
    Object.defineProperties(render_markup, {
        __argnames__ : {value: ["markup"]}
    });

    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[(typeof pos === "number" && pos < 0) ? template.length + pos : pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[RS_bound_index(pos + 1, template)] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
});
define_str_func("capitalize", function () {
    var string;
    string = this;
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
});
define_str_func("center", (function() {
    var RS_anonfunc = function (width, fill) {
        var left, right;
        left = Math.floor((width - this.length) / 2);
        right = width - left - this.length;
        fill = fill || " ";
        return new Array(left+1).join(fill) + this + new Array(right+1).join(fill);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return RS_anonfunc;
})());
define_str_func("count", (function() {
    var RS_anonfunc = function (needle, start, end) {
        var string, RS_unpack, pos, step, ans;
        string = this;
        start = start || 0;
        end = end || string.length;
        if (start < 0 || end < 0) {
            string = string.slice(start, end);
            RS_unpack = [0, string.length];
            start = RS_unpack[0];
            end = RS_unpack[1];
        }
        pos = start;
        step = needle.length;
        if (!step) {
            return 0;
        }
        ans = 0;
        while (pos !== -1) {
            pos = string.indexOf(needle, pos);
            if (pos !== -1) {
                ans += 1;
                pos += step;
            }
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("endswith", (function() {
    var RS_anonfunc = function (suffixes, start, end) {
        var string, q;
        string = this;
        start = start || 0;
        if (typeof suffixes === "string") {
            suffixes = [suffixes];
        }
        if (end !== undefined) {
            string = string.slice(0, end);
        }
        for (var i = 0; i < suffixes.length; i++) {
            q = suffixes[(typeof i === "number" && i < 0) ? suffixes.length + i : i];
            if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["suffixes", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("startswith", (function() {
    var RS_anonfunc = function (prefixes, start, end) {
        var prefix;
        start = start || 0;
        if (typeof prefixes === "string") {
            prefixes = [prefixes];
        }
        for (var i = 0; i < prefixes.length; i++) {
            prefix = prefixes[(typeof i === "number" && i < 0) ? prefixes.length + i : i];
            end = (end === undefined) ? this.length : end;
            if (end - start >= prefix.length && prefix === this.slice(start, start + prefix.length)) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["prefixes", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("find", (function() {
    var RS_anonfunc = function (needle, start, end) {
        var ans;
        while (start < 0) {
            start += this.length;
        }
        ans = this.indexOf(needle, start);
        if (end !== undefined && ans !== -1) {
            while (end < 0) {
                end += this.length;
            }
            if (ans >= end - needle.length) {
                return -1;
            }
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("rfind", (function() {
    var RS_anonfunc = function (needle, start, end) {
        var ans;
        while (end < 0) {
            end += this.length;
        }
        ans = this.lastIndexOf(needle, end - 1);
        if (start !== undefined && ans !== -1) {
            while (start < 0) {
                start += this.length;
            }
            if (ans < start) {
                return -1;
            }
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("index", (function() {
    var RS_anonfunc = function (needle, start, end) {
        var ans;
        ans = RS_str.prototype.find.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("rindex", (function() {
    var RS_anonfunc = function (needle, start, end) {
        var ans;
        ans = RS_str.prototype.rfind.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return RS_anonfunc;
})());
define_str_func("islower", function () {
    return this.length > 0 && this.toLowerCase() === this.toString();
});
define_str_func("isupper", function () {
    return this.length > 0 && this.toUpperCase() === this.toString();
});
define_str_func("isspace", function () {
    return this.length > 0 && /^\s+$/.test(this);
});
define_str_func("join", (function() {
    var RS_anonfunc = function (iterable) {
        var ans, r;
        if (Array.isArray(iterable)) {
            return iterable.join(this);
        }
        ans = "";
        r = iterable.next();
        while (!r.done) {
            if (ans) {
                ans += this;
            }
            ans += r.value;
            r = iterable.next();
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["iterable"]}
    });
    return RS_anonfunc;
})());
define_str_func("ljust", (function() {
    var RS_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string += new Array(width - string.length + 1).join(fill);
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return RS_anonfunc;
})());
define_str_func("rjust", (function() {
    var RS_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string = new Array(width - string.length + 1).join(fill) + string;
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return RS_anonfunc;
})());
define_str_func("lower", function () {
    return this.toLowerCase();
});
define_str_func("upper", function () {
    return this.toUpperCase();
});
define_str_func("lstrip", (function() {
    var RS_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = 0;
        chars = chars || RS_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos += 1;
        }
        if (pos) {
            string = string.slice(pos);
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return RS_anonfunc;
})());
define_str_func("rstrip", (function() {
    var RS_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = string.length - 1;
        chars = chars || RS_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos -= 1;
        }
        if (pos < string.length - 1) {
            string = string.slice(0, pos + 1);
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return RS_anonfunc;
})());
define_str_func("strip", (function() {
    var RS_anonfunc = function (chars) {
        return RS_str.prototype.lstrip.call(RS_str.prototype.rstrip.call(this, chars), chars);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return RS_anonfunc;
})());
define_str_func("partition", (function() {
    var RS_anonfunc = function (sep) {
        var idx;
        idx = this.indexOf(sep);
        if (idx === -1) {
            return [this, "", ""];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return RS_anonfunc;
})());
define_str_func("rpartition", (function() {
    var RS_anonfunc = function (sep) {
        var idx;
        idx = this.lastIndexOf(sep);
        if (idx === -1) {
            return ["", "", this];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return RS_anonfunc;
})());
define_str_func("replace", (function() {
    var RS_anonfunc = function (old, repl, count) {
        var string, pos, idx;
        string = this;
        if (count === 1) {
            return RS_orig_replace(string, old, repl);
        }
        if (count < 1) {
            return string;
        }
        count = count || Number.MAX_VALUE;
        pos = 0;
        while (count > 0) {
            count -= 1;
            idx = string.indexOf(old, pos);
            if (idx === -1) {
                break;
            }
            pos = idx + repl.length;
            string = string.slice(0, idx) + repl + string.slice(idx + old.length);
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["old", "repl", "count"]}
    });
    return RS_anonfunc;
})());
define_str_func("split", (function() {
    var RS_anonfunc = function (sep, maxsplit) {
        var split, ans, extra, parts;
        if (maxsplit === 0) {
            return RS_list_decorate([ this ]);
        }
        split = RS_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = split(this, /(\s+)/);
                extra = "";
                parts = [];
                for (var i = 0; i < ans.length; i++) {
                    if (parts.length >= maxsplit + 1) {
                        extra += ans[(typeof i === "number" && i < 0) ? ans.length + i : i];
                    } else if (i % 2 === 0) {
                        parts.push(ans[(typeof i === "number" && i < 0) ? ans.length + i : i]);
                    }
                }
                parts[parts.length-1] += extra;
                ans = parts;
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = split(this, sep);
            if (maxsplit > 0 && ans.length > maxsplit) {
                extra = ans.slice(maxsplit).join(sep);
                ans = ans.slice(0, maxsplit);
                ans.push(extra);
            }
        }
        return RS_list_decorate(ans);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return RS_anonfunc;
})());
define_str_func("rsplit", (function() {
    var RS_anonfunc = function (sep, maxsplit) {
        var split, ans, is_space, pos, current, spc, ch, end, idx;
        if (!maxsplit) {
            return RS_str.prototype.split.call(this, sep);
        }
        split = RS_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = [];
                is_space = /\s/;
                pos = this.length - 1;
                current = "";
                while (pos > -1 && maxsplit > 0) {
                    spc = false;
                    ch = (RS_expr_temp = this)[(typeof pos === "number" && pos < 0) ? RS_expr_temp.length + pos : pos];
                    while (pos > -1 && is_space.test(ch)) {
                        spc = true;
                        ch = this[--pos];
                    }
                    if (spc) {
                        if (current) {
                            ans.push(current);
                            maxsplit -= 1;
                        }
                        current = ch;
                    } else {
                        current += ch;
                    }
                    pos -= 1;
                }
                ans.push(this.slice(0, pos + 1) + current);
                ans.reverse();
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = [];
            pos = end = this.length;
            while (pos > -1 && maxsplit > 0) {
                maxsplit -= 1;
                idx = this.lastIndexOf(sep, pos);
                if (idx === -1) {
                    break;
                }
                ans.push(this.slice(idx + sep.length, end));
                pos = idx - 1;
                end = idx;
            }
            ans.push(this.slice(0, end));
            ans.reverse();
        }
        return RS_list_decorate(ans);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return RS_anonfunc;
})());
define_str_func("splitlines", (function() {
    var RS_anonfunc = function (keepends) {
        var split, parts, ans;
        split = RS_orig_split;
        if (keepends) {
            parts = split(this, /((?:\r?\n)|\r)/);
            ans = [];
            for (var i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    ans.push(parts[(typeof i === "number" && i < 0) ? parts.length + i : i]);
                } else {
                    ans[ans.length-1] += parts[(typeof i === "number" && i < 0) ? parts.length + i : i];
                }
            }
        } else {
            ans = split(this, /(?:\r?\n)|\r/);
        }
        return RS_list_decorate(ans);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["keepends"]}
    });
    return RS_anonfunc;
})());
define_str_func("swapcase", function () {
    var ans, a, b;
    ans = new Array(this.length);
    for (var i = 0; i < ans.length; i++) {
        a = (RS_expr_temp = this)[(typeof i === "number" && i < 0) ? RS_expr_temp.length + i : i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = b;
    }
    return ans.join("");
});
define_str_func("zfill", (function() {
    var RS_anonfunc = function (width) {
        var string;
        string = this;
        if (width > string.length) {
            string = new Array(width - string.length + 1).join("0") + string;
        }
        return string;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["width"]}
    });
    return RS_anonfunc;
})());
RS_str.uchrs = (function() {
    var RS_anonfunc = function (string, with_positions) {
        return (function(){
            var RS_d = {};
            RS_d["_string"] = string;
            RS_d["_pos"] = 0;
            RS_d[RS_iterator_symbol] = function () {
                return this;
            };
            RS_d["next"] = function () {
                var length, pos, value, ans, extra;
                length = this._string.length;
                if (this._pos >= length) {
                    return (function(){
                        var RS_d = {};
                        RS_d["done"] = true;
                        return RS_d;
                    }).call(this);
                }
                pos = this._pos;
                value = this._string.charCodeAt(this._pos++);
                ans = "\ufffd";
                if (55296 <= value && value <= 56319) {
                    if (this._pos < length) {
                        extra = this._string.charCodeAt(this._pos++);
                        if ((extra & 56320) === 56320) {
                            ans = String.fromCharCode(value, extra);
                        }
                    }
                } else if ((value & 56320) !== 56320) {
                    ans = String.fromCharCode(value);
                }
                if (with_positions) {
                    return (function(){
                        var RS_d = {};
                        RS_d["done"] = false;
                        RS_d["value"] = RS_list_decorate([ pos, ans ]);
                        return RS_d;
                    }).call(this);
                } else {
                    return (function(){
                        var RS_d = {};
                        RS_d["done"] = false;
                        RS_d["value"] = ans;
                        return RS_d;
                    }).call(this);
                }
            };
            return RS_d;
        }).call(this);
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["string", "with_positions"]}
    });
    return RS_anonfunc;
})();
RS_str.uslice = (function() {
    var RS_anonfunc = function (string, start, end) {
        var items, iterator, r;
        items = [];
        iterator = RS_str.uchrs(string);
        r = iterator.next();
        while (!r.done) {
            items.push(r.value);
            r = iterator.next();
        }
        return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["string", "start", "end"]}
    });
    return RS_anonfunc;
})();
RS_str.ulen = (function() {
    var RS_anonfunc = function (string) {
        var iterator, r, ans;
        iterator = RS_str.uchrs(string);
        r = iterator.next();
        ans = 0;
        while (!r.done) {
            r = iterator.next();
            ans += 1;
        }
        return ans;
    };
    Object.defineProperties(RS_anonfunc, {
        __argnames__ : {value: ["string"]}
    });
    return RS_anonfunc;
})();
RS_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
RS_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
RS_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
RS_str.digits = "0123456789";
RS_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
RS_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
RS_str.whitespace = " \t\n\r\u000b\f";
define_str_func = undefined;
var str = RS_str, repr = RS_repr;