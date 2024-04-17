import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { UIChanger } from "./UserInterface/UIChanger.js";
import { LetterChecker } from "./LetterCheck/LetterChecker.js";
import { TransformKeys } from "./KeyManager/TransformKeys.js";
import { GameController } from "./GameController.js";
const wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO", "CORRO", "RAMPA", "RATON", "TECLA", "HORNO", "CELTA", "SALMO",
    "DEDAL", "SONDA", "LAPSO", "SALON", "CESTA", "PESCA", "MAREA", "AUDAZ", "CAÑAS", "TESIS", "DOSIS", "ATRAS", "TEINA", "SUSHI", "CHICO", "LOGRO", "PALOS", "CETRO", "REGAR", "SIGLO", "CUEVA",
    "VOLAR", "NUNCA", "TEXTO", "TURNO", "GRANO", "POETA", "JERGA", "BRUJA", "METAL", "BROMA", "REHEN", "LENTO", "LEGAL", "VACAS", "CABRA", "TRAMO", "AMADO", "RAZON", "PATIN", "LATIN", "NITRO",
    "GRITO", "TOLDO", "GOLFO"]);
const pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
const userInterface = new UIChanger();
const letterChecker = new LetterChecker();
const keyTransformer = new TransformKeys();
const game = new Game(pickedWord);
const gameControl = new GameController(game, userInterface, letterChecker, keyTransformer);
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
    gameControl.newKeyPressed(e.target.value);
}));
document.addEventListener("keydown", (e) => {
    gameControl.newKeyPressed(e.code);
});
