import BestBuyWebService from './BestBuyWebService';
import CatalogView from './CatalogView'
import ShoppingCart from './ShoppingCart'

export default class App {

    constructor(){
        this.productData = null; // this will store all our data
        this.products = null; // stores specifically the products
        this.catalogView = new CatalogView(); // this will display our data
        this.shoppingCart = new ShoppingCart();
        // call the initBestBuyWebService to initialize the
        // BestBuy Web Service and return the data
        this.initBestBuyWebService();
    }

    initBestBuyWebService(){
        this.bbws = new BestBuyWebService();
        // use your own API key for this (the one from Cody)
        this.bbws.apiKey = "SXkiDh8lcFEAqyG6rDmJjlH4";

        // this uses 'backticks' for long multi-line strings
        this.bbws.url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${this.bbws.apiKey}&format=json`;

        // pass the reference to this app to store the data, (this) means the entire app.js **important
        this.bbws.getData(this);

    }

    prepCatalog(){
        // use this console.log to test the data
        // console.log(this.productData);

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

}

// Counter for add to cart function
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1240:{
                items:4
            }
        }
    });
    
    // 1. check existing cart value   
    $(".addtocart").on("click", function (){

    // 2. add 1 to the value
    var inputField = parseInt($("#cartQty").val());
    inputField = inputField + 1; 
    $("#cartQty").val(inputField++);
    
    // 3. put value back in input
    $("#cartQty").show();
  })
});