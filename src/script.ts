import {Word} from "./Word.js";
import {Game} from "./Game.js";
import { UIChanger } from "./UserInterface/UIChanger.js";
import { LetterChecker } from "./LetterCheck/LetterChecker.js";
import { TransformKeys } from "./KeyManager/TransformKeys.js";
import { IUIChanger } from "./UserInterface/IUIChanger.js";


const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO", "CORRO", "RAMPA", "RATON", "TECLA", "HORNO", "CELTA", "SALMO",
"DEDAL", "SONDA", "LAPSO", "SALON", "CESTA", "PESCA", "MAREA", "AUDAZ", "CAÑAS", "TESIS", "DOSIS", "ATRAS", "TEINA", "SUSHI", "CHICO", "LOGRO", "PALOS", "CETRO", "REGAR", "SIGLO", "CUEVA", 
"VOLAR", "NUNCA", "TEXTO", "TURNO", "GRANO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const userInterface: IUIChanger = new UIChanger();
const letterChecker : LetterChecker = new LetterChecker();
const keyManager : ITransformKeys = new TransformKeys();
const game: Game = new Game(pickedWord, userInterface, letterChecker, keyManager);

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});
