import header from "./header";

const renderHomePage = () => {
	//container
	const contentContainer = document.querySelector("#content");
	

	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");


	//add back quote from start of code to end
	pageContent.innerHTML = `<div id="page">
		<div id="hero">
			<h2>Welcome to our restaurant.  The food isn't great but it is safe.....mostly</h2>
			<button class="order">Order Now</button>
		</div>
		<div id="store-information">
			<h1>Open</h1>
			<p>Monday to Friday: 12:00-21:00</p>
			<p>Saturday and Sunday: 12:00-22:00</p>
		</div>
	</div>`;


	contentContainer.appendChild(pageContent);
};

export default renderHomePage;