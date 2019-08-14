// CODE here for your Lambda Classes

class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attrs, specialty, favLanguage, catchPhrase) {
    super(attrs);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    console.log(`Today, we are learning about ${subject}.`);
  }
  grade(Student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(attrs, previousBackground, className, favSubjects) {
    super(attrs);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listsSubjects(array) {
    this.favSubjects = array;
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${Student.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManagers extends Instructor {
  constructor(attrs, gradClassName, favInstructor) {
    super(attrs);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
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
  location: "Greenville",
  age: 6,
  favLanguage: "Douganese",
  favSubjects: dougieFavSubjects,
  className: "Homeroom",
  previousBackground: "no school"
});

const sophie = new Student({
  name: "Sophie",
  location: "Greenville",
  age: 3,
  favLanguage: "Sophanese",
  favSubjects: sophieFavSubjects,
  className: "Nap Time",
  previousBackground: "k4"
});

// OUTPUT - STUDENT OBJECTS
console.log(sophie.previousBackground);
dougie.PRAssignment("Math");
dougie.listsSubjects(dougieFavSubjects);
sophie.listsSubjects(sophieFavSubjects);
