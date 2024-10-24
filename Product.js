function Product(
        ID='0',
        name='Jeans', 
        description='Fine jeans', 
        price = '10', 
        brand = "Levi's",
        sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        activeSize='L', 
        quantity='10', 
        date= new Date(),
        reviews = [],
        images = ['Jeans1','Jeans2','Jeans3','Jeans4']){
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.sizes = sizes;
        if(this.sizes.includes(activeSize)){
            this.activeSize = activeSize;
        }
        this.quantity = quantity;
        this.date = date;
        this.reviews = reviews;
        this.images = images;
        /**
         * this is a section for the getters and setters
         *  
         */
        this.getID = function(){
            return this.ID;
        }
        this.setID = function(ID){
            this.ID = ID;
        }
        this.getName = function(){
            return this.name;
        }
        this.setName = function(name){
            this.name = name;
        }
        this.getDescription = function(){
            return this.description;
        }
        this.setDescription = function(description){      
            this.description = description;
        }
        this.getPrice = function(){
            return '$' + this.price;
        }
        this.setPrice = function(price){
            this.price = price;
        }
        this.getBrand = function(){
            return this.brand;
        }
        this.setBrand = function(brand){
            this.brand = brand;
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
            this.quantity = quantity;
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
            return this.images[0] || this.images[image];
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
        this.getAverageRating = function(ID){
            let sum = 0;
            this.reviews.forEach((review) =>{
                if(review.ID === ID){
                    sum = review.rating.service + 
                    review.rating.price + 
                    review.rating.value + 
                    review.rating.quality;
                }
            });
            return sum/4;
        }
    }

    export default Product;
   
function searchProducts(products, search){
    let matchingProducts = [];
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
                    matchingProducts.push(product.name);
                 
                }
            }
        }
    });
    return matchingProducts;
}

function testSearch(){
    let products = [];
    products.push(new Product(1, "jeans"));
    products.push(new Product(2, "blue jeans"));
    products.push(new Product(3, "jacket"));
    console.log(searchProducts(products, "a"));
}
//testSearch();
function sortProducts(products, sortRule){
        if(sortRule === "price"){
            products.sort((a, b) => a.price - b.price);
        }else if(sortRule === "name"){
            products.sort((a, b) => a.name.localeCompare(b.name));
        }else if(sortRule === "ID"){
            products.sort((a, b) => a.ID - b.ID);
        }
  
    return products; 
}
function testSortProducts(){
    let products = [];
    let apple = new Product(1, "apple", "j", 10);
    let coconut =new Product(2, "coconut", "j", 25);
    let gleamer =new Product(3, "gleamer", "j", 10000);
    let lays =new Product(5, "lays", "j", 80);
    let ruler =new Product(4, "ruler", "j", 9);
    let blueJeans =new Product(8, "blue jeans", "j", 350);
    let bubbleGum =new Product(9, "bubble gum", "j", 270);
    let orange =new Product(7, "orange", "j", 1);
    let onion =new Product(6, "onion", "j", 0);
    products.push(apple,coconut,gleamer,lays,ruler,blueJeans,bubbleGum,orange,onion);
    products =sortProducts(products, "price");
    products.forEach((product)=>{
        console.log(product.price);
    });
    products =sortProducts(products, "name");
    products.forEach((product)=>{
        console.log(product.name);
    });
    products =sortProducts(products, "ID");
    products.forEach((product)=>{
        console.log(product.ID);
    });
}
//testSortProducts();