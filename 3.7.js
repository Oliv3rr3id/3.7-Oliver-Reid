// JavaScript Document
alert("js attatached");
var totalCost = 0;//creates a total cost varable

function boatBooking(){//this function checks for booking information
	var checkInDate = document.getElementById("dateInput").value;//makes variable from the users selected date 
	if (document.getElementById("dateInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid date");;//error message to inform users
		document.getElementById("errorMessage1").innerHTML = "Please enter a valid date";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage1").innerHTML = "";//removes error message if input is correct
	}
	
	var amountOfHours = document.getElementById("hoursInput").value;//makes variable from users selected duration
	if (document.getElementById("hoursInput").validity.valueMissing ||document.getElementById("hoursInput").validity.rangeUnderflow ||document.getElementById("hoursInput").validity.rangeOverflow) {//checks validity of input
		alert("Please enter a valid amount");//error message to inform users
		document.getElementById("errorMessage2").innerHTML = "Please enter a valid amount of hours";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage3").innerHTML = "";//removes error message if input is correct
	}
	
	var amountofGuests = document.getElementById("guestInput").value;//makes variable from users selected amount of guests
	if (document.getElementById("guestInput").validity.valueMissing ||document.getElementById("guestInput").validity.rangeUnderflow ||document.getElementById("guestInput").validity.rangeOverflow) {//checks validity of input
		alert("Please enter a valid amount");//error message to inform users
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid amount of guests";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage3").innerHTML = "";
	}
	
	var costofReservation = this.dataset.price;//makes variable from the price of the users selected boating time
	var boatTime = this.dataset.value;//makes variable from the users selected boating time
	
	extrasOption = [];//stores extra options
	var addExtras = document.getElementsByClassName("extrasCheckbox");
	var costOfExtras = 0;//creates a extras cost varable
	for (i = 0; i < addExtras.length; i++) {
		if (addExtras[i].checked) {
			extrasOption.push(addExtras[i].parentNode.textContent.trim());
			costOfExtras += Number(addExtras[i].dataset.price);
			alert(extrasOption);
	
		}
	}
	totalCost += Number(costofReservation) + Number(costOfExtras);
	outDate.innerHTML = checkInDate;
	outHours.innerHTML = amountOfHours;
	outTime.innerHTML = boatTime;
	outPrice.innerHTML = "$" + costofReservation;
	outExtras.innerHTML = extrasOption;
	outExtrasPrice.innerHTML = "$" + costOfExtras;
	outTotal.innerHTML = "$" + totalCost

}

function checkInputs(){
	alert("at check inputs")
	//alert(bookingData.checkInDate);
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
	pushData(firstName, lastName, age, license, cellPhone, email)
}

function pushData(firstName, lastName, age, license, cellPhone, email) {
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
			"Check in Date": outDate.innerHTML,
			"Amount of Hours": outHours.innerHTML,
			"Time": outTime.innerHTML,
			"Cost of Reservation": outPrice.innerHTML,
			"Extras Options": outExtras.innerHTML,
			"Cost of Extras": outExtrasPrice.innerHTML,
			"Total Cost": outTotal.innerHTML
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





