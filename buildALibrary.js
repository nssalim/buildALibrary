// Build a Library
// To modernise a library which is still using index cards to organize their content! 

// Library carries three different types of media: books, CDs, and movies. 

// To create a parent class named Media with three subclasses: Book, Movie, and CD. Each subclass has properties and methods. The methods are .getAverageRating(), .toggleCheckOutStatus(), and .addRating().  All properties have a getter.

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
}

