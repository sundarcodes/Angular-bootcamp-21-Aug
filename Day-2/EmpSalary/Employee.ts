export class Employee {
    id: number;
    name: string;
    salary: number;
    designation: string;
    rating: number;

    constructor(id: number, 
    name: string, currentSalary: number, 
    desig: string, rating: number) {
        this.id = id;
        this.salary = currentSalary;
        this.designation = desig;
        this.rating = rating;
    }

    getRating() {
        return this.rating;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(sal: number) {
        this.salary = sal;
    }
}