/**
 * Create footer using jQuery
 * .headNav is the class that identifies the header nav elements
 * that will be used in the footer nav
 */

function buildFooterNav() {

	//variable declaration
	var output = "";
	var headNavs = $('.headNav').toArray();

	//loop through page and locate all the footerNav class elements
	//get all data using innerHTML and append it to the ouput string
	for (var i = 0; i < headNavs.length; i++) {
		output += "<div class='footerNav'>" + headNavs[i].innerHTML + "</div>";
	}
	$('.footNav').append(output);
}