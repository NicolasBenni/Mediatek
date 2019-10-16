

$(function() {
  
 	$('#media_selector').change(function() {
		let str = "";
	    $( "select option:selected" ).each(function() {
	      	str += $( this ).text();
	    });
	    console.log(".inputs"+str);	
		$(".inputs").addClass("undisplayed");
		$(".inputs"+str).removeClass("undisplayed");
	})
  
});