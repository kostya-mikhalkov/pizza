export function newProducts() {
   const newMenu = document.querySelector(".new-menu"),
         newMenuFlex = document.querySelector(".new-menu__flex");
   class newCardMenu {
    constructor({name, price, src}) {
        this.name = name;
        this.price = price;
        this.src = src;
    }
    renderHTML(parent) {
        const div = document.createElement("div");
        div.classList.add("new-menu__box")
        div.innerHTML = `
            <div class="new-menu__img">
                <img src="${this.src}" alt="products">
            </div>
            <div class="new-menu__descr">
                <p class="new-menu__descr-text">${this.name}</p>
                <span class="new-menu__descr-price">от ${this.price} руб</span>
            </div>
        `;
        parent.append(div)
    }
   }
   async function getResponce() {
        try {
            const promise = await fetch('db.json');
            const res = await promise.json();
            return await res;
        } catch(e) {
            throw new Error('Bad error')
        }
    }
    (async function() {
        const one = await getResponce();
        for (let i = 0; i < one.newMenu.length; i++) {
            const obj = one.newMenu;
            const el = new newCardMenu(obj[i]);
            el.renderHTML(newMenuFlex)
        }
    })()
}
