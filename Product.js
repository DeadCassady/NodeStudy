let products = [];
  
  function Product(
        ID,
        name, 
        description, 
        price, 
        brand, 
        activeSize, 
        quantity, 
        date){
        this.ID = validate(ID, "number");
        this.name = validate(name, "string");
        this.description = validate(description, "string");
        this.price = validate(price, "number");
        this.brand = validate(brand, "number");
        this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        if(this.sizes.includes(activeSize)){
            this.activeSize = activeSize;
        }
        this.quantity = validate(quantity, "number");
        this.date = new Date(date);
        this.reviews = [];
        this.images = [];
        /**
         * this is a section for the getters and setters
         *  
         */
        this.getID = function(){
            return this.ID;
        }
        this.setID = function(ID){
            this.ID = validate(ID, "number");
        }
        this.getName = function(){
            return this.name;
        }
        this.setName = function(name){
            this.name = validate(name, "string");
        }
        this.getDescription = function(){
            return this.description;
        }
        this.setDescription = function(description){      
            this.description = validate(description, "string");
        }
        this.getPrice = function(){
            return '$' + this.price;
        }
        this.setPrice = function(price){
            this.price = validate(price, "number");
        }
        this.getBrand = function(){
            return this.brand;
        }
        this.setBrand = function(brand){
            this.brand = validate(brand, "number");
        }
        this.getActiveSize = function(){
            return this.activeSize;
        }
        this.setActiveSize = function(activeSize){
            if(this.sizes.includes(activeSize)){
                this.activeSize = activeSize;
                console.log('The active size was set to ' + activeSize);
            }else{
                console.log('The ' + activeSize + ' is not a valid one');
            }
        }
        this.getQuantity = function(){
            return this.quantity;
        } 
        this.setQuantity = function(quantity){
            this.quantity = validate(quantity, "number");
        }   
        this.getDate = function(){
            return this.date;
        }
        this.setDate = function(date){
          this.date = new Date(date);
        }
        /**
         * This is a section for the required functions
         * 
         */
        this.getReviewByID = function(ID){
            let comment;
            this.reviews.forEach((review) =>{
                if(review.ID === ID){
                    comment = review.comment;
                }
            });
            return comment;
        } 
        this.getImage = function(image){
             this.images.push(image);
        }
        this.addSize = function(size){
            const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
            if(possibleSizes.includes(size)){
               this.sizes.push(size);
            }
        }
        this.deleteSize = function(size){
            if(this.sizes.includes(size)){
                this.sizes.splice(this.sizes.indexOf(size), 1);
            }
        }
        this.addReview = function(Reviews){
           this.reviews.push(Reviews);
        }
        this.deleteReview = function(ID){
            this.reviews.forEach((review) =>{
                if(review.ID === ID){
                    this.reviews.splice(this.reviews.indexOf(review), 1);
                }
            });
        }
        this.getAverageRating = function(){
            let sum = 0;
            this.reviews.forEach((review) =>{
                
                sum+= review.rating;
            });
            return sum/this.reviews.length;
        }
        products.push(this);
    }

    export default Product;
   

function validate( value, type){
    if(typeof value == type){
      return value;
    }else if(typeof value != type && value != undefined){
        console.log('The ' + value + ' is not of the correct type. Please use a ' + type);
    }
}
function searchProducts(products, search){
    let matchingProduce = [];
    let theDescription;
    let theName;
    products.forEach((product) =>{
        for(let i = 0; i <= product.name.length; i++){
            for(let j = i; j <= product.name.length; j++){
                if(product.name != undefined){
                theName = product.name.substring(i, j);
                }
                if(product.description != undefined){
                 theDescription = product.description.substring(i, j);
                }
                if(theName == search || theDescription == search){
                 matchingProduce.push(product.name);
                 
                }
            }
        }
    });
    return matchingProduce;
}

function testSearch(){
    let products = [];
    products.push(new Product(1, "jeans"));
    products.push(new Product(2, "blue jeans"));
    products.push(new Product(3, "jacket"));
    console.log(searchProducts(products, "a"));
}
testSearch();









