/**
 * Created by Edward_J_Apostol on 2017-01-28.
 */

// this class is responsible for displaying the product data...
// Perhaps in a carousel.
export default class CatalogView {

    constructor(){
        this.initCarousel();
        this.handleQuickViewClick();
        this.handleAddClick();
    }

    handleQuickViewClick(){
        console.log("handle my click");
        $(document).on("click .quickView", function() {
            console.log("hello");
        });
    }

    handleAddClick(){
        console.log("handle it again");
        $(document).on("click .AddToCart", function() {
            console.log("hello");
        });
    }

    initCarousel(){
       this.carousel = document.getElementById("product-wrap");
    }

    addProductsToCarousel(products){

        if (products === undefined || products == null){
            return ; // do not do anything! there is no data
        }

        
        for (let p=0; p<products.length; p++){
            let product = products[p];
            console.log(product);
            // each product is a product object
            // use it to create the element

            // create the DIV tag with class 'product-wrapper'
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","product-wrapper");

            // create a new IMG tag. Suggest to add data-sku attribute here too
            // so that if you 'click' on the image, it would pop up a quick-view
            // window and you can use the sku.
            let newImg = document.createElement("img");
            newImg.setAttribute("src", product.image);
            newImg.setAttribute("alt", `${product.name}`); // this works too
            newImg.setAttribute("data-sku",product.sku);

            // create a new Paragraph to show a description
            let newPara = document.createElement("p");
            newPara.setAttribute("class","product-type");
            let newParaTextNode = document.createTextNode(product.longDescription);
            newPara.appendChild(newParaTextNode);

            // create a new H3 tag to show the name
            let newH3Tag = document.createElement("h3");
            let newH3TagTextNode = document.createTextNode(product.name);
            newH3Tag.appendChild(newH3TagTextNode);

            let newPricePara = document.createElement("p");
            newPricePara.setAttribute("class","price");
            let newPriceParaTextNode = document.createTextNode(product.regularPrice);
            newPricePara.appendChild(newPriceParaTextNode);

            let quickView = document.createElement("button");
            quickView.setAttribute("class","quickView");
            quickView.innerHTML = "Quick View";

            let quickView = document.createElement("button");
            quickView.setAttribute("class","AddToCart");
            quickView.innerHTML = "Add To Cart";

            /* you will need similar code to create
            an add to cart and a quick view button
            remember that each button you create should have
            a data-sku attribute that corresponds to the sku
            of each product.
            */
            newDiv.appendChild(quickView);
            newDiv.appendChild(AddToCart);
            newDiv.appendChild(newImg);
            newDiv.appendChild(newPara);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPricePara);
            this.carousel.appendChild(newDiv);
        }

    }

}
