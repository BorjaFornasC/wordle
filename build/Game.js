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
var _Game_pickedWord, _Game_actualWord, _Game_turn, _Game_actualPosition, _Game_userInterface, _Game_letterChecker, _Game_keyManager;
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { BackspaceAction, EnterAction, newLetterAction, NoAction } from "./KeyManager/KeyBoardActions.js";
import { VALID_LETTER_CODES } from "./KeyManager/TransformKeys.js";
export class Game {
    constructor(pickedWord, userInterface, letterChecker, keyManager) {
        _Game_pickedWord.set(this, void 0);
        _Game_actualWord.set(this, "");
        _Game_turn.set(this, 1);
        _Game_actualPosition.set(this, 0);
        _Game_userInterface.set(this, void 0);
        _Game_letterChecker.set(this, void 0);
        _Game_keyManager.set(this, void 0);
        this.updateAfterANewWord = () => {
            __classPrivateFieldGet(this, _Game_letterChecker, "f").checkLetters(this);
            __classPrivateFieldSet(this, _Game_turn, __classPrivateFieldGet(this, _Game_turn, "f") + 1, "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        };
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_userInterface, userInterface, "f");
        __classPrivateFieldSet(this, _Game_letterChecker, letterChecker, "f");
        __classPrivateFieldSet(this, _Game_keyManager, keyManager, "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_pickedWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _Game_pickedWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _Game_actualWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _Game_actualWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_turn, num, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _Game_actualPosition, "f");
    }
    set actualPosition(num) {
        __classPrivateFieldSet(this, _Game_actualPosition, num, "f");
    }
    get userInterface() {
        return __classPrivateFieldGet(this, _Game_userInterface, "f");
    }
    set userInterface(i) {
        __classPrivateFieldSet(this, _Game_userInterface, i, "f");
    }
    get letterChecker() {
        return __classPrivateFieldGet(this, _Game_letterChecker, "f");
    }
    set letterChecker(i) {
        __classPrivateFieldSet(this, _Game_letterChecker, i, "f");
    }
    get keyManager() {
        return __classPrivateFieldGet(this, _Game_keyManager, "f");
    }
    set keyManager(i) {
        __classPrivateFieldSet(this, _Game_keyManager, i, "f");
    }
    checkGameIsFinish() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
        else if (this.turn == MAX_ATTEMPTS) {
            //location.assign("/loser");
            location.assign(`/loser?pickedWord=${encodeURIComponent(__classPrivateFieldGet(this, _Game_pickedWord, "f"))}`);
        }
    }
    enterPressed() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f").length == MAX_WORD_SIZE) {
            this.checkGameIsFinish();
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundKey(__classPrivateFieldGet(this, _Game_keyManager, "f").transformLetterToKey(__classPrivateFieldGet(this, _Game_actualWord, "f")[i]));
            }
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") > 0) {
            __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") - 1, "f");
            __classPrivateFieldSet(this, _Game_actualWord, __classPrivateFieldGet(this, _Game_actualWord, "f").slice(0, __classPrivateFieldGet(this, _Game_actualPosition, "f")), "f");
            __classPrivateFieldGet(this, _Game_userInterface, "f").deleteLetter(__classPrivateFieldGet(this, _Game_turn, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"));
        }
    }
    newKeyPressed(code) {
        let action = new NoAction;
        if (VALID_LETTER_CODES.includes(code) && __classPrivateFieldGet(this, _Game_actualPosition, "f") < MAX_WORD_SIZE) {
            action = new newLetterAction(code);
        }
        else if (code == "Enter") {
            action = new EnterAction();
        }
        else if (code == "Backspace") {
            action = new BackspaceAction();
        }
        action.execute(this);
    }
    newLetter(code) {
        let letter = __classPrivateFieldGet(this, _Game_keyManager, "f").transformKeyToLetter(code);
        __classPrivateFieldGet(this, _Game_userInterface, "f").setNewLetter(this.turn, this.actualPosition, letter);
        __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") + 1, "f");
        __classPrivateFieldSet(this, _Game_actualWord, __classPrivateFieldGet(this, _Game_actualWord, "f") + letter, "f");
    }
}
_Game_pickedWord = new WeakMap(), _Game_actualWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_actualPosition = new WeakMap(), _Game_userInterface = new WeakMap(), _Game_letterChecker = new WeakMap(), _Game_keyManager = new WeakMap();
