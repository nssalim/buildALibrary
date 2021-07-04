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
    let ratingsSum = this.ratings.reduce ((accumulator, rating) => accumulator + rating);
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


// Create Book instances
const nineteenEightyFour = new Book('George Orwell', 'Nineteen Eighty-Four', 400);
// console.log(nineteenEightyFour);

const braveNewWorld = new Book('Aldous Huxley', 'Brave New World', 288);
// console.log(braveNewWorld);

const handmaidsTale = new Book('Margaret Atwood', 'The Handmaids Tale', 311);
// console.log(braveNewWorld);

console.log(nineteenEightyFour.title + '\nORIGINAL CHECKED-OUT STATUS: ' + nineteenEightyFour.isCheckedOut);
// Call .toggleCheckOutStatus() on the nineteenEightyFour instance
nineteenEightyFour.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' + nineteenEightyFour.isCheckedOut);

// Call .addRating() four times on nineteenEightyFour with inputs of 9, 10, 9 and 8
// Call .getAverageRating() and log result
nineteenEightyFour.addRating(9);
nineteenEightyFour.addRating(10);
nineteenEightyFour.addRating(9);
nineteenEightyFour.addRating(8);
console.log('Average Rating: ' + Math.floor(nineteenEightyFour.getAverageRating()) + `\n`);

console.log(braveNewWorld.title + '\nORIGINAL CHECKED-OUT STATUS: '  + braveNewWorld.isCheckedOut);
braveNewWorld.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  braveNewWorld.isCheckedOut);

braveNewWorld.addRating(5);
braveNewWorld.addRating(6);
braveNewWorld.addRating(10);
braveNewWorld.addRating(10);
console.log('Average Rating: ' + Math.floor(braveNewWorld.getAverageRating()) + `\n`);

console.log(handmaidsTale.title + '\nORIGINAL CHECKED-OUT STATUS: ' + handmaidsTale.isCheckedOut);
handmaidsTale.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  handmaidsTale.isCheckedOut);

handmaidsTale.addRating(9);
handmaidsTale.addRating(5);
handmaidsTale.addRating(6);
handmaidsTale.addRating(3);
console.log('Average Rating: ' + Math.floor(handmaidsTale.getAverageRating()) + `\n`);


// Create Movie instances
const ghostbusters = new Movie('Ivan Reitman', 'Ghostbusters', 105);
// console.log(ghostbusters);

const theTerminator = new Movie('James Cameron', 'The Terminator', 108);
// console.log(theTerminator);

const indianaJones = new Movie('Steven Spielberg', 'Indiana Jones and the Temple of Doom', 118);
// console.log(indianaJones);


console.log(ghostbusters.title + '\nORIGINAL CHECKED-OUT STATUS: '  + ghostbusters.isCheckedOut);
ghostbusters.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  ghostbusters.isCheckedOut);

ghostbusters.addRating(2);
ghostbusters.addRating(6);
ghostbusters.addRating(7);
ghostbusters.addRating(7);
console.log('Average Rating: ' + Math.floor(ghostbusters.getAverageRating()) + `\n`);


console.log(theTerminator.title + '\nORIGINAL CHECKED-OUT STATUS: '  + theTerminator.isCheckedOut);
theTerminator.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  theTerminator.isCheckedOut);

theTerminator.addRating(9);
theTerminator.addRating(8);
theTerminator.addRating(6);
theTerminator.addRating(7);
console.log('Average Rating: ' + Math.floor(theTerminator.getAverageRating()) + `\n`);


console.log(indianaJones.title + '\nORIGINAL CHECKED-OUT STATUS: '  + indianaJones.isCheckedOut);
// Call .toggleCheckOutStatus() on the nineteenEightyFour instance
indianaJones.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  + indianaJones.isCheckedOut);

// Call .addRating() four times on ghostbusters with inputs of 9, 8, 8 and 7
// Call .getAverageRating() and log result
indianaJones.addRating(10);
indianaJones.addRating(9);
indianaJones.addRating(9);
indianaJones.addRating(9);
console.log('Average Rating: ' + Math.floor(indianaJones.getAverageRating()) + `\n`);


