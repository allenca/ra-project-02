export default class CatalogView {
    constructor(){
        this.handleQuickViewClick();
        this.handleAddClick();
    }

    initCarousel(){
       this.carousel = document.getElementById("product-wrap");

       // owl carousel function
        $(function(){
            console.log('i am in the carousel');
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
        });
    }

    addProductsToCarousel(products){
        if (products === undefined || products == null){
            return ; // do not do anything! there is no data
        }
        
        let carousel = document.getElementById("product-wrap");

        for (let p=0; p<products.length; p++){
            let product = products[p];
            console.log(product);
            // each product is a product object
            // use it to create the element

            // create the DIV tag with class 'product-wrapper'
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","product-wrap");

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

            let quickView2 = document.createElement("button");
            quickView2.setAttribute("class","AddToCart");
            quickView2.innerHTML = "Add To Cart";

            /* you will need similar code to create
            an add to cart and a quick view button
            remember that each button you create should have
            a data-sku attribute that corresponds to the sku
            of each product.
            */
            newDiv.appendChild(quickView);
            newDiv.appendChild(quickView2);
            newDiv.appendChild(newImg);
            newDiv.appendChild(newPara);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPricePara);
            carousel.appendChild(newDiv);
        }
        console.log('i am products to the html');
        this.initCarousel();
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



}


