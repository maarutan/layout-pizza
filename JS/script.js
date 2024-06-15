const tabs = document.querySelectorAll("#contol");
const allContent = document.querySelectorAll("#content");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		tabs.forEach((tab) => tab.classList.remove("active"));
		allContent.forEach((content) => content.classList.remove("active"));

		tab.classList.add("active");
		allContent[index].classList.add("active");
	});
});
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = () => {
	hamburger.classList.toggle("is-active");
};
