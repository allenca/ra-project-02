export default class CatalogView {
    constructor(){
        this.theApp = null;
    }

    initCarousel(){
       this.carousel = document.getElementById("product-wrap");

       // owl carousel function
        $(function(){
            console.log('i am in the carousel');
            $('.owl-carousel').owlCarousel({
                loop:true,
                items:4,
                margin:50,
                nav:true,
                dots:true,
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
            // for every object in the array of products from bestbuy,
            // do the following code
            // each product is a product object

            // create the div tag with class 'product-wrap'
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","product-wrap");

            let divForButtons = document.createElement("div");
            newDiv.setAttribute("class","product-wrap");
            divForButtons.setAttribute("style",`display:flex; justify-content:center;`);

            // create a new IMG tag. Suggest to add sku attribute here too
            // so that if you 'click' on the image, it would pop up a quick-view
            // window and you can use the sku.
            let newImg = document.createElement("img");
            newImg.setAttribute("src", product.image);
            newImg.setAttribute("alt", `${product.name}`);
            newImg.setAttribute("sku",product.sku);

            // create a new Paragraph to show a description
            // let newPara = document.createElement("p");
            // newPara.setAttribute("class","product-type");
            // let newParaTextNode = document.createTextNode(product.longDescription);
            // newPara.appendChild(newParaTextNode);
            let newH3Tag = document.createElement("h3");
            let newH3TagTextNode = document.createTextNode(product.name);
            newH3Tag.setAttribute("style",`text-align:center;`);
            newH3Tag.appendChild(newH3TagTextNode);


            // set variable to make a p tag,
            // assign the p tag a class of regularPrice
            // set variable to make a textnode with value of $regularPrice
            // append the textnode to the p tag
            let newPricePara = document.createElement("p");
            newPricePara.setAttribute("class","regularPrice");
            newPricePara.setAttribute("style",`color:green; text-align:center;`);
            let newPriceParaTextNode = document.createTextNode("$"+product.regularPrice);
            newPricePara.appendChild(newPriceParaTextNode);

            let quickView = document.createElement("button");
            quickView.setAttribute("class","quickView");
            quickView.innerHTML = "Quick View";

            let addToCart = document.createElement("button");
            addToCart.setAttribute("class","AddToCart");
            addToCart.setAttribute("sku",product.sku);
            addToCart.innerHTML = "Add To Cart";
            addToCart.addEventListener("click",this.onClickCartButton(this.theApp,products),false); 
            // on click, listen to the click, run the function onClickCartButton and pass it theApp and products data, 
            // false means don't do anything else

            // adding the created elements to the div
            newDiv.appendChild(newImg);
            // newDiv.appendChild(newPara);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPricePara);
            // document.getElementById("myElement");
            newDiv.appendChild(divForButtons);
            divForButtons.appendChild(quickView);
            divForButtons.appendChild(addToCart);
            carousel.appendChild(newDiv);

            // image
            // manufacturer
            // name

        }
        console.log('i am adding products to the html');
        this.initCarousel();
    }
    
    // handleQuickViewClick(products){
    //    return function(e) {
    //     console.log(e);
    //     // e.getAttribute(sku)


    //    }  
    // }

    onClickCartButton(){
        // define this function, e is what happens after the click, it is a mouse event
        let skuFunction = function(e){
            let gettingTheSku = e.target.getAttribute("sku"); // getting the sku number from that product's button
            theApp.ShoppingCart.addItemToCart(gettingTheSku, theApp); 
            // run a function called addItemToCart once the button is clicked
            // define addItemToCart now in shoppingcart.js
        }
    }
}


