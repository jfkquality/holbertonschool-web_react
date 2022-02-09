'use strict';

// Task 5.

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  export class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  export function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher;
    }
    else {
      return new Director;
    }
  }
  const director = new Director;
  const teacher = new Teacher;
  
  console.log(typeof teacher.workTeacherTasks());
  // console.log(director.workDirectorTasks());
  console.log(director instanceof Director);
  console.log(teacher instanceof Teacher);
  // console.log(createEmployee(200));
  
  const emp1 = createEmployee(200);
  console.log(emp1);
  console.log(emp1.workFromHome());

  const emp2 = createEmployee(1000);
  console.log(emp2);
  console.log(emp2.workFromHome());

  const emp3 = createEmployee('$500');
  console.log(emp3);
  console.log(emp3.workFromHome());