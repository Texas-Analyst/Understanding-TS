"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.createdBy = "";
        this.dateCreated = new Date();
        this.status = "";
        // constructor(id: number, name: string, description: string,
        //             createdBy: string, dateCreated: Date, status: string ) {
        //               this.id = id;
        //               this.name = name;
        //               this.description = description;
        //               this.createdBy = createdBy;
        //               this.dateCreated = dateCreated;
        //               this.status = status;
        // }
    }
    return Task;
}()); // end class
exports.Task = Task;
