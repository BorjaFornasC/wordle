import { MAX_WORD_SIZE } from "../env.js";
export class LetterChecker {
    constructor() {
        this.checkLetters = (game) => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            let numberOfCoincidencesActualTry = 0;
            let stringToPaint = "";
            let actualTry = "";
            const MIN_COINCIDENCES = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                stringToPaint = "wrongLetter";
                actualLetter = game.actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (game.pickedWord.match(pattern) || []).length;
                actualTry += actualLetter;
                numberOfCoincidencesActualTry = (actualTry.match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord > MIN_COINCIDENCES) {
                    if (actualLetter == game.pickedWord[i]) {
                        stringToPaint = "rightLetter";
                        this.changeMisplacedLetters(actualTry, actualLetter, numberOfCoincidencesPickedWord, game);
                    }
                    else {
                        stringToPaint = this.checkMisplacedLetters(numberOfCoincidencesActualTry, numberOfCoincidencesPickedWord);
                    }
                }
                game.userInterface.changeBackgroundPosition(game.turn, i, stringToPaint);
            }
        };
    }
    update(game) {
        this.checkLetters(game);
    }
    countRightLetters(actualTry, actualLetter, pickedWord) {
        let occurrences = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (actualTry[i] === pickedWord[i] && actualTry[i] === actualLetter) {
                occurrences++;
            }
        }
        return occurrences;
    }
    changeMisplacedLetters(actualTry, actualLetter, numberOfCoincidencesPickedWord, game) {
        let isFirst = true;
        const MAX_MISPLACED_WITH_RIGHT_LETTERS = 1;
        const MIN_COINCIDENCES = 1;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (actualTry[i] === actualLetter) {
                if (numberOfCoincidencesPickedWord > MIN_COINCIDENCES) {
                    if (this.countRightLetters(actualTry, actualLetter, game.pickedWord) > MAX_MISPLACED_WITH_RIGHT_LETTERS) {
                        if (actualTry[i] !== game.pickedWord[i]) {
                            game.userInterface.changeBackgroundPosition(game.turn, i, "wrongLetter");
                        }
                    }
                    else {
                        if (isFirst) {
                            isFirst = false;
                        }
                        else {
                            if (actualTry[i] !== game.pickedWord[i]) {
                                game.userInterface.changeBackgroundPosition(game.turn, i, "wrongLetter");
                            }
                        }
                    }
                }
                else if (actualTry[i] !== game.pickedWord[i]) {
                    game.userInterface.changeBackgroundPosition(game.turn, i, "wrongLetter");
                }
            }
        }
    }
    checkMisplacedLetters(numberOfCoincidencesActualTry, numberOfCoincidencesPickedWord) {
        const MAX_COINCIDENCES = 2;
        const MIN_DIFFERENCE = 1;
        const MIN_COINCIDENCES = 1;
        let differenceOfCoincidences = Math.abs(numberOfCoincidencesActualTry - numberOfCoincidencesPickedWord);
        if (differenceOfCoincidences < MIN_DIFFERENCE) {
            return "misplacedLetter";
        }
        else if (numberOfCoincidencesPickedWord > MIN_COINCIDENCES && numberOfCoincidencesActualTry < MAX_COINCIDENCES) {
            return "misplacedLetter";
        }
        else {
            return "wrongLetter";
        }
    }
}
