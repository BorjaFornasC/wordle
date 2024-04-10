export class EnterAction {
    execute(game) {
        game.enterPressed();
    }
}
export class BackspaceAction {
    execute(game) {
        game.backspacePressed();
    }
}
export class newLetterAction {
    constructor(code) {
        this.code = code;
    }
    execute(game) {
        game.newLetter(this.code);
    }
}
export class NoAction {
    execute(game) {
        // Manejar la situación de "ninguna acción" aquí, si es necesario
        console.log("No action for this key.");
    }
}