// Create Cd instances
const frankieGoesToHollywood = new Cd('Frankie goes to Hollywood', 'Relax');
// console.log(frankieGoesToHollywood);

const tinaTurner = new Cd('Tina Turner', "Whats love got to do with it");
// console.log(tinaTurner);

const wham = new Cd('Wham', 'Wake Me Up Before You Go-Go');
// console.log(wham);


console.log(frankieGoesToHollywood.title + '\nORIGINAL CHECKED-OUT STATUS: '  + frankieGoesToHollywood.isCheckedOut);
// Call .toggleCheckOutStatus() on the frankieGoesToHollywood instance
frankieGoesToHollywood.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' + frankieGoesToHollywood.isCheckedOut);

// Call .addRating() three times on frankieGoesToHollywood with inputs of 9, 7 and 8
// Call .getAverageRating() and log result
frankieGoesToHollywood.addRating(2);
frankieGoesToHollywood.addRating(5);
frankieGoesToHollywood.addRating(9);
console.log('Average Rating: ' + Math.floor(frankieGoesToHollywood.getAverageRating()) + `\n`);


console.log(tinaTurner.title + '\nORIGINAL CHECKED-OUT STATUS: '  + tinaTurner.isCheckedOut);
tinaTurner.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  tinaTurner.isCheckedOut);

tinaTurner.addRating(10);
tinaTurner.addRating(8);
tinaTurner.addRating(9);
tinaTurner.addRating(9);
console.log('Average Rating: ' + Math.floor(tinaTurner.getAverageRating()) + `\n`);


console.log(wham.title + '\nORIGINAL CHECKED-OUT STATUS: '  + wham.isCheckedOut);
wham.toggleCheckOutStatus();
console.log('STATUS AFTER TOGGLE: ' +  wham.isCheckedOut);

wham.addRating(9);
wham.addRating(9);
wham.addRating(9);
wham.addRating(9);
console.log('Average Rating: ' + Math.floor(wham.getAverageRating()) + `\n`);


const shuffle = (min, max) => {
  return Math.floor(Math.random() * (max  - min) + min);
  };

const books = [
  nineteenEightyFour, 
  braveNewWorld, 
  handmaidsTale];

const randomBookIndex = shuffle(0, books.length);

console.log('\nRandom books index: ', randomBookIndex)

const randomBook = books[randomBookIndex];
new Book(randomBook)
console.log(randomBook);


const movies = [
  ghostbusters, 
  theTerminator, 
  indianaJones];

const randomMovieIndex = shuffle(0, movies.length);

console.log('\nRandom movies index: ', randomMovieIndex)

const randomMovie = movies[randomMovieIndex];
new Movie(randomMovie)
console.log(randomMovie);


const songs = [
  frankieGoesToHollywood,
  tinaTurner, 
  wham];

const randomSongIndex = shuffle(0, songs.length);

console.log('\nRandom song index: ', randomSongIndex)

const randomSong = songs[randomSongIndex];
new Cd(randomSong)
console.log(randomSong);


// Output:
// BUILD A LIBRARY

// Nineteen Eighty-Four
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 9

// Brave New World
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 7

// The Handmaids Tale
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 5

// Ghostbusters
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 5

// The Terminator
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 7

// Indiana Jones and the Temple of Doom
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: 1
// Average Rating: 9

// Relax
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 5

// Whats love got to do with it
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 9

// Wake Me Up Before You Go-Go
// ORIGINAL CHECKED-OUT STATUS: false
// STATUS AFTER TOGGLE: true
// Average Rating: 9


// Random books index:  2
// Book {
//   _title: 'The Handmaids Tale',
//   _isCheckedOut: true,
//   _ratings: [ 9, 5, 6, 3 ],
//   _author: 'Margaret Atwood',
//   _pages: 311 }

// Random movies index:  2
// Movie {
//   _title: 'Indiana Jones and the Temple of Doom',
//   _isCheckedOut: true,
//   _ratings: [ 10, 9, 9, 9 ],
//   _director: 'Steven Spielberg',
//   _runTime: 118 }

// Random song index:  1
// Cd {
//   _title: 'Whats love got to do with it',
//   _isCheckedOut: true,
//   _ratings: [ 10, 8, 9, 9 ],
//   _artist: 'Tina Turner' }


