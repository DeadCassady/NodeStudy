function Reviews(ID, author, date, comment, rating){
    this.ID = validate( ID, 'number'),
    this.author = validate( author, 'string'),
    this.date = new Date(date),
    this.comment = validate( comment, 'string'),
    this.rating = validate( rating, 'number')
}
function validate( value, type){
    if(typeof value == type){
      return value;
    }
}

export default Reviews;