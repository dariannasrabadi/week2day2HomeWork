$(document).ready(onReady);

function onReady(){//Function full of listeners
$('#submitButton').on('click', employeeSubmited);
$('tbody').on('click', '.tbodyRow', employeeHighlighted);
$('#deleteButton').on('click', removeEmployee);
$("#firstNameInput, #lastNameInput, #idInput, #jobInput, #salaryInput").keyup(function(event) { // Enter key listener
    if (event.keyCode === 13) {
        $("#submitButton").click();
    }
});
}

class Employee { // start class

  constructor(firstName, lastName, id, job, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.job = job;
    this.salary = salary;
    // this.status = 'Employed'; // Have to experiment more to find a way to change the specific highlighted employees status once deleted so commenting this out for now.
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
$row.append('<td class="fC">' + firstName + ' ' + '</td>'); //Appending it to the TR & adding space for data portion.
$row.append('<td class="lC">' + lastName + ' ' + '</td>'); // Appending it to TR
$row.append('<td class="iC">' + id + ' ' + '</td>'); // Appending it to TR
$row.append('<td class="jC">' + job + ' ' + '</td>'); // Appending it to TR
$row.append('<td class="sC">' + salary + '</td>'); // Appending it to TR
$('tbody').append($row); // Appending to table body
combinedSalaries += (parseInt(salary)/12);
// HARD & PRO mode instructions were confusing. It says dont need to change the removed employees salary on total then it says on pro to remove it form data. Really confused.
$('#tableFootCell').empty().append(combinedSalaries);

/*TESTING .data() HERE*/
var employeeActiveData;
$('table').data(('ActiveEmployee ' + $('tbody tr').length), firstName+' '+lastName+' '+id+' '+job+' '+salary); //Adding all new employees to this.

console.log($('table').data());
/*END of .data() HERE*/

$('input').val('');
console.log('array of employees:', employee);
}//end else
}// End employee submitted function
function employeeHighlighted(){ //start
  //When a td is clicked the parent row its in will have a class added.
  //then that class background color will change to indicate it has been selected.
  // this way there can be multiple employees removed.
$(this).children().toggleClass('highlighted'); //made the TD highlighted instead.
}
var i = 1; // for retired employee count.
function removeEmployee(){
/*Additional .data() information*/
  $('table').data(('RetiredEmployee ' + i), $('.highlighted').text()); //grabs data from the cells removed.
  $('table').removeData(('ActiveEmployee ' + (1 + ($('.highlighted').closest('tr').index())*1))); // able to work only for the first removed name. then its broken, need to learn of a proper way.
// fixed the remove data above to remove proper index number but still only works depending on how you add it.

console.log($('table').data());
i++;
// remove the TR of the highlighted classes!
  $('.highlighted').closest('tr').remove(); //removing parents of the highlighted.
  // closest tr  to find data of a specific cell it woukld be .find(td:eq(0)).text()

}
