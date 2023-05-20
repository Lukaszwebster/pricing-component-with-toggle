const toggleBtn = document.querySelector(".toggle-button");
const annually = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");
const dot = document.querySelector(".dot");

toggleBtn.addEventListener("click", () => {
	annually.forEach((annually) => {
		annually.classList.toggle("hidden");
	});
	monthly.forEach((monthly) => {
		monthly.classList.toggle("hidden");
	});
	dot.classList.toggle("dot-left");
});
