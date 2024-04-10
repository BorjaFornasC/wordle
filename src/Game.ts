import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { ILetterChecker } from "./LetterCheck/ILetterChecker.js";
import { IUIChanger } from "./UserInterface/IUIChanger.js";
import { BackspaceAction, EnterAction, KeyboardAction, newLetterAction, NoAction } from "./KeyManager/KeyBoardActions.js";
import { VALID_LETTER_CODES } from "./KeyManager/TransformKeys.js";

export class Game {
    #pickedWord: string
    #actualWord: string = ""
    #turn: number = 1
    #actualPosition: number = 0
    #userInterface: IUIChanger
    #letterChecker : ILetterChecker
    #keyManager : ITransformKeys

    constructor(pickedWord: string, userInterface: IUIChanger, letterChecker : ILetterChecker, keyManager : ITransformKeys) {
        this.#pickedWord = pickedWord;
        this.#userInterface = userInterface;
        this.#letterChecker = letterChecker;
        this.#keyManager = keyManager;
    }

    get pickedWord() {
        return this.#pickedWord;
    }
    set pickedWord(word) {
        this.#pickedWord = word;
    }

    get actualWord() {
        return this.#actualWord;
    }
    set actualWord(word) {
        this.#actualWord = word;
    }

    get turn() {
        return this.#turn;
    }
    set turn(num) {
        this.#turn = num;
    }

    get actualPosition() {
        return this.#actualPosition;
    }
    set actualPosition(num) {
        this.#actualPosition = num;
    }

    get userInterface() {
        return this.#userInterface;
    }
    set userInterface(i) {
        this.#userInterface = i;
    }

    get letterChecker() {
        return this.#letterChecker;
    }
    set letterChecker(i) {
        this.#letterChecker = i;
    }

    get keyManager() {
        return this.#keyManager;
    }
    set keyManager(i) {
        this.#keyManager = i;
    }
    
    updateAfterANewWord = (): void => {
        this.#letterChecker.checkLetters(this);
        this.#turn = this.#turn + 1;
        this.#actualPosition = 0;
        this.#actualWord = "";
    }

    checkGameIsFinish(): void {
        if (this.#actualWord == this.#pickedWord) {
            location.assign("/winner");
        } else if (this.turn == MAX_ATTEMPTS) {
            //location.assign("/loser");
            location.assign(`/loser?pickedWord=${encodeURIComponent(this.#pickedWord)}`);
        }
    }
    
    enterPressed(): void {
        if (this.#actualWord.length == MAX_WORD_SIZE) {
            this.checkGameIsFinish();
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                this.#userInterface.changeBackgroundKey(this.#keyManager.transformLetterToKey(this.#actualWord[i]));
            }
            this.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.#actualPosition > 0) {
            this.#actualPosition -= 1;
            this.#actualWord = this.#actualWord.slice(0, this.#actualPosition);
            this.#userInterface.deleteLetter(this.#turn, this.#actualPosition);
        }
    }

    newKeyPressed(code: string): void {
        let action: KeyboardAction = new NoAction;
    
        if (VALID_LETTER_CODES.includes(code) && this.#actualPosition < MAX_WORD_SIZE) {
            action = new newLetterAction(code);
        } else if (code == "Enter") {
            action = new EnterAction();
        } else if (code == "Backspace") {
            action = new BackspaceAction();
        }

        action.execute(this);
    }
    

    newLetter(code: string): void {
        let letter: string = this.#keyManager.transformKeyToLetter(code);
        this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition = this.#actualPosition + 1;
        this.#actualWord += letter;
    }
}