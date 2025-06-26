import { ITask, Task } from "./Models/taskdefs";
// import {taskObject } from './Models/tasks';
// import { isTask } from "./TypeGuards/taskTypeGuard";
export const tasks: ITask[] = [
  {
    id: 1,
    name: "Clean",
    description: "wipe all counters, tables, sweep + mop all floors",
    createdBy: "JeRon Davis",
    dateCreated: new Date(),
    status: "In Progress",
  },
  {
    id: 2,
    name: "Dishes",
    description: "Wash and put away all",
    createdBy: "JeRon Davis",
    dateCreated: new Date(),
    status: "In Progress",
  },
  {
    id: 3,
    name: "Salads Bar",
    description: "make daily salads",
    createdBy: "JeRon Davis",
    dateCreated: new Date(),
    status: "Pending",
  },
  {
    id: 4,
    name: "Cook",
    description: "cook entrees",
    createdBy: "JeRon Davis",
    dateCreated: new Date(),
    status: "Pending",
  },
  {
    id: 5,
    name: "Cash Register",
    description: "get cash for transactions",
    createdBy: "JeRon Davis",
    dateCreated: new Date(),
    status: "Pending",
  },
];

// let i: number = tasks.findIndex((task) => task.name === 'Cash Register');
// alert(`${tasks[i]?.name} is described by: ${tasks[i]?.description} and has status:  ${tasks[i]?.status}`);
// const task1: undefined | ITask = tasks.find((task, index) =>  tasks[index].name === 'Cash Register');
// alert(`${task1?.name} is described by: ${task1?.description} and has status:  ${task1?.status}`);

// const tasks: Task[] = [
//   new Task( 1, 'Clean', 'wipe all counters, tables, sweep + mop all floors', 'JeRon Davis',  new Date(), 'In Progress'),
//   new Task( 2, 'Dishes', 'Wash and put away all', 'JeRon Davis', new Date(), 'In Progress'),
//   new Task( 3, 'Salads Bar','make daily salads',  'JeRon Davis',  new Date(), 'Pending'),
//   new Task( 4, 'Cook', 'cook entrees',   'JeRon Davis',  new Date(), 'Pending'),
//   new Task( 5, 'Cash Register', 'get cash for transactions', 'JeRon Davis', new Date(), 'Pending'),
//   ];
console.log(tasks[1].name);
console.log(tasks[1].dateCreated);
console.log(tasks[1].description);
localStorage.clear();
tasks.forEach((task, index) => {
  console.log("Storing a new task");
  localStorage.setItem(
    "task" + (index + 1).toString(),
    JSON.stringify(tasks[index])
  );
});

let task: string | null = localStorage.getItem("task4");
let jsonData: JSON = typeof task === "string" ? JSON.parse(task) : null;
console.log(jsonData);
let taskData: ITask = {} as ITask;
let nextTask = Object.assign(taskData, jsonData);
// if (isTask(taskData)) {
//   console.log(`Typeguard verifies type to be Task`);
// }
console.time();
console.log("TO GOD BE ALL GLORY!! I have learned someething new");
console.log(taskData.description);
console.log(taskData.name);
console.log(taskData.dateCreated);
console.log(taskData.createdBy);
console.timeEnd();
