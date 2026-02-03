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

		clientes.createAll();

		siteFooter.createAll();
		eventListeners.createInitial();
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
		div.classList.add(divId, "clientesPageSection");
	},
	createHeader() {
		const div = document.getElementById("clientesContainer");
		const {header, smallHeader} = textLibrary.home.clientes;
		const h2 = build.h2(smallHeader);
		const h3 = build.h3(header);

		div.append(h2, h3);
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

