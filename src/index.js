const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length - 9; i += 10) {
    let letterDecoded = "";
    let letter = expr.slice(i, i + 10);
    if (letter == "**********") letterDecoded = " ";
    else {
      for (let j = 0; j < letter.length - 1; j += 2) {
        if (letter.slice(j, j + 2) != "00") {
          letterDecoded += letter.slice(j, j + 2) == "10" ? "." : "-";
        }
      }
    }
    result += letterDecoded == " " ? letterDecoded : MORSE_TABLE[letterDecoded];
  }
  return result;
}

module.exports = {
  decode,
};
