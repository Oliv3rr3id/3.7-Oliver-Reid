// JavaScript Document
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
		document.getElementById("errorMessage2").innerHTML = ""; //removes error message if input is correct
	}
	
	var amountofGuests = document.getElementById("guestInput").value; //makes variable from users selected amount of guests
	if (document.getElementById("guestInput").validity.valueMissing || document.getElementById("guestInput").validity.rangeUnderflow || document.getElementById("guestInput").validity.rangeOverflow) { //checks validity of input
		alert("Please enter a valid amount"); //error message to inform users
		document.getElementById("errorMessage3").innerHTML = "Please enter a valid amount of guests"; //prints error message to further inform user
		return;
	} else { //allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage3").innerHTML = "";
	}
	
	var reason = document.getElementById("mySelect").value; //makes variable from the user selected amount of guests
	var costofReservation = this.dataset.price; //makes variable from the price of the users selected boating time
	var boatTime = this.dataset.value; //makes variable from the users selected boating time
	extrasOption = []; //will store the extra options
	var addExtras = document.getElementsByClassName("extrasCheckbox"); //makes variable from the users selected extras
	var costOfExtras = 0; //creates a extras cost varable
	for (i = 0; i < addExtras.length; i++) { //for loop that stores the extra options
		if (addExtras[i].checked) {
			extrasOption.push(addExtras[i].parentNode.textContent.trim());
			costOfExtras += Number(addExtras[i].dataset.price);
		}
	}
	totalCost += Number(costofReservation) + Number(costOfExtras); //makes variable from adding all the costs together to get total costprice of all users costs
	outDate.innerHTML = checkInDate;//outputs date input
	outHours.innerHTML = amountOfHours;//outputs hours input
	outTime.innerHTML = boatTime;//outputs time input
	outPrice.innerHTML = "$" + costofReservation;//outputs price of reservation
	outExtras.innerHTML = extrasOption;//outputs extras input
	outExtrasPrice.innerHTML = "$" + costOfExtras;//outputs price of extras
	outTotal.innerHTML = "$" + totalCost//outputs total price
	outReason.innerHTML = reason;//outputs reason input
	outGuests.innerHTML = amountofGuests;//outputs guests input
}



function checkInputs() {
	if (termsAndConditions.checked) {//check if termsAndConditions are checked
	} else {//prevents code from moving forward if not checked
		alert("Terms box is not checked");//prints error message to inform user
		return;
	}
	var firstName = document.getElementById('firstNameInput').value;//makes variable from the users selected first name 
	if (document.getElementById("firstNameInput").validity.patternMismatch || document.getElementById("firstNameInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid first name");//error message to inform users
		document.getElementById("errorMessage4").innerHTML = "Please enter a valid first name";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage4").innerHTML = "";//removes error message if input is correct
	}
	
	var lastName = document.getElementById('lastNameInput').value;//makes variable from the users selected last name 
	if (document.getElementById("lastNameInput").validity.patternMismatch || document.getElementById("lastNameInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid last name");//error message to inform users
		document.getElementById("errorMessage5").innerHTML = "Please enter a valid last name";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage5").innerHTML = "";//removes error message if input is correct
	}
	
	var age = document.getElementById('ageInput').value;//makes variable from the users selected age 
	if (document.getElementById("ageInput").validity.valueMissing || document.getElementById("ageInput").validity.rangeUnderflow || document.getElementById("ageInput").validity.rangeOverflow) {//checks validity of input
		alert("Please enter a valid age");//error message to inform users
		document.getElementById("errorMessage6").innerHTML = "Please enter a valid age";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage6").innerHTML = "";//removes error message if input is correct
	}
	
	var license = document.getElementById('licenseInput').value;//makes variable from the users selected license
	if (document.getElementById("licenseInput").validity.patternMismatch || document.getElementById("licenseInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid license");//error message to inform users
		document.getElementById("errorMessage7").innerHTML = "Please enter a valid license";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage7").innerHTML = "";//removes error message if input is correct
	}
	
	var cellPhone = document.getElementById('cellphoneInput').value;//makes variable from the users cell phone number
	if (document.getElementById("cellphoneInput").validity.patternMismatch || document.getElementById("cellphoneInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid cell phone number");//error message to inform users
		document.getElementById("errorMessage8").innerHTML = "Please enter a valid cell phone number";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage8").innerHTML = "";//removes error message if input is correct
	}
	
	var email = document.getElementById('emailInput').value;//makes variable from the users  email address
	if (document.getElementById("emailInput").validity.patternMismatch || document.getElementById("emailInput").validity.valueMissing) {//checks validity of input
		alert("Please enter a valid email");//error message to inform users
		document.getElementById("errorMessage9").innerHTML = "Please enter a valid email";//prints error message to further inform user
		return;
	} else {//allows the code to movie forwards if input is corrected
		document.getElementById("errorMessage9").innerHTML = "";
	}
	var comment = document.getElementById('commentInput').value;//makes variable from the users comment
	pushData(firstName, lastName, age, license, cellPhone, email, comment)//pushes variables to pushData function
}



function pushData(firstName, lastName, age, license, cellPhone, email, comment) {//this function recives and prints variables
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
	modal.style.display = "block";
	window.onclick = function(event) {//can make the modal appear 
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	span.onclick = function() {//can remove the modal from clicking
		modal.style.display = "none";
	}
	setTimeout(function() { //Refresh the page after a delay of 3 seconds
		location.reload();
	}, 3000); // 3000 milliseconds = 3 seconds
	console.log("end function");
}



var card = document.getElementsByClassName("card");//triggers the boatBooking function from clicking cards
for (var i = 0; i < card.length; i++) {
	card[i].addEventListener("click", boatBooking);
}
var today = new Date();//makes it impossible to input an incorrect date
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

