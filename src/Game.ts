export class Game{
    #pickedWord: string
    #actualWord: string = ""
    #turn: number = 1
    #actualPosition: number = 0

    constructor(pickedWord: string) {
        this.#pickedWord = pickedWord;
    }

    get pickedWord() {
        return this.#pickedWord;
    }
    set pickedWord(word) {
        this.#pickedWord = word;
    }

    get actualWord() {
        return this.#actualWord;
    }
    set actualWord(word) {
        this.#actualWord = word;
    }

    get turn() {
        return this.#turn;
    }
    set turn(num) {
        this.#turn = num;
    }

    get actualPosition() {
        return this.#actualPosition;
    }
    set actualPosition(num) {
        this.#actualPosition = num;
    }
    
    updateAfterANewWord = (): void => {
        this.#turn = this.#turn + 1;
        this.#actualPosition = 0;
        this.#actualWord = "";
    }
    
    deleteLetterToActualWord() : void {
        this.#actualPosition -= 1;
        this.#actualWord = this.#actualWord.slice(0, this.#actualPosition);
    }

    addNewLetterToActualWord(letter : string) : void {
        this.#actualPosition = this.#actualPosition + 1;
        this.#actualWord += letter;
    }
}