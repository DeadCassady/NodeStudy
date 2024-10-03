function Reviews(ID, author, date, comment, rating){
    this.ID = validate( ID, 'number'),
    this.author = validate( author, 'string'),
    this.date = new Date(date),
    this.comment = validate( comment, 'string'),
    this.rating = validate( rating, 'number')
}