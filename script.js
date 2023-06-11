window.onload = function () {
	let icons = document.getElementsByClassName("icon"),
		lightBox = document.getElementById("light-link-box");

	for (let i = 0; i < icons.length; i++) {
		icons[i].style.height = `${lightBox.offsetHeight}px`;
		icons[i].style.width = `${lightBox.offsetHeight}px`;
	}

	// активация анимаций при нахождении в поле зрения
	function onEntry(element) {
		element.forEach((change) => {
			if (change.isIntersecting) {
				change.target.classList.add("appeared");
			}
		});
	}

	let options = { threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);

	let bottomAppearedElements = document.querySelectorAll(".bottom-appearance"),
		topAppearedElements = document.querySelectorAll(".top-appearance"),
		leftAppearedElements = document.querySelectorAll(".left-appearance"),
		rightAppearedElements = document.querySelectorAll(".right-appearance");

	for (let element of bottomAppearedElements) {
		observer.observe(element);
	}

	for (let element of topAppearedElements) {
		observer.observe(element);
	}

	for (let element of rightAppearedElements) {
		observer.observe(element);
	}

	for (let element of leftAppearedElements) {
		observer.observe(element);
	}
};
