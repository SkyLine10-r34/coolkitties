(function() {
    const productsJson = 
        [
            {
                "id": "1", 
                "name": "Baby Yoda",
                "description": "Some description",
                "price": 10.99,
                "imgUrl": "img/baby-yoda.svg"
            },
            {
                "id": "2", 
                "name": "Banana",
                "description": "Some description",
                "price": 9.99,
                "imgUrl": "img/banana.svg"
            },
            {
                "id": "3", 
                "name": "Girl",
                "description": "Some description",
                "price": 11.99,
                "imgUrl": "img/girl.svg"
            },
            {
                "id": "4", 
                "name": "Viking",
                "description": "Some description",
                "price": 8.99,
                "imgUrl": "img/viking.svg"
            },
        ]
    ;

    function rendarProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        for (const product of products){
            productsContainer.innerHTML += `
            <article class="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="${product.imgUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-info">Info</a>
              <a href="#" class="btn btn-buy">Buy - ${product.price}</a>
              </div>
            </article>
            `;
        } 
    }

    const products = JSON.parse(productsJson);
    renderProducts(products);

})();