"use strict";

document.addEventListener("DOMContentLoaded", () => meta.onLoad());

const meta = {
	onLoad() {
		this.createAll();
	},
	createAll() {
		const isMain = true;
		persistentWhatsapp.build(isMain);
		siteHeader.createAll(isMain);
		build.mainContainer();
		sidebarMenu.createAll();

		intro.createAll();
		areasDeAplicacao.createAll();
		entendaComoFunciona.createAll();
		diferenciais.createAll();
		clientes.createAll();
		nossoTrabalho.createAll();

		siteFooter.createAll();
		eventListeners.createInitial(isMain);
	},
};

/* const oldintro = {
	createAll() {
		this.createSection();
		this.createIntroCards();
		this.createSwiper();
	},
	createSection() {
		const divId = "intro";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createIntroCards() {
		const parent = document.getElementById("introContainer");
		const container = document.createElement("div");
		container.id = "bannersContainer";
		container.classList.add("bannersContainer");
		parent.append(container);
		const banners = imageLibrary.home.intro;

		for (const banner of Object.keys(banners)) {
			this.createBannerContainer(banner);
			this.createImg(banner);
			this.createContent(banner);
		}
	},
	createBannerContainer(banner) {
		const parent = document.getElementById("bannersContainer");
		const container = document.createElement("div");
		container.id = `${banner}BannerContainer`;
		parent.append(container);
	},
	createImg(banner) {
		const container = document.getElementById(`${banner}BannerContainer`);
		const imgContainer = document.createElement("div");
		imgContainer.classList.add("introImgContainer", "imgFilter");

		const img = build.img(imageLibrary.home.intro[banner]);
		imgContainer.append(img);
		container.append(imgContainer);
	},
	createContent(banner) {
		const {
			header,
			subheader,
			button: {text, icon, link},
		} = textLibrary.home.intro[banner];
		const parent = document.getElementById(`${banner}BannerContainer`);
		const container = document.createElement("div");
		container.classList.add("introTextContainer");
		const h1 = build.h1(header);
		const h2 = build.h2(subheader);

		const button = build.a(text, icon, link);
		button.classList.add("buttonStyleWhite");

		container.append(h1, h2, button);
		parent.append(container);
	},
	createSwiper() {
		const parent = document.getElementById("introContainer");
		const container = document.createElement("div");

		container.classList.add("swiperContainer");

		const bannersContainer = document.getElementById("bannersContainer");
		initCarousel();

		const leftArrow = createArrowButton("left");
		const rightArrow = createArrowButton("right");
		container.append(leftArrow, rightArrow);
		parent.append(container);

		function createArrowButton(side) {
			const button = document.createElement("button");
			button.classList.add("arrow");
			if (side === "left") button.classList.add("arrowLeft");
			button.addEventListener("click", () => onArrowClick(side));
			return button;
		}
		function initCarousel() {
			const banners = [...bannersContainer.children];

			const firstClone = banners[0].cloneNode(true);
			const lastClone = banners[banners.length - 1].cloneNode(true);

			bannersContainer.prepend(lastClone);
			bannersContainer.append(firstClone);

			bannersContainer.dataset.index = -1; // começa no primeiro banner real
			bannersContainer.style.transform = "translateX(-100vw)";
			updateSlideAccessibility(-1);
		}
		function onArrowClick(side) {
			if (bannersContainer.dataset.animating === "1") return;
			bannersContainer.dataset.animating = "1";

			const index = Number(bannersContainer.dataset.index);
			const sign = side === "right" ? -1 : 1;

			const total = bannersContainer.children.length;
			const lastReal = (total - 2) * -1;

			let newIndex = index + sign;

			bannersContainer.style.transition = "transform 0.5s ease";
			bannersContainer.dataset.index = newIndex;
			bannersContainer.style.transform = `translateX(${newIndex * 100}vw)`;

			bannersContainer.addEventListener("transitionend", () => finalizeMovement(newIndex, lastReal), {once: true});
		}
		function finalizeMovement(newIndex, lastReal) {
			bannersContainer.style.transition = "none";

			if (newIndex < lastReal) {
				newIndex = -1;
				bannersContainer.dataset.index = newIndex;
				bannersContainer.style.transform = "translateX(-100vw)";
			}

			if (newIndex > -1) {
				newIndex = lastReal;
				bannersContainer.dataset.index = newIndex;
				bannersContainer.style.transform = `translateX(${lastReal * 100}vw)`;
			}

			bannersContainer.dataset.animating = "0";
			const finalIndex = Number(container.dataset.index);
			updateSlideAccessibility(finalIndex);
		}
		function updateSlideAccessibility(activeIndex) {
			const slides = [...bannersContainer.children];

			slides.forEach((slide, i) => {
				const isActive = i === Math.abs(activeIndex);

				slide.setAttribute("aria-hidden", !isActive);

				const focusables = slide.querySelectorAll("a, button, input, textarea, select, [tabindex]");

				focusables.forEach((el) => {
					if (el.dataset.carouselControl === "true") return;
					isActive ? el.removeAttribute("tabindex") : el.setAttribute("tabindex", "-1");
				});
			});
		}
	},
}; */

