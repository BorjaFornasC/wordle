var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Letter_char, _Letter_state;
export class Letter {
    constructor(char, state) {
        _Letter_char.set(this, void 0);
        _Letter_state.set(this, void 0);
        __classPrivateFieldSet(this, _Letter_char, char, "f");
        __classPrivateFieldSet(this, _Letter_state, state, "f");
    }
    get char() {
        return __classPrivateFieldGet(this, _Letter_char, "f");
    }
    set char(i) {
        __classPrivateFieldSet(this, _Letter_char, i, "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _Letter_state, "f");
    }
    set state(i) {
        __classPrivateFieldSet(this, _Letter_state, i, "f");
    }
}
_Letter_char = new WeakMap(), _Letter_state = new WeakMap();
