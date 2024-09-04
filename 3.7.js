// JavaScript Document
alert("js attatached");
var totalCost = 0;

function boatBooking(){
	var checkInDate = document.getElementById("dateInput").value;
	if (document.getElementById("dateInput").validity.valueMissing) {
		alert("Please enter a valid first name");
		document.getElementById("errorMessage1").innerHTML = "Please enter a valid date";
		return;
	} else {
		document.getElementById("errorMessage2").innerHTML = "";
	}var amountOfHours = document.getElementById("hoursInput").value;
	if (document.getElementById("hoursInput").validity.valueMissing ||document.getElementById("hoursInput").validity.rangeUnderflow ||document.getElementById("hoursInput").validity.rangeOverflow) {
		alert("Please enter a valid amount");
		document.getElementById("errorMessage2").innerHTML = "Please enter a valid amount of hours";
		return;
	} else {
		document.getElementById("errorMessage3").innerHTML = "";
	}var amountofGuests = document.getElementById("guestInput").value;
	if (document.getElementById("guestInput").validity.valueMissing ||document.getElementById("guestInput").validity.rangeUnderflow ||document.getElementById("guestInput").validity.rangeOverflow) {
		alert("Please enter a valid amount");
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid amount of hours";
		return;
	} else {
		document.getElementById("errorMessage3").innerHTML = "";
	}var costofReservation = this.dataset.price;
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
	var bookingData = {
        checkInDate: checkInDate,
        amountOfHours: amountOfHours,
        amountofGuests: amountofGuests,
        boatTime: boatTime,
        costofReservation: costofReservation,
        extrasOption: extrasOption,
        costOfExtras: costOfExtras,
        totalCost: totalCost
    };

    outputSummary(bookingData);
    return bookingData;
}

function outputSummary(bookingData){
	document.getElementById("outDate").innerHTML = bookingData.checkInDate;
    document.getElementById("outHours").innerHTML = bookingData.amountOfHours;
    document.getElementById("outTime").innerHTML = bookingData.boatTime;
    document.getElementById("outPrice").innerHTML = "$" + bookingData.costofReservation;
    document.getElementById("outExtras").innerHTML = bookingData.extrasOption.join(', ');
    document.getElementById("outExtrasPrice").innerHTML = "$" + bookingData.costOfExtras;
    document.getElementById("outTotal").innerHTML = "$" + bookingData.totalCost;
}

function checkInputs(bookingData){
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
	var email = document.getElementById('emailInput').value;
	//store all of the customer details as variables
	alert(firstName + " " + lastName + " " + age + " " + license + " " + cellPhone + " " + email);
	pushData(firstName, lastName, age, license, cellPhone, email, bookingData)
}

function pushData(firstName, lastName, age, license, cellPhone, email, bookingData) {
    alert("At the push data function - nearly done!");
    console.log("myFunction fired.");
    console.log("Getting Values....");
    console.log("Initialing Airtable API....");
    var Airtable = require('airtable');
    var base = new Airtable({
        apiKey: 'patIPemM83ckitTE3.853907fa0fcd0d91559d698c1062d6f651febd7bb7d01c10d24c0042b8dcd3b8'
    }).base('appFd8HSYm7rdBSxt');
    console.log("Creating a record....");
    base('Boat Booking').create({
            "First Name": firstName,
			"Last Name": lastName,
			"Age": age,
			"License": license,
			"Cell Phone": cellPhone,
			"Email": email,
			"Check In Date": bookingData.checkInDate,

        }, {
            typecast: true
        },
        function(err, record) {
            if (err) {
                console.error(err);
                return;
            }
            alert("record created");
            console.log("Record created: " + record.getId());
        });
}

var card = document.getElementsByClassName("card");
for (var i = 0; i < card.length; i++) {
	card[i].addEventListener("click", boatBooking);
}

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





