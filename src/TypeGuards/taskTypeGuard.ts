import { ITask } from "../Models/taskdefs";
import { Task } from "../Models/taskdefs";

export function isTask(item: unknown): boolean {
  //   For unknown to work, MUST create a CLASS
  //  so that the 'instanceof' operator can
  // can be used to validate the type
  if (typeof item === "string") {
    console.log(item.length);
  }
  if (item && item instanceof Task) {
    console.log(`This is object of type Task`);
    return true;
  }
  return false;
}

export function setTaskType(item: unknown): ITask | undefined {
  if (!item) {
    return undefined;
  }
  if (isTask(item)) {
    return <ITask>item;
  }
}
