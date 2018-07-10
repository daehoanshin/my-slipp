$(".answer-write input[type=submit]").click(addAnswer);

function addAnswer(e) {
	console.log("click me");
	e.preventDefault();
}