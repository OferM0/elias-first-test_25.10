import { Person } from "./person.js";
export class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
}

let st1 = new Student("ofer", "mordehai", 21, 99);
st1.printAge();
st1.printName();
