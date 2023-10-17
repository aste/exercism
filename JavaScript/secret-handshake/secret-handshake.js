//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (givenNumber) => {
  let secretHandshake = [];
  let reverseHandshake = false;

  const secretActions = {
    0: "wink",
    1: "double blink",
    2: "close your eyes",
    3: "jump",
  };

  // convert to binary using unsigned right shift
  givenNumber = givenNumber.toString(2);

  for (let i = givenNumber.length - 1, j = 0; i >= 0; i--, j++) {
    if (givenNumber[i] === "1") {
      if (j === 4) {
        reverseHandshake = true;
      } else {
        secretHandshake.push(secretActions[j]);
      }
    }
  }

  if (reverseHandshake) secretHandshake.reverse();
  console.log(secretHandshake);
  return secretHandshake;
};
