// Build a Library
// To modernise a library which is still using index cards to organize their content! 

// Library carries three different types of media: books, CDs, and movies. 

// To create a parent class named Media with three subclasses: Book, Movie, and CD. Each subclass has properties and methods. The methods are .toggleCheckOutStatus(), .getAverageRating(),and .addRating().  All properties have a getter but only isCheckedOut property. has a setter.

// heading
console.log('BUILD A LIBRARY');


// parent class: Media
class Media {
// subclasses: Book, CD and Movie
// each subclass has properties for title, isCheckedOut and ratings.  However, the title property is the only one that does not have a default value.
// set the values for Media properties that the subclasses share.
// prepend all of the property names with an underscore (_)
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

// getters for the title, isCheckedOut, and ratings properties
  get title() {
    return this._title;
  }
    get isCheckedOut() {
    return this._isCheckedOut;
  }
    get ratings() {
    return this._ratings;
  }

// setter for isCheckedOut property
    set isCheckedOut(value) {
    return this._isCheckedOut = value;
  }

// toggleCheckOutStatus changes the value saved to the _isCheckedOut property
// If the value is false, to change it to true. If the value is true, to change it to false. 
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

// getAverageRating returns the average value of the ratings array
// Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result
  getAverageRating() {
    let ratingsSum = 
    this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }

// addRating accepts one argument and uses .push() to add it to the end of the ratings array
  addRating(value) {
  this.ratings.push(value);
  }
}


// build a Book class that extends Media
class Book extends Media{
  constructor(author, title, pages) {
// constructor accepts arguments for author, title, and pages. These arguments are used to set properties that do not have default values.
// call super on the first line of the Books‘s constructor method. Pass it any argument(s) that the parent constructor uses.
    super(title);
// set the author and pages properties
    this._author = author;
    this._pages = pages;
  }

// as book class inherits Media‘s properties and getters, only need getters for the author and pages properties
  get author() {
    return this._author;
  }
    get pages() {
    return this._pages;
  }
}


// build a Movie class that extends Media
class Movie extends Media{
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

// getters for the director and runTime properties
  get director() {
    return this._director;
  }
    get runTime() {
    return this._runTime;
  }
}

