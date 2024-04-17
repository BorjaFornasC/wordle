import { GameController } from "../GameController.js";


export interface KeyboardAction {
    execute(gameControl: GameController): void;
}

export class EnterAction implements KeyboardAction {
    execute(gameControl: GameController): void {
        gameControl.enterPressed();
    }
}

export class BackspaceAction implements KeyboardAction {
    execute(gameControl: GameController): void {
        gameControl.backspacePressed();
    }
}

export class newLetterAction implements KeyboardAction {
    #code : string
    constructor(code:string) {
        this.#code = code;
    }
    get code () {
        return this.#code;
    }
    execute(gameControl: GameController): void {
        gameControl.newLetter(this.code);
    }
}

export class NoAction implements KeyboardAction {
    execute(gameControl: GameController): void {
        console.log("No action for this key.");
    }
}