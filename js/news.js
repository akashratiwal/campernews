function fillElements() {
	console.log("started");
	$.getJSON("http://www.freecodecamp.com/news/hot/", function(val) {
		for (var i = 0; i < val.length; i++) {
			$("#class-container").append("\
			<div class='news_items'>\
			<a target='_blank' href='" + val[i].link + "'><img class='user_image' src='" + val[i].author.picture + "'>\
			<span class='titles'>" + val[i].headline + "</span></a>\
			<a href='http://freecodecamp.com/" + val[i].author.username + "' target='_blank'><br/><span class='author'>by - " + val[i].author.username + "</span></a>\
			<br/><span class='upvotes'><i class='fa fa-thumbs-up'></i>&nbsp;" + val[i].upVotes.length + "</span>\
			<br/><span class='posted'>Posted On " + new Date(val[i].timePosted).toDateString() + "</span>\
			</div>");
		}
		console.log("Number of elements : ", val.length);
	});
}
fillElements();
