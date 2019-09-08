const documentReady = fn => {
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
};

const updateTimer = () => {
	const current = new Date();
	return {
		hours: current
			.getHours()
			.toString()
			.padStart(2, "0"),
		minutes: current
			.getMinutes()
			.toString()
			.padStart(2, "0")
	};
};

const updateGreeting = hours => {
	const hoursFloat = parseFloat(hours);
	if (hoursFloat > 0 && hoursFloat < 12) {
		return "Good morning";
	} else if (hoursFloat >= 12 && hoursFloat < 17) {
		return "Good afternoon";
	} else if (hoursFloat >= 17 && hoursFloat < 22) {
		return "Good evening";
	} else {
		return "Good night";
	}
};

const getRandomQuote = () => {
	const quotesLength = quotesEN.length;
	const randomIndex = Math.floor(Math.random() * quotesLength);
	return {
		quote: quotesLength ? quotesEN[randomIndex][0] : ``,
		author: quotesLength ? quotesEN[randomIndex][1] : ``
	};
};

const getQuickLinksArr = () => {
	// or
	// selectedLinks = Array.from(document.querySelector("#setting-quicklinks").querySelectorAll(".settings__label"));
	const selectedLinks = [
		...document
			.querySelector("#setting-quicklinks")
			.querySelectorAll(".settings__label")
	].filter(element => {
		return element.querySelector("input[type=checkbox]:checked");
	});
	return selectedLinks.map(element => {
		let iconElement = element.querySelector("input[type=checkbox]")
			.nextElementSibling;
		return {
			id: element
				.querySelector("input[type=checkbox]")
				.getAttribute("data-link-id"),
			href: element.getAttribute("title"),
			iconClasses: iconElement.classList.contains("mdi")
				? iconElement.classList.value
				: "quick-links__link--fw",
			iconElementStr: iconElement.classList.contains("mdi")
				? ""
				: iconElement.outerHTML,
			title: element.textContent
		};
	});
};

const generateQuickLinks = () => {
	const quickLinksArr = getQuickLinksArr();
	const quickLinks = quickLinksArr.reduce((memo, current) => {
		return (memo += `<li class="quick-links__li" id="${current.id}"><a href="${current.href}" class="quick-links__link ${current.iconClasses}" title="${current.title}">${current.iconElementStr}</a></li>`);
	}, "");
	document.querySelector("#quicklinks").innerHTML = quickLinks;
};

documentReady(function() {
	const generateClockAndGreeting = () => {
		const timer = updateTimer();
		clock.innerHTML = `${timer.hours}:${timer.minutes}`;
		const greetingsText = updateGreeting(timer.hours);
		greetings.innerHTML = `${greetingsText}`;
	};

	// show the timer and greetings
	const clock = document.querySelector("#clock");
	const greetings = document.querySelector("#greeting-text");
	generateClockAndGreeting();
	setInterval(generateClockAndGreeting, 1000);

	// show the random quote and author
	const quoteObj = getRandomQuote();
	const quotation = document.querySelector("#quotation");
	quotation.querySelectorAll(
		".quotes__text"
	)[0].innerHTML = `${quoteObj.quote}`;
	quotation.querySelectorAll(
		".quotes__author"
	)[0].innerHTML = `${quoteObj.author}`;

	const settingsBtn = document.querySelector("#settings-btn");
	const settingModal = document.querySelector("#settings-modal");
	const settingsCloseBtn = document.querySelector("#settings-close-btn");
	const modalOverlay = document.querySelectorAll(".modal-overlay")[0];

	document.addEventListener("click", event => {
		if (event.target === settingsBtn) {
			settingModal.classList.toggle("modal--show");
		} else if (
			event.target === settingsCloseBtn ||
			event.target === modalOverlay
		) {
			settingModal.classList.remove("modal--show");
		}
	});

	// generate quick links
	generateQuickLinks();
	const quickLinkCheckboxes = [
		...document.querySelectorAll(
			"#setting-quicklinks .settings__label input[type=checkbox]"
		)
	];
	// or
	// Array.from(document.querySelectorAll("#setting-quicklinks .settings__label input[type=checkbox]"))
	document.addEventListener("change", event => {
		if (quickLinkCheckboxes.includes(event.target)) {
			generateQuickLinks();
		}
	});
});
