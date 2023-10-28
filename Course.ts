export class Course {

  grades = [];

  constructor(name) {
     this.name = name;
  }
 
  addGrade(grade) {
    this.grades.push(Number.parseFloat(grade));
  }

  total() {
    let count = this.grades.length;
    let total = this.grades.reduce((prev, curr) => prev + curr, 0);
    let avg = (total / count);
    console.log(total);
    console.log(avg);
    console.log('%s - %d exams - %f avg', this.name, count, avg);
  }
}