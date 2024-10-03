function Product() {
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
        return this.price;
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
    this.sizes = [],
    this.getActiveSize = function(){
        return this.activeSize;
    }
    this.setActiveSize = function(activeSize){
        if(this.sizes.includes(activeSize)){
            this.activeSize = activeSize;
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
    this.reviews = [],
    this.images = [],
    this.getReviewByID = function(ID){
        if(this.reviews.ID === ID){
            return this.reviews(ID);
        }
    } 
    this.getImage = function(){

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
    this.deleteReview = function(){
        
    }
    this.getAverageRatin = function(){

    }
};

function validate( value, type){
    if(typeof value == type){
      return value;
    }
}

let jeans = new Product();
jeans.addSize('XL');
jeans.addSize('L');
jeans.deleteSize('L');
console.log(jeans.sizes);






