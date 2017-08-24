import { Employee } from './Employee';
export class SalaryUpdater {
    calculateRevisedSalary(empList: Employee[], percentIncrement: number) {
        for(let i = 0; i < empList.length; i++) {
            let empObj = empList[i];
            let updatedSalary = empObj.getSalary() + (empObj.getSalary() * percentIncrement)/100; 
            empObj.setSalary(updatedSalary);
        }
    }
}