document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;

            const cartItem = document.createElement("li");
            cartItem.textContent = productName;
            cartItems.appendChild(cartItem);
        });
    });

    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zipcode = document.getElementById("zipcode").value;

        // Count the number of each item in the cart
        const cartItems = document.querySelectorAll("#cart-items li");
        const itemCounts = {};

        cartItems.forEach((item) => {
            const itemName = item.textContent;
            itemCounts[itemName] = (itemCounts[itemName] || 0) + 1;
        });

        const requiredItems = {
            "Eggs": 2,
            "Flower": 1,
            "Milk": 1,
            "Sugar": 1,
            "Chocolate Chips": 1,
        };

        let canCheckout = true;
        for (const item in requiredItems) {
            if (itemCounts[item] !== requiredItems[item]) {
                canCheckout = false;
                break;
            }
        }

        if (canCheckout) {
            alert("Thank you for your order! Your items will be shipped to:\n" + 
                `Name: ${name}\nAddress: ${address}\nCity: ${city}\nZip Code: ${zipcode}`);
        } else {
            alert("You must have 2 eggs, 1 flour, 1 milk, 1 sugar, and 1 chocolate chips in your cart to check out. Please try again.");
        }
    });

    function floatCookie() {
        const animatedCookie = document.querySelector(".animated-cookie");
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let x = Math.random() * screenWidth;
        let y = Math.random() * screenHeight;
        x = Math.min(x, screenWidth - animatedCookie.offsetWidth);
        y = Math.min(y, screenHeight - animatedCookie.offsetHeight);

        animatedCookie.style.left = x + "px";
        animatedCookie.style.top = y + "px";
        setTimeout(floatCookie, 5000); 
    }
    floatCookie();
});



