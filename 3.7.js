// JavaScript Document
alert("js attatached");
var modal = document.getElementById("myModal"); // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal



var totalCost = 0; //creates a total cost varable
function boatBooking() { //this function checks for booking information
	var checkInDate = document.getElementById("dateInput").value; //makes variable from the users selected date 
	if (document.getElementById("dateInput").validity.valueMissing) { //checks validity of input
		alert("Please enter a valid date");; //error message to inform users
		document.getElementById("errorMessage1").innerHTML = "Please enter a valid date"; //prints error message to further inform user
		return;
	} else { //allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage1").innerHTML = ""; //removes error message if input is correct
	}
	var amountOfHours = document.getElementById("hoursInput").value; //makes variable from users selected duration
	if (document.getElementById("hoursInput").validity.valueMissing || document.getElementById("hoursInput").validity.rangeUnderflow || document.getElementById("hoursInput").validity.rangeOverflow) { //checks validity of input
		alert("Please enter a valid amount"); //error message to inform users
		document.getElementById("errorMessage2").innerHTML = "Please enter a valid amount of hours"; //prints error message to further inform user
		return;
	} else { //allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage3").innerHTML = ""; //removes error message if input is correct
	}
	var amountofGuests = document.getElementById("guestInput").value; //makes variable from users selected amount of guests
	if (document.getElementById("guestInput").validity.valueMissing || document.getElementById("guestInput").validity.rangeUnderflow || document.getElementById("guestInput").validity.rangeOverflow) { //checks validity of input
		alert("Please enter a valid amount"); //error message to inform users
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid amount of guests"; //prints error message to further inform user
		return;
	} else { //allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage3").innerHTML = "";
	}
	var reason = document.getElementById("mySelect").value;
	var costofReservation = this.dataset.price; //makes variable from the price of the users selected boating time
	var boatTime = this.dataset.value; //makes variable from the users selected boating time
	extrasOption = []; //stores extra options
	var addExtras = document.getElementsByClassName("extrasCheckbox");
	var costOfExtras = 0; //creates a extras cost varable
	for (i = 0; i < addExtras.length; i++) {
		if (addExtras[i].checked) {
			extrasOption.push(addExtras[i].parentNode.textContent.trim());
			costOfExtras += Number(addExtras[i].dataset.price);
			alert(extrasOption);
		}
	}
	totalCost += Number(costofReservation) + Number(costOfExtras); //makes variable from adding all the costs together to get total costprice of all users costs
	outDate.innerHTML = checkInDate;
	outHours.innerHTML = amountOfHours;
	outTime.innerHTML = boatTime;
	outPrice.innerHTML = "$" + costofReservation;
	outExtras.innerHTML = extrasOption;
	outExtrasPrice.innerHTML = "$" + costOfExtras;
	outTotal.innerHTML = "$" + totalCost
	outReason.innerHTML = reason;
	outGuests.innerHTML = amountofGuests;
}



function checkInputs() {
	alert("at check inputs")
	//alert(bookingData.checkInDate);
	if (termsAndConditions.checked) {
		alert("Terms box is checked");
	} else {
		alert("Terms box is not checked");
		return;
	}
	var firstName = document.getElementById('firstNameInput').value;
	if (document.getElementById("firstNameInput").validity.patternMismatch || document.getElementById("firstNameInput").validity.valueMissing) {
		alert("Please enter a valid first name");
		document.getElementById("errorMessage4").innerHTML = "Please enter a valid first name";
		return;
	} else {
		document.getElementById("errorMessage4").innerHTML = "";
	}
	var lastName = document.getElementById('lastNameInput').value;
	if (document.getElementById("lastNameInput").validity.patternMismatch || document.getElementById("lastNameInput").validity.valueMissing) {
		alert("Please enter a valid last name");
		document.getElementById("errorMessage5").innerHTML = "Please enter a valid last name";
		return;
	} else {
		document.getElementById("errorMessage5").innerHTML = "";
	}
	var age = document.getElementById('ageInput').value;
	if (document.getElementById("ageInput").validity.valueMissing || document.getElementById("ageInput").validity.rangeUnderflow || document.getElementById("ageInput").validity.rangeOverflow) {
		alert("Please enter a valid age");
		document.getElementById("errorMessage6").innerHTML = "Please enter a valid age";
		return;
	} else {
		document.getElementById("errorMessage6").innerHTML = "";
	}
	var license = document.getElementById('licenseInput').value;
	if (document.getElementById("licenseInput").validity.patternMismatch || document.getElementById("licenseInput").validity.valueMissing) {
		alert("Please enter a valid license");
		document.getElementById("errorMessage7").innerHTML = "Please enter a valid license";
		return;
	} else {
		document.getElementById("errorMessage7").innerHTML = "";
	}
	var cellPhone = document.getElementById('cellphoneInput').value;
	if (document.getElementById("cellphoneInput").validity.patternMismatch || document.getElementById("cellphoneInput").validity.valueMissing) {
		alert("Please enter a valid cell phone number");
		document.getElementById("errorMessage8").innerHTML = "Please enter a valid cell phone number";
		return;
	} else {
		document.getElementById("errorMessage8").innerHTML = "";
	}
	var email = document.getElementById('emailInput').value;
	if (document.getElementById("licenseInput").validity.patternMismatch || document.getElementById("licenseInput").validity.valueMissing) {
		alert("Please enter a valid email");
		document.getElementById("errorMessage9").innerHTML = "Please enter a valid email";
		return;
	} else {
		document.getElementById("errorMessage9").innerHTML = "";
	}
	var comment = document.getElementById('commentInput').value;
	pushData(firstName, lastName, age, license, cellPhone, email, comment)
}




function pushData(firstName, lastName, age, license, cellPhone, email, comment) {
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
		"Comment": comment,
		"Check in Date": outDate.innerHTML,
		"Amount of Hours": outHours.innerHTML,
		"Time": outTime.innerHTML,
		"Cost of Reservation": outPrice.innerHTML,
		"Extras Options": outExtras.innerHTML,
		"Cost of Extras": outExtrasPrice.innerHTML,
		"Total Cost": outTotal.innerHTML,
		"Reason for Reservation": outReason.innerHTML,
		"Amount of Guests": outGuests.innerHTML
	}, {
		typecast: true
	}, function(err, record) {
		if (err) {
			console.error(err);
			return;
		}
		alert("record created");
		console.log("Record created: " + record.getId());
	});
	alert("modal gonna pop up");
	modal.style.display = "block";
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	// Refresh the page after a delay of 3 seconds
	setTimeout(function() {
		location.reload();
	}, 3000); // 3000 milliseconds = 3 seconds
	console.log("end function");
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
}
if (mm < 10) {
	mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateInput").setAttribute("min", today);