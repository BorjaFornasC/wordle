import { Game } from "./Game.js";
import { ITransformKeys } from "./KeyManager/ITransformKeys.js";
import { BackspaceAction, EnterAction, KeyboardAction, NoAction, newLetterAction } from "./KeyManager/KeyBoardActions.js";
import { VALID_LETTER_CODES } from "./KeyManager/TransformKeys.js";
import { ILetterChecker } from "./LetterCheck/ILetterChecker.js";
import { IUIChanger } from "./UserInterface/IUIChanger.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "./env.js";

export class GameController {
    #game: Game;
    #userInterface: IUIChanger;
    #letterChecker : ILetterChecker;
    #keyTransformer : ITransformKeys;
    constructor(game : Game, userInterface : IUIChanger, letterChecker : ILetterChecker, keyTransformer : ITransformKeys) {
        this.#game = game;
        this.#userInterface = userInterface;
        this.#letterChecker = letterChecker;
        this.#keyTransformer = keyTransformer;
    }

    get userInterface() {
        return this.#userInterface;
    }
    set userInterface(userInterface) {
        this.#userInterface = userInterface;
    }

    get letterChecker() {
        return this.#letterChecker;
    }
    set letterChecker(letterChecker) {
        this.#letterChecker = letterChecker;
    }

    get keyTransformer() {
        return this.#keyTransformer;
    }
    set keyTransformer(keyTransformer) {
        this.#keyTransformer = keyTransformer;
    }

    checkGameIsFinish(): void {
        if (this.#game.actualWord == this.#game.pickedWord) {
            location.assign("/winner");
        } else if (this.#game.turn == MAX_ATTEMPTS) {
            location.assign(`/loser?pickedWord=${encodeURIComponent(this.#game.pickedWord)}`);
        }
    }

    checkLettersAndUpdateWord() : void {
        this.#letterChecker.checkLetters(this.#game, this.#userInterface);
        this.#game.updateAfterANewWord();
    }

    enterPressed(): void {
        if (this.#game.actualWord.length == MAX_WORD_SIZE) {
            this.checkGameIsFinish();
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                this.#userInterface.changeBackgroundKey(this.#keyTransformer.transformLetterToKey(this.#game.actualWord[i]));
            }
            this.checkLettersAndUpdateWord();
        }
    }

    backspacePressed(): void {
        if (this.#game.actualPosition > 0) {
            this.#game.deleteLetterToActualWord();
            this.#userInterface.deleteLetter(this.#game.turn, this.#game.actualPosition);
        }
    }

    newKeyPressed(code: string): void {
        let action: KeyboardAction;
    
        if (VALID_LETTER_CODES.includes(code) && this.#game.actualPosition < MAX_WORD_SIZE) {
            action = new newLetterAction(code);
        } else if (code == "Enter") {
            action = new EnterAction();
        } else if (code == "Backspace") {
            action = new BackspaceAction();
        } else {
            action = new NoAction();
        }

        action.execute(this);
    }

    newLetter(code: string): void {
        let letter: string = this.#keyTransformer.transformKeyToLetter(code);
        this.#userInterface.setNewLetter(this.#game.turn, this.#game.actualPosition, letter);
        this.#game.addNewLetterToActualWord(letter);
    }
}