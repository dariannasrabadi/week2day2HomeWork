$(document).ready(onReady);

function onReady(){//Function full of listeners
$('#submitButton').on('click', employeeSubmited);

}

class Employee { // start class

  constructor(firstName, lastName, id, job, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.job = job;
    this.salary = salary;
  }// end class constructor
} // end of class
var employee = []; // storage of employees array
var combinedSalaries = 0; // storage of all employee salaries
function employeeSubmited(){ //START OF employeeSubmited function
var firstName = $('#firstNameInput').val();
var lastName = $('#lastNameInput').val();
var id = $('#idInput').val();
var job = $('#jobInput').val();
var salary = $('#salaryInput').val();

employee.push(new Employee(firstName, lastName, id, job, salary)); // Internal log of all employees previous and current

var $row = $('<tr>');

if (firstName === ('') || lastName === ('') || id === ('') || job === ('') || salary === ('')) { //TEMP IF STATEMENT FOR MAKING SURE ALL ARE FILLED. WILL ADD LATER
  alert('Please fill out all information');
}// end if statement
else { //start else
$row.append('<td>' + firstName + '</td>'); //Appending it to the TR
$row.append('<td>' + lastName + '</td>'); // Appending it to TR
$row.append('<td>' + id + '</td>'); // Appending it to TR
$row.append('<td>' + job + '</td>'); // Appending it to TR
$row.append('<td>' + salary + '</td>'); // Appending it to TR
$('tbody').append($row); // Appending to table body
combinedSalaries += parseInt(salary);
$('#tableFootCell').empty().append(combinedSalaries);

$('input').val('');
console.log(employee);
}//end else
}
