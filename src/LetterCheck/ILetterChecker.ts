import { Game } from "../Game.js";

export interface ILetterChecker {
    checkLetters(game: Game): void;
}