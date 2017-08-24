import { RatingCalculator } from './RatingCalculator';
import { Employee } from './Employee';


const masterEmployeesList = [];
masterEmployeesList.push(new Employee(1, 'aaa', 10000, 'Junior dev', 3 ));
masterEmployeesList.push(new Employee(2, 'bbb', 20000, 'Senior dev', 7 ));
masterEmployeesList.push(new Employee(3, 'ccc', 30000, 'Lead dev', 4 ));
masterEmployeesList.push(new Employee(4, 'ddd', 40000, 'Director', 6 ));

const ratingCalculator = new RatingCalculator();
ratingCalculator.calculatePercentIncrementFor(masterEmployeesList);


