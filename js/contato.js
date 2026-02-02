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

		faleConosco.createAll();
		googleMaps.createAll();

		siteFooter.createAll();
		eventListeners.createInitial();
	},
};

const faleConosco = {
	createAll() {
		this.createSection();
	},
	createSection() {
		const divId = "faleConosco";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
};

const googleMaps = {
	createAll() {
		this.createSection();
	},
	createSection() {
		const divId = "googleMaps";
		const div = build.sectionDiv(divId);
		div.classList.add(divId);
	},
};
