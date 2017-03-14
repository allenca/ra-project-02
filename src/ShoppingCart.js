export default class ShoppingCart{
    constructor(){
        console.log("creating shopping cart");
        if(Storage){
            // you can create a shoppingCart!
            this.initShoppingCart();
        } else
        {
            console.log("Error! SessionStorage not supported in your browser!");
        }
    }
    viewCart(){
        $(".cart").on("click",function (){
            $("#cart").show();
        })
    }
    initShoppingCart(){
        // create the sessionStorage object that will be used
        // to store the items.
        console.log("finished creating shopping cart");
    }

    addItemToCart(sku, theApp){

    }

    removeItemFromCart(sku){

    }

    updateQuantityofItemInCart(sku,qty){

    }

    clearCart(){
        // clear the entire cart
    }


}
