export default class ShoppingCart{
    constructor(){
        console.log("creating shopping cart");
        if(Storage){
            // you can create a ShoppingCart!
            this.initShoppingCart();
        } else {
            console.log("Error! SessionStorage not supported in your browser!");
        }
        this.addItemToCart
    }

    initShoppingCart(){
        // create the sessionStorage object that will be used
        // to store the items.
        console.log("finished creating shopping cart");
    }

    viewCart(){
        $(".cart").on("click",function (){
            $("#cart").show();
        })
    }

    addItemToCart(sku,theApp){
        for (let p=0; p<products.length; p++){
            let product = products[p];
            console.log(product);
            console.log("i am additemtocart");
            // if (products[p] == theApp.CatalogView.gettingTheSku){

            // }
        }
    }

    // loop through the products
    // if the current product sku = the sku of the button clicked
    // then 
    // if current sku qty is 0,
    // write the sku in sessionstorage as a key, then write qty as 1 
    // else
    // get current sku in sessionstorage and for that value = current value ++
    

    // sessionStorage.setItem(sku, 'value'){

    // }

    decreaseQuantityFromCart(sku){

    }

    updateQuantityofItemInCart(sku,qty){

    }

    clearCart(){
        
    }
}

