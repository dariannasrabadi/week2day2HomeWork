$(document).ready(onReady);

function onReady(){//Function full of listeners
$('#submitButton').on('click', employeeSubmited);
$('tbody').on('click', '.tbodyRow', employeeHighlighted);
$('#deleteButton').on('click', removeEmployee);
}

class Employee { // start class

  constructor(firstName, lastName, id, job, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.job = job;
    this.salary = salary;
    this.status = 'Employed';
  }// end class constructor
} // end of class
var employee = []; // storage of employees array
var combinedSalaries = 130000/12; // storage of all employee salaries (130000 was the initial one on the HTML) now its this result written.

/****START OF employeeSubmited function****/
function employeeSubmited(){
var firstName = $('#firstNameInput').val();
var lastName = $('#lastNameInput').val();
var id = $('#idInput').val();
var job = $('#jobInput').val();
var salary = $('#salaryInput').val();

employee.push(new Employee(firstName, lastName, id, job, salary)); // Internal log of all employees previous and current

var $row = $('<tr class="tbodyRow">');

if (firstName === ('') || lastName === ('') || id === ('') || job === ('') || salary === ('')) {// So that no fields are empty.
  alert('Please fill out all information');
}
else if (salary < 0) { //Salary cant be less than 0. 0 is free so yay free work.
  alert('Please provide proper salary');
  $('#salaryInput').val('').focus();//empty the value and focus on it
}
else { //start else
$row.append('<td class="ifDeleted">' + firstName + '</td>'); //Appending it to the TR
$row.append('<td class="ifDeleted">' + lastName + '</td>'); // Appending it to TR
$row.append('<td class="ifDeleted">' + id + '</td>'); // Appending it to TR
$row.append('<td class="ifDeleted">' + job + '</td>'); // Appending it to TR
$row.append('<td>' + salary + '</td>'); // Appending it to TR
$('tbody').append($row); // Appending to table body
combinedSalaries += (parseInt(salary)/12);

$('#tableFootCell').empty().append(combinedSalaries);

$('input').val('');
console.log(employee);
}//end else
}// End employee submitted function
function employeeHighlighted(){ //start
  //When a td is clicked the parent row its in will have a class added.
  //then that class background color will change to indicate it has been selected.
  // this way there can be multiple employees removed.
$(this).toggleClass('highlighted');
}

function removeEmployee(){
// remove the TR of the highlighted classes!
  $('.highlighted').remove();
}
