// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    console.log(`Today, we are learning about ${subject}.`);
  }
  grade(Student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }

  listsSubjects(array) {
    this.favSubjects = array;
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManagers extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(Student, subject) {
    console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);
  }
}

// INSTRUCTOR OBJECTS
const mrsAngel = new Instructor({
  name: "Mrs. Angel",
  age: 28,
  location: "Greenville",
  specialty: "CSS",
  favLanguage: "Less",
  catchPhrase: "I'm feeling loca."
});

const mrPanther = new Instructor({
  name: "Mr. Panther",
  age: 29,
  location: "Greenville",
  specialty: "HTML",
  favLanguage: "Any Markup Language",
  catchPhrase: "If at first you don't succeed, try try again."
});

// STUDENT OBJECTS
// Student favSubjects Arrays
const dougieFavSubjects = ["JavaScript", "HTML", "lunch"];
const sophieFavSubjects = ["nap time", "JQuery", "CSS"];

const dougie = new Student({
  name: "Dougie",
  age: 6,
  location: "Greenville",
  previousBackground: "K4",
  className: "K5",
  favSubjects: dougieFavSubjects
});

const sophie = new Student({
  name: "Sophie",
  age: 3,
  location: "Greenville",
  previousBackground: "no school",
  className: "Pre-K",
  favSubjects: sophieFavSubjects
});

// PROJECT MANAGER OBJECTS
const mrCollins = new ProjectManagers({
  name: "Mr. Collins",
  age: 36,
  location: "Greenville",
  specialty: "JavaScript",
  favLanguage: "JavaScript",
  catchPhrase: "Se la vie.",
  gradClassName: "Titans",
  favInstructor: "Mr. Anderson"
});

const mrsCatnip = new ProjectManagers({
  name: "Mrs. Catnip",
  age: 32,
  location: "Greenville",
  specialty: "JQuery",
  favLanguage: "JavaScript",
  catchPhrase: "If it ain't broke, don't fix it.",
  gradClassName: "Puss in Boots",
  favInstructor: "Mrs. Everdeen"
});

// OUTPUT - INSTRUCTOR OBJECTS
// From Parent Class
console.log(mrsAngel.name);

// From Instructor Class
console.log(mrPanther.specialty);

// Parent Class Methods
mrsAngel.speak();
mrPanther.speak();

// Instructor Class Methods
mrsAngel.demo(mrsAngel.specialty);
mrPanther.demo(mrPanther.specialty);
mrsAngel.grade(dougie, mrsAngel.specialty);
mrPanther.grade(sophie, mrPanther.specialty);

// OUTPUT - STUDENT OBJECTS
// From Parent Class
console.log(dougie.name);

// From Student Class
console.log(sophie.className);

// Parent Class Methods
dougie.speak();
sophie.speak();

// Student Class Methods
dougie.listsSubjects(dougieFavSubjects);
sophie.listsSubjects(sophieFavSubjects);
dougie.PRAssignment("JavaScript");
sophie.PRAssignment("CSS");
dougie.sprintChallenge("JQuery");
sophie.sprintChallenge("SQL");

// OUTPUT - PROJECTMANAGERS OBJECTS
// From Parent Class
console.log(mrCollins.name);

// From Instructor Class
console.log(mrsCatnip.catchPhrase);

// From ProjectManagers Class
console.log(mrsCatnip.gradClassName);

// Parent Class Methods
mrCollins.speak();
mrsCatnip.speak();

// Instructor Class Methods
mrCollins.demo(mrCollins.specialty);
mrsCatnip.demo(mrsCatnip.specialty);
mrCollins.grade(dougie, mrCollins.specialty);
mrsCatnip.grade(sophie, mrsCatnip.specialty);

// ProjectManagers Class Methods
mrCollins.standUp("webpt9");
mrsCatnip.standUp("webpt9_fri");
mrCollins.debugsCode(dougie, "JavaScript");
mrsCatnip.debugsCode(sophie, "JQuery");
