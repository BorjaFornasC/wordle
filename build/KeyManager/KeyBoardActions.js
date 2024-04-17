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
var _newLetterAction_code;
export class EnterAction {
    execute(gameControl) {
        gameControl.enterPressed();
    }
}
export class BackspaceAction {
    execute(gameControl) {
        gameControl.backspacePressed();
    }
}
export class newLetterAction {
    constructor(code) {
        _newLetterAction_code.set(this, void 0);
        __classPrivateFieldSet(this, _newLetterAction_code, code, "f");
    }
    get code() {
        return __classPrivateFieldGet(this, _newLetterAction_code, "f");
    }
    execute(gameControl) {
        gameControl.newLetter(this.code);
    }
}
_newLetterAction_code = new WeakMap();
export class NoAction {
    execute(gameControl) {
        console.log("No action for this key.");
    }
}
