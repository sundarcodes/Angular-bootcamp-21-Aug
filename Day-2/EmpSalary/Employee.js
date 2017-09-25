"use strict";
exports.__esModule = true;
var Employee = (function () {
    function Employee(id, name, currentSalary, desig, rating) {
        this.id = id;
        this.salary = currentSalary;
        this.designation = desig;
        this.rating = rating;
    }
    Employee.prototype.getRating = function () {
        return this.rating;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (sal) {
        this.salary = sal;
    };
    return Employee;
}());
exports.Employee = Employee;
