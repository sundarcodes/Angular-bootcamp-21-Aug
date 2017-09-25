"use strict";
exports.__esModule = true;
var SalaryUpdater = (function () {
    function SalaryUpdater() {
    }
    SalaryUpdater.prototype.calculateRevisedSalary = function (empList, percentIncrement) {
        for (var i = 0; i < empList.length; i++) {
            var empObj = empList[i];
            var updatedSalary = empObj.getSalary() + (empObj.getSalary() * percentIncrement) / 100;
            empObj.setSalary(updatedSalary);
        }
    };
    return SalaryUpdater;
}());
exports.SalaryUpdater = SalaryUpdater;