const intro = {
	createAll() {
		this.createSection();
		this.createIntroCards();
		this.createSwiper();
	},
	createSection() {
		const divId = "intro";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createIntroCards() {
		const parent = document.getElementById("introContainer");
		const container = document.createElement("div");
		container.id = "bannersContainer";
		container.classList.add("bannersContainer");

		parent.append(container);

		const banners = imageLibrary.home.intro;
		for (const banner of Object.keys(banners)) {
			this.createBannerContainer(banner, container);
			this.createImg(banner);
			this.createContent(banner);
		}
	},
	createBannerContainer(banner, wrapper) {
		const slide = document.createElement("div");
		slide.id = `${banner}BannerContainer`;
		slide.classList.add("swiperSlide");

		wrapper.append(slide);
	},
	createImg(banner) {
		const container = document.getElementById(`${banner}BannerContainer`);
		const imgContainer = document.createElement("div");
		imgContainer.classList.add("introImgContainer", "imgFilter");

		const img = build.img(imageLibrary.home.intro[banner]);
		imgContainer.append(img);
		container.append(imgContainer);
	},
	createContent(banner) {
		const {
			header,
			subheader,
			button: {text, icon, link},
		} = textLibrary.home.intro[banner];
		const parent = document.getElementById(`${banner}BannerContainer`);
		const container = document.createElement("div");
		container.classList.add("introTextContainer");
		const h1 = build.h1(header);
		const h2 = build.h2(subheader);

		const button = build.a(text, icon, link);
		button.classList.add("buttonStyleWhite");

		container.append(h1, h2, button);
		parent.append(container);
	},
	createSwiper() {
		const parent = document.getElementById("introContainer");
		const container = document.createElement("div");
		container.classList.add("swiperContainer");

		const bannersContainer = document.getElementById("bannersContainer");
		this.initCarousel(bannersContainer);

		const leftArrow = this.createArrowButton("left", () => this.onArrowClick("left"));
		const rightArrow = this.createArrowButton("right", () => this.onArrowClick("right"));
		container.append(leftArrow, rightArrow);
		parent.append(container);
	},
	createArrowButton(side, onClick) {
		const button = document.createElement("button");
		button.classList.add("arrow");
		if (side === "left") button.classList.add("arrowLeft");
		button.dataset.carouselControl = "true";
		button.setAttribute("aria-label", `Slide ${side === "left" ? "anterior" : "próximo"}`);
		button.addEventListener("click", onClick);
		return button;
	},
	initCarousel(bannersContainer) {
		const banners = [...bannersContainer.children];

		const firstClone = banners[0].cloneNode(true);
		const lastClone = banners[banners.length - 1].cloneNode(true);

		bannersContainer.prepend(lastClone);
		bannersContainer.append(firstClone);

		this.currentIndex = 1;
		bannersContainer.dataset.index = this.currentIndex;

		this.updateTransform(bannersContainer);
		this.initAccessibility(bannersContainer);
	},
	onArrowClick(side) {
		const bannersContainer = document.getElementById("bannersContainer");
		if (bannersContainer.dataset.animating === "1") return;
		bannersContainer.dataset.animating = "1";

		const direction = side === "right" ? 1 : -1;
		this.currentIndex += direction;
		bannersContainer.dataset.index = this.currentIndex;

		this.updateTransform(bannersContainer);

		bannersContainer.style.transition = "transform 0.5s ease";

		bannersContainer.addEventListener(
			"transitionend",
			() => {
				bannersContainer.style.transition = "none";

				const totalSlides = bannersContainer.children.length;
				const realSlides = totalSlides - 2;

				if (this.currentIndex >= totalSlides - 1) {
					this.currentIndex = 1;
				} else if (this.currentIndex <= 0) {
					this.currentIndex = realSlides;
				}

				bannersContainer.dataset.index = this.currentIndex;
				this.updateTransform(bannersContainer);
				bannersContainer.dataset.animating = "0";
				this.updateSlideAccessibility();
			},
			{once: true},
		);
	},
	updateTransform(bannersContainer) {
		const translateX = -this.currentIndex * 100;
		bannersContainer.style.transform = `translateX(${translateX}vw)`;
		this.updateSlideAccessibility();
	},
	initAccessibility(bannersContainer) {
		const allFocusables = bannersContainer.querySelectorAll("a, button, input, textarea, select");
		allFocusables.forEach((element) => {
			if (element.dataset.carouselControl !== "true") {
				element.setAttribute("tabindex", "-1");
			}
		});

		this.updateSlideAccessibility();
	},
	updateSlideAccessibility() {
		const bannersContainer = document.getElementById("bannersContainer");
		const slides = [...bannersContainer.children];

		slides.forEach((slide, index) => {
			const isActive = index === this.currentIndex;
			slide.setAttribute("aria-hidden", !isActive);
			const focusables = slide.querySelectorAll("a, button, input, textarea, select");

			focusables.forEach((element) => {
				if (element.dataset.carouselControl === "true") return;
				if (!isActive) return element.setAttribute("tabindex", "-1");
				element.removeAttribute("tabindex");
			});
		});
	},
};

const areasDeAplicacao = {
	createAll() {
		this.createSection();
		this.createHeader();
		this.createButtons();
	},
	createSection() {
		const divId = "areasDeAplicacao";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createHeader() {
		const div = document.getElementById("areasDeAplicacaoContainer");
		const {smallHeader, header} = textLibrary.home.areasDeAplicacao;
		const h4 = build.h4(smallHeader);
		const h2 = build.h2(header);
		div.append(h4, h2);
	},
	createButtons() {
		const div = document.getElementById("areasDeAplicacaoContainer");
		const container = document.createElement("div");
		container.classList.add("cartaoContainer");
		for (const {text, icon, link} of textLibrary.home.areasDeAplicacao.buttons) {
			const a = build.a(text, icon, link, false, true);
			a.classList.add("cartaoAplicacao");
			container.append(a);
		}
		div.append(container);
	},
};

const entendaComoFunciona = {
	createAll() {
		this.createSection();
		this.createImage();
		this.createText();
	},
	createSection() {
		const divId = "entendaComoFunciona";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createImage() {
		const container = document.getElementById("entendaComoFuncionaContainer");
		const img = build.img(imageLibrary.home.entendaComoFunciona.droplet, "boxShadow");
		container.append(img);
	},
	createText() {
		const container = document.getElementById("entendaComoFuncionaContainer");
		const div = document.createElement("div");

		const {smallHeader, header, text, button} = textLibrary.home.entendaComoFunciona;
		const h4 = build.h4(smallHeader);
		const h2 = build.h2(header);
		const p = build.p(text);

		const {text: buttonText, link} = button;
		const a = build.a(buttonText, null, link);
		a.classList.add("buttonStyleBlue");

		div.append(h4, h2, p, a);
		container.append(div);
	},
};

const diferenciais = {
	createAll() {
		this.createSection();
		this.createHeader();
		this.createCards();
	},
	createSection() {
		const divId = "diferenciais";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createHeader() {
		const container = document.getElementById("diferenciaisContainer");
		const {smallHeader, header} = textLibrary.home.diferenciais;
		const h4 = build.h4(smallHeader);
		const h2 = build.h2(header);

		container.append(h4, h2);
	},
	createCards() {
		const container = document.getElementById("diferenciaisContainer");
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("cartaoDiferencialContainer");
		const {cards} = textLibrary.home.diferenciais;
		for (const {header, text, icon} of cards) {
			const card = document.createElement("div");
			const img = build.img(icon);
			const h3 = build.h3(header);
			const p = build.p(text);

			card.append(img, h3, p);
			cardContainer.append(card);
		}
		container.append(cardContainer);
	},
};

const clientes = {
	createAll() {
		this.createSection();
		this.createHeader();
		this.createCards();
	},
	createSection() {
		const divId = "clientes";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createHeader() {
		const div = document.getElementById("clientesContainer");
		const {header, smallHeader} = textLibrary.home.clientes;
		const h4 = build.h4(smallHeader);
		const h2 = build.h2(header);

		div.append(h4, h2);
	},
	createCards() {
		const div = document.getElementById("clientesContainer");
		const container = document.createElement("div");
		container.classList.add("cartaoClientes");
		const {clientes} = imageLibrary;

		for (const {src, alt} of clientes) {
			const card = document.createElement("div");
			const img = build.img({src, alt});

			card.append(img);
			container.append(card);
		}

		div.append(container);
	},
};

const nossoTrabalho = {
	createAll() {
		this.createSection();
		this.createHeader();
		this.createPictures();
	},
	createSection() {
		const divId = "nossoTrabalho";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
	createHeader() {
		const div = document.getElementById("nossoTrabalhoContainer");
		const {smallHeader, header} = textLibrary.home.nossoTrabalho;
		const h4 = build.h4(smallHeader);
		const h2 = build.h2(header);

		div.append(h4, h2);
	},
	createPictures() {
		const div = document.getElementById("nossoTrabalhoContainer");
		const container = document.createElement("div");
		container.classList.add("cartoesTrabalho");
		const {cards} = textLibrary.home.nossoTrabalho;

		for (const {text, before, after, link} of cards) {
			const card = document.createElement("a");
			const h3 = build.h3(text);
			const imgBefore = build.img(before);
			const imgAfter = build.img(after);
			card.classList.add("boxShadow");
			card.href = link;
			card.append(h3, imgBefore, imgAfter);
			container.append(card);
		}

		div.append(container);
	},
};
