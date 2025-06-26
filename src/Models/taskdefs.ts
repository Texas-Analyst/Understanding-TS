export interface ITask {
  id: number;
  name: string;
  description: string;
  createdBy: string;
  dateCreated: Date;
  status: string;
} // end interface

export class Task implements ITask {
  id: number = 0;
  name: string = "";
  description: string = "";
  createdBy: string = "";
  dateCreated: Date = new Date();
  status: string = "";
  // constructor(id: number, name: string, description: string,
  //             createdBy: string, dateCreated: Date, status: string ) {
  //               this.id = id;
  //               this.name = name;
  //               this.description = description;
  //               this.createdBy = createdBy;
  //               this.dateCreated = dateCreated;
  //               this.status = status;
  // }
} // end class
