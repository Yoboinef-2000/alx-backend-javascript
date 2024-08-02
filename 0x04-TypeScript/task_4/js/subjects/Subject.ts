import { Subjects } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    constructor() {
      this.teacher = {
        firstName: '',
        lastName: '',
      };
    }

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
