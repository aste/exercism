const numberOfLetters = 2;
const numberOfNumbers = 3;

export class Robot {
  static usedNames = new Set();

  // constructor, setting the initial private state of an instance of the Robot Class
  constructor() {
    this.reset()
  }

  _generateRandomName(numberOfLetters, numberOfNumbers) {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomName = "";

    for (let i = 0; i < numberOfLetters; i++) {
      let randomIndex = Math.floor(Math.random() * upperCaseLetters.length);
      randomName += upperCaseLetters[randomIndex];
    }

    for (let i = 0; i < numberOfNumbers; i++) {
      randomName += Math.floor(Math.random() * 10);
    }

    return randomName;
  }

  _getUniqueName() {
    let uniqueName;

    do {
      uniqueName = this._generateRandomName(numberOfLetters, numberOfNumbers);
    } while (Robot.usedNames.has(uniqueName));

    Robot.usedNames.add(uniqueName);

    return uniqueName;
  }

  reset() {
    this._name = this._getUniqueName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => {
  Robot.usedNames.clear();
};
