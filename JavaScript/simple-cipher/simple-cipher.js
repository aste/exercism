//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { text } from "node:stream/consumers";

export class Cipher {
  static alphabet = "abcdefghijklmnopqrstuvwxyz";

  constructor(key) {
    this.initializeKey(key);
  }

  randomLetter() {
    return Cipher.alphabet[Math.floor(Math.random() * 26)];
  }

  initializeKey(value) {
    this._key =
      typeof value === "string"
        ? value.toLowerCase()
        : Array.from({ length: 100 }, () => this.randomLetter()).join("");
  }

  get key() {
    return this._key;
  }

  encode(inputText) {
    let encodedText = "";
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      const inputCharIndex = Cipher.alphabet.indexOf(char);
      const keyCharIndex = Cipher.alphabet.indexOf(this.key[i % this.key.length]);
      const cipheredIndex = (inputCharIndex + keyCharIndex) % 26;
      encodedText += Cipher.alphabet[cipheredIndex];
    }
    return encodedText;
  }

  decode(encodedText) {
    let decodedText = "";
    for (let i = 0; i < encodedText.length; i++) {
      const char = encodedText[i];
      const inputCharIndex = Cipher.alphabet.indexOf(char);
      const keyCharIndex = Cipher.alphabet.indexOf(this.key[i % this.key.length]);
      const cipheredIndex = (inputCharIndex - keyCharIndex + 26) % 26;
      decodedText += Cipher.alphabet[cipheredIndex];
    }
    return decodedText;
  }
}
