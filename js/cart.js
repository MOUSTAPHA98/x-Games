var productsCartBtn = document.getElementById("products-cart-btn");
var productsCartContainer = document.querySelector(".products-cart-container");

productsCartBtn.addEventListener('click', event => {
    productsCartContainer.classList.toggle("cart-invisible");
  });



var addProductToCartBtn = document.querySelectorAll(".add-cart-btn");
addProductToCartBtn.forEach(element => {
    element.addEventListener('click', event => {

        productsCartContainer.classList.remove("cart-invisible");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        var productsList = document.querySelector(".products-list");
        var cartProduct = document.createElement('div');
        var cartProductImg = document.createElement("div");
        var cartProductInfo = document.createElement("div");
        var cartProductDelete = document.createElement('div');
        var cartProductImgImg = document.createElement("img");
        var cartProductName = document.createElement('span');
        var cartProductPrice = document.createElement('span');
        var delete_cart_btn = document.createElement('button');
        var deleteIcon = document.createElement("i");

        
        cartProduct.classList.add("row","cart-product");
        productsList.appendChild(cartProduct);

 

        cartProductImg.classList.add("col-lg-4","cart-product-img");
        cartProductInfo.classList.add("col-lg-7", "cart-product-info", "flex-col-fs");
        cartProductDelete.classList.add("col-lg-1","cart-product-delete","flex-row-c-c");

        cartProduct.appendChild(cartProductImg);
        cartProduct.appendChild(cartProductInfo);
        cartProduct.appendChild(cartProductDelete);

        cartProductImgImg.classList.add("img-fluid");
        cartProductImg.appendChild(cartProductImgImg);
        cartProductImgImg.setAttribute("src", element.parentElement.parentElement.parentElement.children[0].children[0].getAttribute("src"));

      
        cartProductName.classList.add("cart-product-name");
        cartProductPrice.classList.add("cart-product-price");

        cartProductName.innerHTML = element.parentElement.parentElement.parentElement.children[2].children[0].children[0].innerHTML; 
        cartProductPrice.innerHTML = element.parentElement.parentElement.parentElement.children[2].children[1].children[0].innerHTML;
        cartProductInfo.appendChild(cartProductName);
        cartProductInfo.appendChild(cartProductPrice);
        
        
        delete_cart_btn.classList.add("delete-cart-btn");
        cartProductDelete.appendChild(delete_cart_btn);
        deleteIcon.classList.add("fal","fa-trash-alt");
        delete_cart_btn.appendChild(deleteIcon);

        var deleteBtnArray = document.querySelectorAll('.delete-cart-btn');

        var emptyCart = document.getElementById('empty-cart');

        if(productsList.children.length >= 1){
            emptyCart.classList.add("d-none");

        } else{
            emptyCart.classList.remove("d-none");
        }

        var cart_index = document.querySelector(".cart-index");
        cart_index.innerHTML = productsList.children.length;

        var cartTotalPrice = document.querySelector(".t-price");
        cartTotalPrice.innerHTML = parseFloat(cartTotalPrice.innerHTML) + parseFloat(cartProductPrice.innerHTML) + ".00" + " $";
        
        deleteBtnArray.forEach(element => {
            element.onclick = function(){
                this.parentElement.parentElement.remove();
                cart_index.innerHTML = productsList.children.length;
                cartTotalPrice.innerHTML = parseFloat(cartTotalPrice.innerHTML) - parseFloat(element.parentElement.parentElement.children[1].children[1].innerHTML) + ".00" + " $";



                if(productsList.children.length > 0){
                    emptyCart.classList.add("d-none");
                } else{
                    emptyCart.classList.remove("d-none");
                    // document.querySelector(".products-cart-container").classList.add("cart-invisible");
                }
            }
        });


    });
});