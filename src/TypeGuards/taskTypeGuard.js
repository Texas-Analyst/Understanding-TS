"use strict";
exports.__esModule = true;
exports.setTaskType = exports.isTask = void 0;
var taskdefs_1 = require("../Models/taskdefs");
function isTask(item) {
    //   For unknown to work, MUST create a CLASS
    //  so that the 'instanceof' operator can
    // can be used to validate the type
    if (typeof item === "string") {
        console.log(item.length);
    }
    if (item && item instanceof taskdefs_1.Task) {
        console.log("This is object of type Task");
        return true;
    }
    return false;
}
exports.isTask = isTask;
function setTaskType(item) {
    if (!item) {
        return undefined;
    }
    if (isTask(item)) {
        return item;
    }
}
exports.setTaskType = setTaskType;
