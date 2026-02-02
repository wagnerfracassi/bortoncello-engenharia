"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();
	},
	createAll() {
		persistentWhatsapp.build();
		siteHeader.createAll();
		build.mainContainer();

		header.createAll();
		imagens.createAll();

		siteFooter.createAll();
		eventListeners.createInitial();
	},
};

const header = {
	createAll() {
		this.createSection();
		this.createHeader();
	},
	createSection() {
		const divId = "imagensHeader";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createHeader() {
		const container = document.getElementById("imagensHeaderContainer");
		const {header, subheader, buttons} = textLibrary.imagens;
		const h2 = build.h2(header);
		const h3 = build.h3(subheader);

		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("imagensButtonContainer");
		for (const [index, {text, link}] of buttons.entries()) {
			const button = build.button(text, null, link);
			const isFirst = index === 0;
			const className = isFirst ? "buttonStyleBlue" : "buttonStyleWhite";
			button.classList.add(className, "blueBorder");
			buttonContainer.append(button);
		}

		container.append(h2, h3, buttonContainer);
	},
};

const imagens = {
	createAll() {
		this.createSection();
		this.createCards();
	},
	createSection() {
		const divId = "galeriaDeImagens";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createCards() {
		const tiposDeImagens = imageLibrary.imagens;
		for (const imagens of Object.keys(tiposDeImagens)) this.createCard(tiposDeImagens[imagens]);
	},
	createCard(imagens) {
		const container = document.getElementById("galeriaDeImagensContainer");
		for (const {antes, depois} of imagens) {
			const card = document.createElement("div");
			card.classList.add("imageCard", "boxShadow");

			const imageContainer = document.createElement("div");
			imageContainer.classList.add("imageCardContainer");
			const imgAntes = build.img(antes);
			const imgDepois = build.img(depois);
			imgDepois.classList.add("after");
			const imgSlider = document.createElement("div");
			imgSlider.classList.add("imageCardSlider");

			const cardLabel = document.createElement("div");
			cardLabel.classList.add("imageCardLabel");
			const pAntes = build.p("Antes");
			const pDepois = build.p("Depois");
			cardLabel.append(pAntes, pDepois);

			imageContainer.append(imgAntes, imgDepois, imgSlider);
			card.append(imageContainer, cardLabel);
			container.append(card);

			this.initializeDrag(imageContainer, imgSlider, imgDepois);
		}
	},
	initializeDrag(container, slider, afterImage) {
		let isDragging = false;
		let containerRect;

		const updateSliderPosition = (clientX) => {
			containerRect = container.getBoundingClientRect();
			let relativeX = (clientX - containerRect.left) / containerRect.width;
			relativeX = Math.max(0, Math.min(1, relativeX));

			const sliderPosition = relativeX * 100;
			slider.style.left = `${sliderPosition}%`;

			const clipPathValue = relativeX * 100;
			afterImage.style.clipPath = `inset(0 0 0 ${clipPathValue}%)`;
		};

		const startDrag = (e) => {
			isDragging = true;
			e.preventDefault();

			container.classList.add("dragging");
			slider.classList.add("dragging");

			const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;

			updateSliderPosition(clientX);

			document.addEventListener("mousemove", onDrag);
			document.addEventListener("touchmove", onDrag, {passive: false});
			document.addEventListener("mouseup", stopDrag);
			document.addEventListener("touchend", stopDrag);
		};

		const onDrag = (e) => {
			if (!isDragging) return;
			e.preventDefault();

			const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
			updateSliderPosition(clientX);
		};

		const stopDrag = () => {
			if (!isDragging) return;

			isDragging = false;

			container.classList.remove("dragging");
			slider.classList.remove("dragging");

			document.removeEventListener("mousemove", onDrag);
			document.removeEventListener("touchmove", onDrag);
			document.removeEventListener("mouseup", stopDrag);
			document.removeEventListener("touchend", stopDrag);
		};

		container.addEventListener("mousedown", startDrag);
		container.addEventListener("touchstart", startDrag, {passive: false});

		slider.addEventListener("mousedown", startDrag);
		slider.addEventListener("touchstart", startDrag, {passive: false});

		const initPosition = () => {
			const rect = container.getBoundingClientRect();
			const middleX = rect.left + rect.width / 2;
			updateSliderPosition(middleX);
		};

		requestAnimationFrame(() => {
			initPosition();
		});

		window.addEventListener("resize", () => {
			if (!isDragging) {
				const currentLeft = parseFloat(slider.style.left);

				if (!isNaN(currentLeft)) {
					const relativeX = currentLeft / 100;
					const rect = container.getBoundingClientRect();
					const clientX = rect.left + relativeX * rect.width;
					updateSliderPosition(clientX);
				}
			}
		});
	},
};
