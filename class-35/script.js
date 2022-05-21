class Animal {
  constructor(name = "Lav", age = 0) {
    this.name = name;
    this.age = age;
  }
  roar() {
    return "";
  }
  eating() {
    return "give me food";
  }
}

class Wolf extends Animal {
  constructor(name, age, alpha = false) {
    super(name, age);
    this.alpha = alpha;
  }
  roar() {
      return "auuuu"
  }
}

const wolfObj = new Wolf("nidzo", 19, true);
console.log(wolfObj);
