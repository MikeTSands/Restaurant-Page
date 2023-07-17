import header from "./header";

const renderContactPage = () => {
	//container
	const contentContainer = document.querySelector("#content");
	

	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");


	//add back quote from start of code to end
	pageContent.innerHTML = `<div id="page">
    <div id="store-information">
        <h1>Open</h1>
        <p>Monday to Friday: 12:00-21:00</p>
        <p>Saturday and Sunday: 12:00-22:00</p>
    </div>
    <div id="address">
        <p> 123 Cloud District, 
        Whiterun, 
        Skyrim, 
        Tamriel</p>
    </div>
    <div id="telephone">
        <p> 012-3456-7890</p>
    </div>
</div>`;


	contentContainer.appendChild(pageContent);
};

export default renderContactPage;