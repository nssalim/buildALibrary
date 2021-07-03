// Build a Library
// To modernise a library which is still using index cards to organize their content! 

// Library carries three different types of media: books, CDs, and movies. 

// To create a parent class named Media with three subclasses: Book, Movie, and CD. Each subclass has properties and methods. The methods are .toggleCheckOutStatus(), .getAverageRating(),and .addRating().  All properties have a getter but only isCheckedOut property. has a setter.

// heading
console.log('BUILD A LIBRARY\n');


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


//  build a Cd class that extends Media
class Cd extends Media{
  constructor(artist, title) {
    super(title);
    this._artist = artist;
  }

// getters for artist property
  get artist() {
    return this._artist;
  }
}


// Create a Book instance
const nineteenEightyFour = new Book('George Orwell', 'Nineteen Eighty-Four', 400);
console.log(nineteenEightyFour)

console.log('\nORIGINAL STATUS\nCheckedOut: ' + nineteenEightyFour.isCheckedOut);
// Call .toggleCheckOutStatus() on the nineteenEightyFour instance
nineteenEightyFour.toggleCheckOutStatus();
console.log('\nSTATUS AFTER TOGGLE\nCheckedOut: ' + nineteenEightyFour.isCheckedOut);

// Call .addRating() four times on nineteenEightyFour with inputs of 9, 10, 9 and 8
// Call .getAverageRating() and log result
nineteenEightyFour.addRating(9);
nineteenEightyFour.addRating(10);
nineteenEightyFour.addRating(9);
nineteenEightyFour.addRating(8);
console.log('\nAverage Rating: ' + nineteenEightyFour.getAverageRating() + `\n`);


// Create a Movie instance
const ghostbusters = new Movie('Ivan Reitman', 'Ghostbusters', 105);
console.log(ghostbusters);

console.log('\nORIGINAL STATUS\nCheckedOut: ' + ghostbusters.isCheckedOut);
// Call .toggleCheckOutStatus() on the nineteenEightyFour instance
ghostbusters.toggleCheckOutStatus();
console.log('\nSTATUS AFTER TOGGLE\nCheckedOut: ' + ghostbusters.isCheckedOut);

// Call .addRating() four times on ghostbusters with inputs of 9, 8, 8 and 7
// Call .getAverageRating() and log result
ghostbusters.addRating(9);
ghostbusters.addRating(8);
ghostbusters.addRating(6);
ghostbusters.addRating(7);
console.log('\nAverage Rating: ' + ghostbusters.getAverageRating() + `\n`);


// Create Cd instances
const frankieGoesToHollywood = new Cd('Frankie goes to Hollywood', 'Relax');
console.log(frankieGoesToHollywood);

const tinaTurner = new Cd('Tina Turner', "What'\s love got to do with it");
console.log(tinaTurner);

const wham = new Cd('Wham', 'Wake Me Up Before You Go-Go');
console.log(wham);

console.log('\nORIGINAL STATUS\nCheckedOut: ' + frankieGoesToHollywood.isCheckedOut);
// Call .toggleCheckOutStatus() on the frankieGoesToHollywood instance
frankieGoesToHollywood.toggleCheckOutStatus();
console.log('\nSTATUS AFTER TOGGLE\nCheckedOut: ' + frankieGoesToHollywood.isCheckedOut);

// Call .addRating() three times on frankieGoesToHollywood with inputs of 9, 7 and 8
// Call .getAverageRating() and log result
frankieGoesToHollywood.addRating(9);
frankieGoesToHollywood.addRating(7);
frankieGoesToHollywood.addRating(8);
console.log('\nAverage Rating: ' + frankieGoesToHollywood.getAverageRating());

// Output:
// BUILD A LIBRARY

// Book {
//   _title: 'Nineteen Eighty-Four',
//   _isCheckedOut: false,
//   _ratings: [],
//   _author: 'George Orwell',
//   _pages: 400 }

// ORIGINAL STATUS
// CheckedOut: false

// STATUS AFTER TOGGLE
// CheckedOut: true

// Average Rating: 9

// Movie {
//   _title: 'Ghostbusters',
//   _isCheckedOut: false,
//   _ratings: [],
//   _director: 'Ivan Reitman',
//   _runTime: 105 }

// ORIGINAL STATUS
// CheckedOut: false

// STATUS AFTER TOGGLE
// CheckedOut: true

// Average Rating: 7.5

// Cd {
//   _title: 'Relax',
//   _isCheckedOut: false,
//   _ratings: [],
//   _artist: 'Frankie goes to Hollywood' }
// Cd {
//   _title: 'What\'s love got to do with it',
//   _isCheckedOut: false,
//   _ratings: [],
//   _artist: 'Tina Turner' }
// Cd {
//   _title: 'Wake Me Up Before You Go-Go',
//   _isCheckedOut: false,
//   _ratings: [],
//   _artist: 'Wham' }

// ORIGINAL STATUS
// CheckedOut: false

// STATUS AFTER TOGGLE
// CheckedOut: true

// Average Rating: 8
