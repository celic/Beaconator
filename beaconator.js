/* Beaconator js */
$(document).ready(function(){

	$option_area = $('#option_area');
	$new_options = $('#new_options');
	$add_option = $('#add_option');
	$beaconize = $('#beaconize');
	$reset = $('#reset');
	$results = $('#results');
	var num_options = 2;
	var options = [];

	// Hide results on page load
	$results.hide();

	// Adds a new option to the list
	$add_option.click(function(){

		// Increment counter
		num_options++;

		// Add preconfigured html to the page
		var opt = "<div>";
		opt +=       "<label>Option " + num_options + "</label>";
		opt +=       "<div class='input-group'>";
		opt +=         "<input type='text' id='Option" + num_options + "' class='form-control' />";
		opt +=		   "<span class='input-group-btn'>";
		opt +=		     "<input id='clear" + num_options + "' class='btn red inline clear' type='button' value='&times;' />";
		opt +=		   "</span>";
		opt +=		 "</div>";
		opt +=    "</div>";
		$new_options.append(opt);
	});

	$('input.btn.red.inline.clear').click(function(){
		alert("Testtest");

		var option_id = 3;

		// Clear the input value
		$("#Option" + option_id).val("");

		// Move every value below that id up one spot
		for(var i = option_id+1; i < num_options; i++){

			var input = $("#Option" + option_id).value;
			$("#Option" + (option_id-1)).val(input);
		}

		// Remove the last id

	});

	$beaconize.click(function(){

		// Clear out array
		options = [];

		// Parse options into array
		for(var i = 0; i < num_options; i++){

			var option_id = "#Option" + i;

			options.push($option_area.find(option_id).value);
		}

		// Read beacon API

		// Convert hex to decimal

		// Perform modulo

		// Display results


		$results.show();
	});

	$reset.click(function(){

		// Shut. Down. Everything.
		for(var i = 0; i < num_options; i++){

			// Reset all option values
			var option_id = "#Option" + i;
			$(option_id).val("");
		}

		// Reset options
		num_options = 2;
		options = [];

		// Clear out added options
		$new_options.empty();

		// Hide results
		$results.hide();
	});
});