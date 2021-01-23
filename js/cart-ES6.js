var productsCartBtn = document.getElementById("products-cart-btn");
var productsCartContainer = document.querySelector(".products-cart-container");

productsCartBtn.addEventListener('click', event => {
    productsCartContainer.classList.toggle("cart-invisible");
  });

productsCartContainer.addEventListener('mouseleave', event => {
    productsCartContainer.classList.add("cart-invisible");
});


let addProductToCartBtn = document.querySelectorAll(".add-cart-btn");
addProductToCartBtn.forEach(element => {
    element.addEventListener("click", function(){

        productsCartContainer.classList.remove("cart-invisible");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        let $product_Name = this.parentElement.parentElement.children[0].children[0].innerHTML;
        let $product_Price =  this.parentElement.parentElement.children[1].children[0].innerHTML;
        let $product_Img = this.parentElement.parentElement.parentElement.children[0].children[0].getAttribute("src");
        let productsList = document.querySelector(".products-list");
        let generatedProduct = `
        <!--  ===  START CART PRODUCT  ===  -->
                    <div class="row cart-product">
                        <div class=" col-lg-4 cart-product-img">
                            <img class="img-fluid" src=${$product_Img}>
                        </div>
                        <div class=" col-lg-7 cart-product-info flex-col-fs">
                            <span class="cart-product-name">
                                ${$product_Name}
                            </span>
                            <span class="cart-product-price">
                                ${$product_Price}
                            </span>
                        </div>
                        <div class="col-lg-1 cart-product-delete flex-row-c-c">
                            <button class="delete-cart-btn">
                                <i class="fal fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                    <!--  ===   END  CART PRODUCT  ===  -->`;
        productsList.innerHTML += (generatedProduct);


        // TO ADD PRODUCT TO CART NOTIFICATION
        let cart_index = document.querySelector(".cart-index");
        cart_index.innerHTML = productsList.children.length;
        let cartTotalPrice = document.querySelector(".t-price");
        cartTotalPrice.innerHTML = parseFloat(cartTotalPrice.innerHTML) + parseFloat($product_Price) + ".00" + " $";



     

        // TO DELETE {{NO ITEMS IN YOUR CART}} SENTENCE
        let emptyCart = document.getElementById('empty-cart');
        (productsList.children.length >= 1 ? emptyCart.classList.add("d-none"): emptyCart.classList.remove("d-none"));

        // TO DELETE PRODUCT FROM PRODUCTS LIST
        let deleteBtnArray = document.querySelectorAll('.delete-cart-btn');
        deleteBtnArray.forEach(element => {
            element.addEventListener("click", function(){
                this.parentElement.parentElement.remove();
                let emptyCart = document.getElementById('empty-cart');
                (productsList.children.length >= 1 ? emptyCart.classList.add("d-none"): emptyCart.classList.remove("d-none"));
                cart_index.innerHTML = productsList.children.length;
                cartTotalPrice.innerHTML = parseFloat(cartTotalPrice.innerHTML) - parseFloat(element.parentElement.parentElement.children[1].children[1].innerHTML) + ".00" + " $";
            })
        });


    })
});