import { Subjects } from './Teacher';
import { Subjects as Subj } from './Subject';

export namespace Subjects {
  export class Java extends Subj.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}
