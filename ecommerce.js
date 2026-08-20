let products = [];
let cart = {};

const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products;

    console.log(products);

    const productcontainer = document.getElementById("products-container");

    for (let i = 0; i < products.length; i++) {

        const product = products[i];

       
        const div = document.createElement("div");
        div.classList.add("product-card");

       
        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        
        const title = document.createElement("h2");
        title.innerText = product.title;

        
        const price = document.createElement("p");
        price.innerText = `$${product.price}`;

        
        const quantity = document.createElement("span");
        quantity.classList.add("quantity");
        quantity.innerText = "0";

       
        const cartControls = document.createElement("div");
        cartControls.classList.add("cart-controls");

        
        const decrementBtn = document.createElement("button");
        decrementBtn.classList.add("decrement-btn");
        decrementBtn.innerText = "-";

      
        const addItemSpan = document.createElement("span");
        addItemSpan.classList.add("add-item-span");
        addItemSpan.innerText = "ADD ITEM";

        
        const incrementBtn = document.createElement("button");
        incrementBtn.classList.add("increment-btn");
        incrementBtn.innerText = "+";


     

        addItemSpan.addEventListener("click", () => {

            const productId = product.id;

            if (!cart[productId]) {
                cart[productId] = 0;
            }

            cart[productId]++;

            quantity.innerText = cart[productId];

            console.log("Cart:", cart);
        });



        incrementBtn.addEventListener("click", () => {

            const productId = product.id;

            if (!cart[productId]) {
                cart[productId] = 0;
            }

            cart[productId]++;

            quantity.innerText = cart[productId];

            console.log("Cart:", cart);
        });


        
        decrementBtn.addEventListener("click", () => {

            const productId = product.id;

            if (cart[productId] && cart[productId] > 0) {

                cart[productId]--;

                quantity.innerText = cart[productId];

                // Remove from cart when quantity becomes 0
                if (cart[productId] === 0) {
                    delete cart[productId];
                }
            }

            console.log("Cart:", cart);
        });


        
        cartControls.appendChild(decrementBtn);
        cartControls.appendChild(addItemSpan);
        cartControls.appendChild(incrementBtn);

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);

        
        div.appendChild(quantity);

        div.appendChild(cartControls);

        productcontainer.appendChild(div);
    }
};



getProducts();