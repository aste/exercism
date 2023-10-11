//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { text } from "node:stream/consumers";

export class Cipher {
  constructor(key) {
    this.initializeKey(key);
  }

  static alphabet = "abcdefghijklmnopqrstuvwxyz";

  _randomLetter() {
    return Cipher.alphabet[Math.floor(Math.random() * 26)];
  }

  initializeKey(value) {
    if (typeof value == "string") {
      this._key = value.toLowerCase();
    } else {
      this._key = "";
      for (let i = 0; i < 100; i++) {
        this._key += this._randomLetter();
      }
    }
  }

  get key() {
    return this._key;
  }

  encode(inputText) {
    let encodedText = "";
    let i = 0;
    while (inputText[i] != undefined) {
      let inputCharIndex = Cipher.alphabet.indexOf(inputText[i]);
      let keyCharIndex = Cipher.alphabet.indexOf(this.key[i % this.key.length]);
      let cipheredIndex = (inputCharIndex + keyCharIndex) % 26;
      encodedText += Cipher.alphabet[cipheredIndex];
      i += 1;
    }
    return encodedText;
  }

  decode(encodedText) {
    let decodedText = "";
    let i = 0;
    while (encodedText[i] != undefined) {
      let inputCharIndex = Cipher.alphabet.indexOf(encodedText[i]);
      let keyCharIndex = Cipher.alphabet.indexOf(this.key[i % this.key.length]);
      let cipheredIndex = (inputCharIndex - keyCharIndex + 26) % 26;
      decodedText += Cipher.alphabet[cipheredIndex];
      i += 1;
    }
    return decodedText;
  }
}
