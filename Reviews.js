function Reviews(
   ID=0,
   author='John Doe', 
   date = new Date(), 
   comment = 'Average', 
   serviceRating = 0,
   priceRating = 0,
   valueRating = 0,
   qualityRating = 0){
    this.ID = ID,
    this.author = author,
    this.date = new Date(date),
    this.comment = comment,
    this.rating = {
      service:serviceRating,
      price:priceRating,
      value:valueRating,
      quality:qualityRating,
     };
}

export default Reviews;