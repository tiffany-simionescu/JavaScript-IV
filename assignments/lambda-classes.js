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

// Student favSubjects Arrays
const dougieFavSubjects = ["art", "music", "lunch"];
const sophieFavSubjects = ["nap time", "dance", "art"];

// STUDENT OBJECTS
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
  specialty: "Science",
  favLanguage: "French",
  catchPhrase: "Se la vie.",
  gradClassName: "Titans",
  favInstructor: "Mr. Anderson"
});

const mrsCatnip = new ProjectManagers({
  name: "Mrs. Catnip",
  age: 32,
  location: "Greenville",
  specialty: "Arts",
  favLanguage: "Japanese",
  catchPhrase: "If it ain't broke, don't fix it.",
  gradClassName: "Puss in Boots",
  favInstructor: "Mrs. Everdeen"
});

// OUTPUT - INSTRUCTOR OBJECTS

// OUTPUT - STUDENT OBJECTS

// From Parent Class
console.log(dougie.name);

// From Student Class
console.log(sophie.className);

// Parent Class Method
dougie.speak();
sophie.speak();

// Student Class Method
dougie.listsSubjects(dougieFavSubjects);
sophie.listsSubjects(sophieFavSubjects);
dougie.PRAssignment("Math");
sophie.PRAssignment("Art");
dougie.sprintChallenge("Science");
sophie.sprintChallenge("Recess");
