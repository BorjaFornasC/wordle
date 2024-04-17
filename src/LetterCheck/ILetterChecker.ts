import { Game } from "../Game.js";
import { IUIChanger } from "../UserInterface/IUIChanger.js";

export interface ILetterChecker {
    checkLetters(game: Game, userInterface: IUIChanger): void;
}