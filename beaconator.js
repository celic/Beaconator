/* Beaconator js */
$(document).ready(function(){

	$new_options = $('#new_options');
	$add_option = $('#add_option');
	$beaconize = $('#beaconize');
	$reset = $('#reset');
	var num_options = 2;
	var options = [];

	// Adds a new option to the list
	$add_option.click(function(){

		// Increment counter
		num_options++;

		// Add preconfigured html to the page
		$new_options.append("<div><label>Option " + num_options + "</label><input type='text' name='Option" + num_options + "' class='form-control' /></div>");
	});

	$beaconize.click(function(){

		// Parse options into array

		// Read beacon API

		// Convert hex to decimal

		// Display results
	});

	$reset.click(function(){

		// Shut. Down. Everything.
		num_options = 2;

		// Clear out added options
		$new_options.empty();
	});
});