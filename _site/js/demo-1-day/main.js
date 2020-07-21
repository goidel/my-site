// Returns the day of the week for the given date.
// function dayOfTheWeek(date) {
// const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", "Saturday"]; 
// //return daysOfTheWeek[date.getDay()];
// day= daysOfTheWeek[date.getDay()];
// return day;
// }

function greeting(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"]; 

let today = daysOfTheWeek[date.getDay()];

	//alert(`Hello, world! Happy ` + today);

	alert(`Hello, world! Happy ${today}`);

}