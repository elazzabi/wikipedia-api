$('#submit-button').on('click', function(){
	var search_box = $('#search-box').val()
	if(search_box === "") {
		$(".result").empty()
		$(".empty-search-box").fadeIn().delay(1000).fadeOut()
		return
	}
	
	var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search_box + "&format=json"
	$.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp"
	})
	.done(function(data){
		$(".result").empty()
		var search_results = data.query.search
		for(result in search_results) {
			var title = "<a class=\"card-title\" href=\"https://en.wikipedia.org/wiki/" + search_results[result].title + "\" target=\"_blank\">" + search_results[result].title + "</a>"
			var snippet = "<p class=\"card-snippet\">" + search_results[result].snippet + "</p>"
			var div = "<div class=\"card result-card\">" + title + snippet + "</div>"
			$(".result").append(div)
		}

	})
	.fail(function(){
		$(".failure").fadeIn().delay(1000).fadeOut()
	})

})