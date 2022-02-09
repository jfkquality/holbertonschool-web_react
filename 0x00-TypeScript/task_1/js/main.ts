// Task 1.

export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
  };
  
  console.log(teacher3);
  
  // Task 2.

interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
  };
  
  console.log(director1);
  
  // Task 3.

interface printTeacherFunction {
    (name1: string, name2: string): string;
  }
  
  export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return firstName.charAt(0) + '. ' + lastName;
  }
  
  const teach: printTeacherFunction = printTeacher;
  
  console.log(teach('John', 'Knight'));
  
  // Task 4.

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
    displayName(): string;
    workOnHomework(): string;
  }
  
  export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass('Guillaume', 'Salva');
  console.log(student.firstName);
  console.log(student.lastName);
  console.log(student.workOnHomework());
  console.log(student.displayName());
  