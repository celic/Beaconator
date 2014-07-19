/* Beaconator js */
$(document).ready(function(){

	$option_area = $('#options_list');
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
		var opt = "<div id='opt" + num_options + "'>";
		opt +=       "<label>Option " + num_options + "</label>";
		opt +=       "<div class='input-group'>";
		opt +=         "<input type='text' id='Option" + num_options + "' class='form-control' />";
		opt +=		   "<span class='input-group-btn'>";
		opt +=		     "<input type='button' id='clear" + num_options + "' class='btn red inline clear_option' value='&times;' />";
		opt +=		   "</span>";
		opt +=		 "</div>";
		opt +=    "</div>";
		$new_options.append(opt);
	});

	$(document).on('click', '.clear_option', function (sel){

		// Slightly messy... deal with it		
		var option_id = parseInt(sel.target.id[5]);

		// Clear the input value
		//$("#Option" + option_id).val("");

		// Move every value below that id up one spot
		for(var i = (option_id+1); i <= num_options; i++){

			var opt_id_first = "#Option" + (i-1);
			var opt_id_second = "#Option" + i;

			var opt_val = $(opt_id_second).val();
			$(opt_id_first).val(opt_val);
		}

		// Remove the last id
		$('#opt' + num_options).remove();
		num_options--;
	});

	$beaconize.click(function(){

		// Clear out array
		options = [];

		// Parse options into array
		for(var i = 1; i <= num_options; i++){

			var option_id = "#Option" + i;

			options.push($option_area.find(option_id).val());
		}

		console.log(options[0]);

		// Read beacon API
		$.ajax({
			type:"GET",
			url:"beacon",
			contentType: "text/plain",
			dataType:"text",
			success:function(data) {

				console.log(data);

				// Perform modulo
				var selection = (parseInt(data) % options.length) + 1;

				console.log("% " + options.length + " = " + selection);

				// Append results
				$('.decision').append(options[selection]);

			},
			error:function(xhr, status, error) {
				var err = eval("(" + xhr.responseText + ")");
  				alert(err.Message);
			}
		});

		// Display results
		$results.show();
	});

	$reset.click(function(){

		// Shut. Down. Everything.
		for(var i = 1; i <= num_options; i++){

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