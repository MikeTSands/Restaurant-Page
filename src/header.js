import initialLoad from "./pageLoad";
import renderHomePage from "./home";
import renderMenuPage from "./menu";
import renderContactPage from "./contact";

const header = (() => {
	const content = document.querySelector("#content");

	//create header
	const header = document.createElement("div");
	header.setAttribute("id", "header");

	//create header title
	const title = document.createElement("h1");
	title.textContent = "Mike's Restaurant";
	header.appendChild(title);

	//create navbar for tabs
	const navbar = document.createElement("div");
	navbar.setAttribute("id", "tabs-container");
    
	//create home tab
	const homeTab = document.createElement("li");
	homeTab.setAttribute("id", "tab1");
	homeTab.classList.add("used");
	homeTab.textContent = "Home";

	//create menu tab
	const menuTab = document.createElement("li");
	menuTab.setAttribute("id", "tab2");
	menuTab.textContent = "Menu";

	//create contact tab
	const contactTab = document.createElement("li");
	contactTab.setAttribute("id", "tab3");
	contactTab.textContent = "Contact Us";

	//append tabs to navbar
	navbar.appendChild(homeTab);
	navbar.appendChild(menuTab);
	navbar.appendChild(contactTab);

	header.appendChild(navbar);
	content.appendChild(header);


	//create event listeners

	homeTab.addEventListener("click", () => {
		clearContent();
		renderHomePage();
	});

	menuTab.addEventListener("click", () => {
		clearContent();
		renderMenuPage();
	});

	contactTab.addEventListener("click", () => {
		clearContent();
		renderContactPage();
	});


});


function clearContent() {
	const content = document.querySelector("#content");
	const pageContent = document.querySelector(".page-content");

	if (pageContent) {
		content.removeChild(pageContent);
	}
}


export default header;