function updateTime() {
	let cities = document.querySelectorAll(".city");

	cities.forEach(function (element) {
		let dateElement = element.querySelector(".date");
		let timeElement = element.querySelector(".time");
		let timezone = element.getAttribute("id");
		let current = moment().tz(timezone);

		dateElement.innerHTML = current.format("MMMM Do, YYYY");
		timeElement.innerHTML = current.format("h:mm:ss [<small>]A[</small>]");
	});
}

function updateCity(event) {
	if (event.target.value.length > 0) {
		let cityElement = document.getElementById("cities-container");
		let citySelected = document.getElementById("cities");

		let city = citySelected.options[citySelected.selectedIndex].text;
		let timezone = event.target.value;

		if (timezone === "current") {
			timezone = moment.tz.guess();
			city = timezone.replace("_", " ").split("/")[1] + " ⏰";
		}

		let current = moment().tz(timezone);
		let formattedDate = current.format("MMMM Do, YYYY");
		let formattedTime = current.format("h:mm:ss [<small>]A[</small>]");

		cityElement.innerHTML = `<div
					class="city"
					id="${timezone}"
				>
					<div>
						<h2>${city}</h2>
						<div class="date">${formattedDate}</div>
					</div>
					<div>
						<div class="time">${formattedTime}</div>
					</div>
				</div>
        <a href="/">Return Home</a>`;
	}
}

//On page load
updateTime();

//Event listener for drop down menu
let citySelected = document.getElementById("cities");
citySelected.addEventListener("change", updateCity);

//Set interval to update time
let cities = document.querySelectorAll(".city");
if (cities.length < 1) {
	setInterval(updateCity, 1000);
} else {
	setInterval(updateTime, 1000);
}
