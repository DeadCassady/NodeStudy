function Reviews(
   ID,
   author, 
   date, 
   comment, 
   serviceRating,
   priceRating,
   valueRating,
   qualityRating){
    this.ID = validate( ID, 'number'),
    this.author = validate( author, 'string'),
    this.date = new Date(date),
    this.comment = validate( comment, 'string'),
    this.rating = {
      service:serviceRating,
      price:priceRating,
      value:valueRating,
      quality:qualityRating,
     };
}
function validate( value, type){
    if(typeof value == type){
      return value;
    }
}

export default Reviews;