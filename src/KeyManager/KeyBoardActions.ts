import { Game } from "../Game.js";

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
    constructor(private code: string) {}

    execute(game: Game): void {
        game.newLetter(this.code);
    }
}

export class NoAction implements KeyboardAction {
    execute(game: Game): void {
        // Manejar la situación de "ninguna acción" aquí, si es necesario
        console.log("No action for this key.");
    }
}