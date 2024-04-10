export interface IUIChanger {
    changeBackgroundKey(key: string): void;
    deleteLetter(turn: number, position: number): void;
    setNewLetter(turn: number, position: number, letter: string): void;
    changeBackgroundPosition(turn: number, position: number, state: string) : void;
}