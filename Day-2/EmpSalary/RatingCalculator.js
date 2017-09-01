"use strict";
exports.__esModule = true;
var SalaryUpdater_1 = require("./SalaryUpdater");
var RatingCalculator = (function () {
    function RatingCalculator() {
    }
    RatingCalculator.prototype.calculatePercentIncrementFor = function (empList) {
        // Here is the logic for rating detection
        var listOfEmployeeWithRatinglessthan5 = empList.filter(function (emp) { return emp.getRating() < 5; });
        var listOfEmployeeWithRatinggreaterthan5 = empList.filter(function (emp) { return emp.getRating() >= 5; });
        // empList.filter(function(emp) {
        //     return emp.getRating() < 5;
        // })
        // let empTemp = [];
        // for (let i = 0; i < empList.length; i++){
        //     let empObj = empList[i];
        //     if (empObj.getRating() < 5) {
        //       empTemp.push(empObj);  
        //     }
        // }
        var salaryUpdater = new SalaryUpdater_1.SalaryUpdater();
        salaryUpdater.calculateRevisedSalary(listOfEmployeeWithRatinglessthan5, 20);
        salaryUpdater.calculateRevisedSalary(listOfEmployeeWithRatinggreaterthan5, 50);
    };
    return RatingCalculator;
}());
exports.RatingCalculator = RatingCalculator;
