import { SalaryUpdater } from './SalaryUpdater';
import { Employee } from './Employee';
export class RatingCalculator {
    calculatePercentIncrementFor(empList: Employee[]) {
        // Here is the logic for rating detection
        const listOfEmployeeWithRatinglessthan5 = 
        empList.filter(emp => emp.getRating() < 5);

        const listOfEmployeeWithRatinggreaterthan5 = 
        empList.filter(emp => emp.getRating() >= 5)
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

        const salaryUpdater = new SalaryUpdater();
        salaryUpdater.calculateRevisedSalary(listOfEmployeeWithRatinglessthan5, 20);
        salaryUpdater.calculateRevisedSalary(listOfEmployeeWithRatinggreaterthan5, 50);
    }
}