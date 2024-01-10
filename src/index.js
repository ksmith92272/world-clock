let cities = document.querySelectorAll(".city");

cities.forEach(function (element) {
	let dateElement = element.querySelector(".date");
	let timeElement = element.querySelector(".time");
	let timezone = element.getAttribute("id");
	let current = moment().tz(timezone);

	dateElement.innerHTML = `${current.format("MMMM Do, YYYY")}`;
	timeElement.innerHTML = `${current.format(
		"hh:mm:ss"
	)} <small>${current.format("A")}</small>`;
});
