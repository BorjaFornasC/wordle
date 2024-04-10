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
var _MiSingleton_pickedWord, _MiSingleton_actualWord, _MiSingleton_turn, _MiSingleton_actualPosition, _MiSingleton_userInterface;
import { UIChanger } from "./UIChanger";
import { Word } from "./Word";
export class MiSingleton {
    constructor() {
        _MiSingleton_pickedWord.set(this, void 0);
        _MiSingleton_actualWord.set(this, void 0);
        _MiSingleton_turn.set(this, void 0);
        _MiSingleton_actualPosition.set(this, void 0);
        _MiSingleton_userInterface.set(this, void 0);
        const wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO", "CORRO", "RAMPA", "RATON", "TECLA", "HORNO", "CELTA", "SALMO",
            "DEDAL", "SONDA", "LAPSO", "SALON", "CESTA", "PESCA", "MAREA", "AUDAZ", "CAÑAS", "TESIS", "DOSIS", "ATRAS", "TEINA", "SUSHI", "CHICO", "LOGRO"]);
        __classPrivateFieldSet(this, _MiSingleton_pickedWord, wordsCollection.getRandomWord(), "f");
        __classPrivateFieldSet(this, _MiSingleton_actualWord, "", "f");
        __classPrivateFieldSet(this, _MiSingleton_turn, 0, "f");
        __classPrivateFieldSet(this, _MiSingleton_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _MiSingleton_userInterface, new UIChanger(), "f");
    }
    static getInstance() {
        if (!MiSingleton.instance) {
            MiSingleton.instance = new MiSingleton();
        }
        return MiSingleton.instance;
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _MiSingleton_pickedWord, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _MiSingleton_actualWord, "f");
    }
    set actualWord(i) {
        __classPrivateFieldSet(this, _MiSingleton_actualWord, i, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _MiSingleton_turn, "f");
    }
    set turn(i) {
        __classPrivateFieldSet(this, _MiSingleton_turn, i, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _MiSingleton_actualPosition, "f");
    }
    set actualPosition(value) {
        __classPrivateFieldSet(this, _MiSingleton_actualPosition, value, "f");
    }
    get userInterface() {
        return __classPrivateFieldGet(this, _MiSingleton_userInterface, "f");
    }
    set userInterface(i) {
        __classPrivateFieldSet(this, _MiSingleton_userInterface, i, "f");
    }
}
_MiSingleton_pickedWord = new WeakMap(), _MiSingleton_actualWord = new WeakMap(), _MiSingleton_turn = new WeakMap(), _MiSingleton_actualPosition = new WeakMap(), _MiSingleton_userInterface = new WeakMap();
