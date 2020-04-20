// Day planner: Method
// Part 1. Create an array with hours and a for loop to generate a new row per hour
// Part 2. Create rows in the planner div (9 rows, for 9am - 5pm)
// Part 3. Create a timestamp for the left side of the row
// Part 4. Create an input box in the centre of the row
// Part 5. Create a button which saves any input data into local storage
// Part 6. Append the timestamp, input box and button to the rows
// Part 7. Check for any pre-existing input values and populate the <input> accordingly
// Part 8. Create a click event to make the save button function as intended
// Part 9. Add a container which contains the exact time and date to the top

// Part 1: Create an array with hours and a for loop to generate a new row per hour
const hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const now = moment().hour() - 8

for (var i = 0; i < hour.length; i++) {

	// Part 2: Create the rows which will contain all planner elements
	var plannerRow = $('<div>').addClass('row planner-row').attr('id', hour[i])

	// Add highlight to the row displaying the current time and any future hours in the day
	if (hour[i] == now) {
		plannerRow.addClass('active-row')
	} else if (hour[i] >= now) {
		plannerRow.addClass('future-row')
	}

	// Part 3: Create the timestamp, add the column width and label (formatted into 12-hour time)
	var timestampElement = $('<div>').addClass('col-sm-1 timestamp')

	if (i > 3) {
		timestampElement.text(hour[i]-12+"pm")
	} else if (i == 3) {
		timestampElement.text(hour[i]+"pm")
	} else {
		timestampElement.text(hour[i]+"am")
	}

	// Part 4: Create a column div (to set width) and insert an input element inside
	var inputBox = $('<div>').addClass('col-sm-10 input-box')
	var input = $('<input>').addClass('form-control').attr('placeholder', 'Put your task in here').attr('id', 'input'+hour[i])
	$(inputBox).append(input)

	// Part 5: Create a save button
	var save = $('<button>').addClass('btn-dark col-sm-1').html('<i class="fa fa-save"></i>')
	$(save).click(saveData)

	// Part 6: Append the timestamp, input box and button to the row and add the row to the container
	$(plannerRow).append(timestampElement)
	$(plannerRow).append(inputBox)
	$(plannerRow).append(save)
	$('.content-box').append(plannerRow)

	// Part 7: Check if the user has already saved any input value and populate the input HTML element if so
	if (localStorage.getItem('userInputinput'+hour[i]) !== null) {
		$('#input'+hour[i]).attr('value', localStorage.getItem('userInputinput'+hour[i]))
	}
}

// Part 8: Save button event - pulling the ID of the button's parent (the plannerRow) and using it to find and store the child input value
function saveData () {
	// Get the ID and the value of the input corresponding to the user's selected save button
	var correspondingInputID = $(this).parent()[0].children[1].children[0].id
	var correspondingInputValue = $(this).parent()[0].children[1].children[0].value

	// Check to see if the input has any text. If so, return. If not, save to local storage
	if (correspondingInputValue == "") {
		alert('You must enter something before you can save.')
		return
	} else {
		localStorage.setItem('userInput'+ correspondingInputID, correspondingInputValue)
	}
}

// Part 9: Populate the #current-time element with the date and time from Moment.JS	
if (now >= 9 && now <= 17 ) {
	$("#current-time")[0].innerText = moment().format('Do MMMM YYYY, h:mm:ss a')
} else {
	$("#current-time")[0].innerText = "It is the night of " + moment().format('dddd Do MMMM') + ". The planner will highlight the current hour starting at 9am tomorrow."
}