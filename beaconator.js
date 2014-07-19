/* Beaconator js */
$(document).ready(function(){

	$options_list = $('#options_list');
	$add_option = $('#add_option');
	var num_options = 2;
	var options = [];

	// Adds a new option to the list
	$add_option.click(function(){

		// Increment counter
		num_options++;

		// Add preconfigured html to the page
		$options_list.append("<div><label>Option " + num_options + "</label><input type='text' name='Option" + num_options + "' /></div>");
	});
});