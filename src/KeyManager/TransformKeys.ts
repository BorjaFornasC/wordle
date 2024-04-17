import { ITransformKeys } from "./ITransformKeys.js";

export const VALID_LETTER_CODES = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];

export class TransformKeys implements ITransformKeys{
    transformLetterToKey(letter: string): string {
        return "Key" + letter;
    }
    transformKeyToLetter(code: string): string {
        let letter: string = "";
        if (code == "Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }
}
