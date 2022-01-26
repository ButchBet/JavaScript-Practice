// For the product card component 
<section class="description">
<div class="name"><p>${this.productName}</p></div>

<section class="colors">
    <img class="color" src="https://n.nordstrommedia.com/id/sr3/0b11abfd-19d2-478b-84ad-58d51c5ab6ee.jpeg?crop=fit&w=31&h=31" alt="${this.colorAlt}">

    <i class="gg-arrow-right-r"></i>
</section>

// For the product row component
let men = fetch("../data/men.json", option);
            let women = fetch("../data/women.json", option);
            let kids = fetch("../data/kids.json", option);
            let gifts = fetch("../data/gifts.json", option);
            
            const option = {
            "method" : "GET",
            "header" : {}
        };