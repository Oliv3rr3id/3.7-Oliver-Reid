// JavaScript Document
alert("js attatached");
var totalCost = 0;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}if (mm < 10) {
    mm = '0' + mm
}today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateInput").setAttribute("min", today);

function boatBooking(){
	var checkInDate = document.getElementById("dateInput").value;
	alert(checkInDate);
	var amountOfHours = document.getElementById("hoursInput").value;
	alert(amountOfHours);
	var costofReservation = this.dataset.price;
	alert(costofReservation);
	var boatTime = this.dataset.value;
	alert(boatTime);
	
	extrasOption = [];
	var addExtras = document.getElementsByClassName("extrasCheckbox");
	var costOfExtras = 0;
	for (i = 0; i < addExtras.length; i++) {
		if (addExtras[i].checked) {
			extrasOption.push(addExtras[i].parentNode.textContent.trim());
			costOfExtras += Number(addExtras[i].dataset.price);
			alert(extrasOption);
			alert(costOfExtras);
		}
	}
	totalCost += Number(costofReservation) + Number(costOfExtras);
	outputSummary(checkInDate, amountOfHours, boatTime, costofReservation, extrasOption, costOfExtras)
}

function outputSummary(checkInDate, amountOfHours, boatTime, costofReservation, extrasOption, costOfExtras){
	outDate.innerHTML = checkInDate;
	outHours.innerHTML = amountOfHours;
	outTime.innerHTML = boatTime;
	outPrice.innerHTML = "$" + costofReservation;
	outExtras.innerHTML = extrasOption;
	outExtrasPrice.innerHTML = costOfExtras;
	outTotal.innerHTML = totalCost;
	checkInputs(checkInDate, amountOfHours, boatTime, costofReservation, extrasOption, costOfExtras)
}

var card = document.getElementsByClassName("card");
for (var i = 0; i < card.length; i++) {
	card[i].addEventListener("click", boatBooking);
}

function checkInputs() {
	 if (termsAndConditions.checked) {
        alert("Terms box is checked");
    } else {
        alert("Terms box is not checked");
        return;
    }
	var firstName = document.getElementById('firstNameInput').value;
    var lastName = document.getElementById('lastNameInput').value;
    var age = document.getElementById('ageInput').value;
	var license = document.getElementById('licenseInput').value;
	var cellPhone = document.getElementById('cellphoneInput').value;
	//store all of the customer details as variables
	alert(firstName + lastName + age + email);
    alert(checkInDate)
}











