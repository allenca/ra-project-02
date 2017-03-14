import BestBuyWebService from './BestBuyWebService';
import CatalogView from './CatalogView';
import ShoppingCart from './ShoppingCart';
// import ShoppingCartView from './ShoppingCartView';

export default class App {
    constructor(){
        this.productData = null; // this will store all our data
        this.products = null; // stores specifically the products
        this.catalogView = new CatalogView(); // this will display our data
        this.shoppingCart = new ShoppingCart();
        // this.topCounter = new topCounter();
        
        // call the initBestBuyWebService to initialize the BestBuy Web Service and return the data
        this.initBestBuyWebService();
    }

    initBestBuyWebService(){
        this.bbws = new BestBuyWebService();
        
        this.bbws.apiKey = "SXkiDh8lcFEAqyG6rDmJjlH4";

        // this uses 'backticks' for long multi-line strings
        this.bbws.url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${this.bbws.apiKey}&format=json`;

        // pass the reference to this app to store the data, (this) means the entire app.js **important
        this.bbws.getData(this);
    }

    prepCatalog(){
        // console.log(this.productData); testing the data

        if(this.productData!=null){
            // only get the products property (for now)
            // this code was copied from SimpleHTTPRequest.html
            this.products = this.bbws.getProducts();
        }
        this.showCatalog();
    }

    showCatalog() {
        // populate the catalog only if there are products
        if (this.productData != null) {
            this.catalogView.addProductsToCarousel(this.products);
            // this.catalogView.showCatalog();
        }
    }


// topCounter(){
//     // Counter for add to cart function
//     // 1. check existing cart value   
//     $(".addtocart").on("click", function (){

//     // 2. add 1 to the value
//     var inputField = parseInt($("#cartQty").val());
//     inputField = inputField + 1; 
//     $("#cartQty").val(inputField++);

//     // 3. put value back in input
//     $("#cartQty").show();
//     })
//     }
}


