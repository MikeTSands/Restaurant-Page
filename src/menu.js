import header from "./header";

const renderMenuPage = () => {
	const contentContainer = document.querySelector("#content");

	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");

	//add back quote from start of code to end
	pageContent.innerHTML = `
    <div id = "menu-page">
        <h1>Menu</h1>
        <div id = "menu-container">
            <div class = "menu-item">
                <img src = "./Images/pizza.png" />
                <div class="item-content">
                    <h4>Pizza:</h4> <span>$9.99</span>
                    <p>Homemade meat pizza. Not suitable for vegetarians or vegans.</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./Images/steak.png" />
                <div class="item-content">
                    <h4>Steak and French fries:</h4> <span>$14.99</span>
                    <p>Delicious steak with large side of french fries. Not suitable for vegetarians or vegans.</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./Images/cheeseburger.png" />
                <div class="item-content">
                    <h4>Cheeseburger:</h4> <span>$9.99</span>
                    <p>Bread, patty, cheese, lettuce and tomato. Not suitable for vegetarians or vegans.</p>
                </div>
            </div>
            <div class = "menu-item">
                <img src = "./Images/tomatosoup.png" />
                <div class="item-content">
                    <h4>Tomato Soup:</h4> <span>$4.99</span>
                    <p>Something for your boring friend/partner.</p>
                </div>
            </div>
        </div>
    </div>`;

	contentContainer.appendChild(pageContent);
};

export default renderMenuPage ;