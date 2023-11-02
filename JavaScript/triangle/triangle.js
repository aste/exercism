//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
  }

  testTriangle() {
    return this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a;
  }

  get isEquilateral() {
    return this.testTriangle() && this.a === this.b && this.b === this.c && this.a !== 0;
  }

  get isIsosceles() {
    return this.testTriangle() && (this.a === this.b || this.b === this.c || this.a === this.c);
  }

  get isScalene() {
    return this.testTriangle() && this.a !== this.b && this.b !== this.c && this.c !== this.a;
  }
}
