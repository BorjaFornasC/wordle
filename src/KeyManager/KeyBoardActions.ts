import { Game } from "../Game.js";

//Patrón Strategy
export interface KeyboardAction {
    execute(game: Game): void;
}

export class EnterAction implements KeyboardAction {
    execute(game: Game): void {
        game.enterPressed();
    }
}

export class BackspaceAction implements KeyboardAction {
    execute(game: Game): void {
        game.backspacePressed();
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
    execute(game: Game): void {
        game.newLetter(this.code);
    }
}

export class NoAction implements KeyboardAction {
    execute(game: Game): void {
        console.log("No action for this key.");
    }
}