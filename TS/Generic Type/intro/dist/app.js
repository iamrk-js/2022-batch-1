"use strict";
let cl = console.log;
const img = document.getElementById('img');
class BookShelf {
    constructor(bookTitle) {
        this.bookTitle = bookTitle;
        this.books = [];
    }
    addToShelf(newBook) {
        // .....
    }
    removeFromShelf(oldBook) {
        // .....
    }
}
class MagzineShelf {
    constructor(magzineTitle) {
        this.magzineTitle = magzineTitle;
        this.magzines = [];
    }
    addToShelf(newMagzine) {
        // .....
    }
    removeFromShelf(oldMagzine) {
        // .....
    }
}
class Shelf {
    constructor() {
        this.item = [];
    }
    addItemToShelf(Item) {
        // .....
    }
    removeItemFromShelf(Item) {
        // .....
    }
}
let bookshelf = new Shelf();
bookshelf.addItemToShelf(new BookShelf('Rich Dad Poor Dad'));
// bookshelf.addItemToShelf(new MagzineShelf('Rich Dad Poor Dad'));
let magzinesShelf = new Shelf();
magzinesShelf.addItemToShelf(new MagzineShelf("Science"));
// magzinesShelf.addItemToShelf(new BookShelf("Science"));
let skills = ["Angular", "Typescript"];
let ages = [20];
