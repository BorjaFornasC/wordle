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
var _GameController_game, _GameController_userInterface, _GameController_letterChecker, _GameController_keyTransformer;
import { BackspaceAction, EnterAction, NoAction, newLetterAction } from "./KeyManager/KeyBoardActions.js";
import { VALID_LETTER_CODES } from "./KeyManager/TransformKeys.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "./env.js";
export class GameController {
    constructor(game, userInterface, letterChecker, keyTransformer) {
        _GameController_game.set(this, void 0);
        _GameController_userInterface.set(this, void 0);
        _GameController_letterChecker.set(this, void 0);
        _GameController_keyTransformer.set(this, void 0);
        __classPrivateFieldSet(this, _GameController_game, game, "f");
        __classPrivateFieldSet(this, _GameController_userInterface, userInterface, "f");
        __classPrivateFieldSet(this, _GameController_letterChecker, letterChecker, "f");
        __classPrivateFieldSet(this, _GameController_keyTransformer, keyTransformer, "f");
    }
    get userInterface() {
        return __classPrivateFieldGet(this, _GameController_userInterface, "f");
    }
    set userInterface(userInterface) {
        __classPrivateFieldSet(this, _GameController_userInterface, userInterface, "f");
    }
    get letterChecker() {
        return __classPrivateFieldGet(this, _GameController_letterChecker, "f");
    }
    set letterChecker(letterChecker) {
        __classPrivateFieldSet(this, _GameController_letterChecker, letterChecker, "f");
    }
    get keyTransformer() {
        return __classPrivateFieldGet(this, _GameController_keyTransformer, "f");
    }
    set keyTransformer(keyTransformer) {
        __classPrivateFieldSet(this, _GameController_keyTransformer, keyTransformer, "f");
    }
    checkGameIsFinish() {
        if (__classPrivateFieldGet(this, _GameController_game, "f").actualWord == __classPrivateFieldGet(this, _GameController_game, "f").pickedWord) {
            location.assign("/winner");
        }
        else if (__classPrivateFieldGet(this, _GameController_game, "f").turn == MAX_ATTEMPTS) {
            location.assign(`/loser?pickedWord=${encodeURIComponent(__classPrivateFieldGet(this, _GameController_game, "f").pickedWord)}`);
        }
    }
    checkLettersAndUpdateWord() {
        __classPrivateFieldGet(this, _GameController_letterChecker, "f").checkLetters(__classPrivateFieldGet(this, _GameController_game, "f"), __classPrivateFieldGet(this, _GameController_userInterface, "f"));
        __classPrivateFieldGet(this, _GameController_game, "f").updateAfterANewWord();
    }
    enterPressed() {
        if (__classPrivateFieldGet(this, _GameController_game, "f").actualWord.length == MAX_WORD_SIZE) {
            this.checkGameIsFinish();
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                __classPrivateFieldGet(this, _GameController_userInterface, "f").changeBackgroundKey(__classPrivateFieldGet(this, _GameController_keyTransformer, "f").transformLetterToKey(__classPrivateFieldGet(this, _GameController_game, "f").actualWord[i]));
            }
            this.checkLettersAndUpdateWord();
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _GameController_game, "f").actualPosition > 0) {
            __classPrivateFieldGet(this, _GameController_game, "f").deleteLetterToActualWord();
            __classPrivateFieldGet(this, _GameController_userInterface, "f").deleteLetter(__classPrivateFieldGet(this, _GameController_game, "f").turn, __classPrivateFieldGet(this, _GameController_game, "f").actualPosition);
        }
    }
    newKeyPressed(code) {
        let action = new NoAction;
        if (VALID_LETTER_CODES.includes(code) && __classPrivateFieldGet(this, _GameController_game, "f").actualPosition < MAX_WORD_SIZE) {
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
        let letter = __classPrivateFieldGet(this, _GameController_keyTransformer, "f").transformKeyToLetter(code);
        __classPrivateFieldGet(this, _GameController_userInterface, "f").setNewLetter(__classPrivateFieldGet(this, _GameController_game, "f").turn, __classPrivateFieldGet(this, _GameController_game, "f").actualPosition, letter);
        __classPrivateFieldGet(this, _GameController_game, "f").addNewLetterToActualWord(letter);
    }
}
_GameController_game = new WeakMap(), _GameController_userInterface = new WeakMap(), _GameController_letterChecker = new WeakMap(), _GameController_keyTransformer = new WeakMap();
