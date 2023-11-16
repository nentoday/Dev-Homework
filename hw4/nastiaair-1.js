class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        return this.cipher(message, 'encode');
    }

    decode(message) {
        return this.cipher(message, 'decode');
    }

    cipher(message, operation) {
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i];

            if (this.alphabet.includes(char)) {
                const keyChar = this.key[keyIndex % this.key.length];
                const shift = operation === 'encode' ? this.alphabet.indexOf(keyChar) : -this.alphabet.indexOf(keyChar);

                const newIndex = (this.alphabet.indexOf(char) + shift + this.alphabet.length) % this.alphabet.length;

                const encryptedChar = this.alphabet[newIndex];
                result += encryptedChar;

                keyIndex++;
            } else {
                result += char;
            }
        }

        return result;
    }
}


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';
const c = new VigenereCipher(key, alphabet);

console.log(c.encode('codewars')); // returns 'rovwsoiv'
console.log(c.decode('laxxhsj'));  // returns 'waffles'
console.log(c.encode('CODEWARS')); // returns 'CODEWARS'
