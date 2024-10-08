function Reviews(
   ID,
   author, 
   date, 
   comment, 
   serviceRating,
   priceRating,
   valueRating,
   qualityRating){
    this.ID = checkType( ID, 'number'),
    this.author = checkType( author, 'string'),
    this.date = new Date(date),
    this.comment = checkType( comment, 'string'),
    this.rating = {
      service:serviceRating,
      price:priceRating,
      value:valueRating,
      quality:qualityRating,
     };
}
function checkType( value, type){
    if(typeof value == type){
      return value;
    }
}

export default Reviews;