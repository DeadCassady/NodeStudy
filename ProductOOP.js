class Product{
    static #TAKEN_ID = [];
    

    constructor(
    ID=0,
    name='product',
    description='average',
    price=10,
    brand="Levi's",
    quantity=0, 
    date=new Date(),
    reviews = [],
    images = []){
    if(this.constructor === Product){
       throw new Error("Can't instantiate an abstract class");
    }
    if(Product.#TAKEN_ID.includes(ID)){
        ID++;
    }else{
     this.ID = ID;
    }
    Product.#TAKEN_ID.push(ID);
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;
    };
    /**
     * this is a section for the getters and setters
     *  
     */
    getID = function(){
        return this.ID;
    }
    setID = function(ID){
        this.ID = ID;
    }
    getName = function(){
        return this.name;
    }
    setName = function(name){
        this.name = name;
    }
    getDescription = function(){
        return this.description;
    }
    setDescription = function(description){      
        this.description = description;
    }
    getPrice = function(){
        return '$' + this.price;
    }
    setPrice = function(price){
        this.price = price;
    }
    getBrand = function(){
        return this.brand;
    }
    setBrand = function(brand){
        this.brand = brand;
    }
    getActiveSize = function(){
        return this.activeSize;
    }
    setActiveSize = function(activeSize){
        if(this.sizes.includes(activeSize)){
            this.activeSize = activeSize;
            console.log('The active size was set to ' + activeSize);
        }else{
            console.log('The ' + activeSize + ' is not a valid one');
        }
    }
    getQuantity = function(){
        return this.quantity;
    } 
    setQuantity = function(quantity){
        this.quantity = quantity;
    }   
    getDate = function(){
        return this.date;
    }
    setDate = function(date){
      this.date = new Date(date);
    }
    getSet(action, property, value){
        switch(action){
            case 'get':
                switch(property){
                    case 'ID':
                        return this.getID();
                    case 'name':
                        return this.getName();
                    case 'description':
                        return this.getDescription();
                    case 'price':
                        return this.getPrice();
                    case 'brand':
                        return this.getBrand();
                    case 'quantity':
                        return this.getQuantity();
                    case 'date':
                        return this.getDate();
                    case 'reviews':
                        return this.reviews;
                    case 'images':
                        return this.images;
                }
            case 'set':
                switch(property){
                    case 'ID':
                        return this.setID(value);
                    case 'name':
                        return this.setName(value);
                    case 'description':
                        return this.setDescription(value);
                    case 'price':
                        return this.setPrice(value);
                    case 'brand':
                        return this.setBrand(value);
                    case 'quantity':
                        return this.setQuantity(value);
                    case 'date':
                        return this.setDate(value);
                    case 'reviews':
                        return this.addReview(value);
                    case 'images':
                        return this.images.push(value);
                }
        }
    }
    /**
     * This is a section for the required functions
     * 
     */
    getReviewByID = function(ID){
        let comment;
        this.reviews.forEach((review) =>{
            if(review.ID === ID){
                comment = review.comment;
            }
        });
        return comment;
    } 
    getImage = function(image){
         this.images.push(image);
    }

    addReview = function(Reviews){
       this.reviews.push(Reviews);
    }
    deleteReview = function(ID){
        this.reviews.forEach((review) =>{
            if(review.ID === ID){
                this.reviews.splice(this.reviews.indexOf(review), 1);
            }
        });
    }
    getAverageRating = function(ID){
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
    getFullInformation(){
        let val = 'ID: ' + this.ID + '\n' +
        'Name:'+ this.name + '\n' +
        'Description: ' + this.description + '\n' +
        'Price: ' + this.price + '\n' +
        'Brand: ' + this.brand + '\n' + 
        'Quantity: ' + this.quantity + '\n' + 
        'Date: ' + this.date + '\n' + 
        'Reviews: ' + this.reviews + '\n' + 
        'Images: ' + this.images;
        return val;
    }
    getPriceForQuantity(int){
        let val = this.price * int;
        
        return '$' + val;
    }

    searchProducts(products, search){
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
        
        sortProducts(products, sortRule){
            if(sortRule === "price"){
                products.sort((a, b) => a.price - b.price);
            }else if(sortRule === "name"){
                products.sort((a, b) => a.name.localeCompare(b.name));
            }else if(sortRule === "ID"){
                products.sort((a, b) => a.ID - b.ID);
            }
        
        return products; 
        }
    
}
class Clothes extends Product{
    constructor( 
        
        sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        activeSize = 'L',
        material = 'cotton',
        color = 'Black'
    ){
        super();
        this.sizes = sizes;
        if(this.sizes.includes(activeSize)){
            this.activeSize = activeSize;
        }
        this.material = material;
        this.color = color;
    }
    getMaterial(){
        return this.material;
    }
    setMaterial(material){
        this.material = material;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    addSize = function(size){
        const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        if(possibleSizes.includes(size)){
           this.sizes.push(size);
        }
    }
    deleteSize = function(size){
        if(this.sizes.includes(size)){
            this.sizes.splice(this.sizes.indexOf(size), 1);
        }
    }

}
class Electronics extends Product{
    constructor(
        warranty = 12,
        power = 240
    ){
        super();
        this.warranty = warranty;
        this.power = power
    }
    getWarranty(){
        return this.warranty;
    }
    setWarranty(warranty){
        this.warranty = warranty;
    }
    getPower(){
        return this.power;
    }
    setPower(power){
        this.power = power;
    }
}
function Test(){
   let p = [];
   let jeans = new Clothes();
   console.log(jeans.getActiveSize());
   console.log(jeans.getPriceForQuantity(5));
   jeans.getSet('set', 'ID', 5)
   console.log(jeans.getSet('get', 'ID'));
   let sega = new Electronics();
   sega.setName("Sega saturn");
   console.log(sega.getName());
   console.log(sega.getWarranty());
   p.push(jeans, sega)
   console.log(jeans.sortProducts(p, "name"));
}
Test();