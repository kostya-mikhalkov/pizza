export function products() {
    const product = document.querySelector(".products__flex");
    class ProductCard {
        constructor({name, src, text, price}){
            this.name = name;
            this.src = src;
            this.text = text;
            this.price = price;
        }
        render() {
            const div = document.createElement("div");
            div.classList.add("products__cards");
            div.innerHTML = `
                <img src=${this.src} alt="products" class="products__cards-img">
                <h3 class="products__cards-title">${this.name}</h3>
                <p class="products__cards-text">
                    ${this.text}
                </p>
                <div class="products__cards-prices">
                    <span>от ${this.price} ₽</span>
                    <button class="add-btn">В корзину</button>
                </div>
            `;
            product.append(div);
        }
    }
    async function getResponce() {
        try {
            const promise = await fetch("db.json");
            const res = await promise.json();
            return await res;
        } catch(e) {
            throw new Error('errererr')
        }
    }
    (async function() {
        const resp = await getResponce();
        for (let i = 0; i < resp.products.length; i++) {
            const newCard = new ProductCard(resp.products[i]);
            newCard.render()
        }
    })()
}
