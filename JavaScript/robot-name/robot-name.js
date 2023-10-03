// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  static usedNames = new Set();

  // constructor, setting the initial private state of an instance of the Robot Class
  constructor() {
    this._name = this.getUniqueName();
  }

  generateRandomName(numberOfLetters, numberOfNumbers) {
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

  getUniqueName() {
    let uniqueName;

    do {
      uniqueName = this.generateRandomName(2, 3);
    } while (Robot.usedNames.has(uniqueName));

    Robot.usedNames.add(uniqueName);

    return uniqueName;
  }

  reset() {
    this._name = this.getUniqueName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => {
  Robot.usedNames.clear();
};
