import Product from './Product.js'
import Reviews from './Reviews.js'

//testAddDeleteSize();
testAddDeleteReview();
//testGetPrices();

function testAddDeleteSize(){
    let jeans = new Product()
    jeans.addSize('XL');
    jeans.addSize('L');
    jeans.deleteSize('L');
    console.log(jeans.sizes);
    jeans.setActiveSize('l');
}

function testAddDeleteReview(){
    let jeans = new Product()
    jeans.addReview(new Reviews(1, 'Brook',"2024,06,15", "very good",5,3,4,2));
    jeans.addReview(new Reviews(2, 'Vook',"2024,06,15", "very bad",2,2,2,2));
    jeans.addReview(new Reviews(3, 'Cook',"2024,06,15", "just bad",3,3,3,3));
    jeans.addReview(new Reviews(4, 'Crook',"2024,06,15", "fine",4,4,4,4));
    console.log(jeans.getAverageRating(1));
    //console.log(jeans.getReviewByID(2));
    //console.log(jeans.getReviewByID(4));
    //jeans.deleteReview(2);
    //console.log(jeans.getReviewByID(2));
}
function testGetPrices(){
    let jeans = new Product()
    jeans.setPrice(50);
    console.log(jeans.getPrice());
}




