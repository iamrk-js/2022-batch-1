let cl = console.log;
const img = document.getElementById('img')! as HTMLImageElement;
interface Ibook {
    bookTitle: string;
    author?: string;
    noOfCopies?: number;
}
class BookShelf implements Ibook {
    books: Ibook[] = [];
    constructor(public bookTitle: string) {

    }
    addToShelf(newBook: Ibook) {
        // .....
    }
    removeFromShelf(oldBook: Ibook) {
        // .....
    }
}
interface Imagzine {
    magzineTitle: string;
    vol?: Date;
    noOfCopies?: number;
}

class MagzineShelf implements Imagzine {
    magzines: Imagzine[] = [];
    constructor(public magzineTitle: string) {

    }
    addToShelf(newMagzine: Imagzine) {
        // .....
    }
    removeFromShelf(oldMagzine: Imagzine) {
        // .....
    }
}


class Shelf<T> {
    item: T[] = [];
    constructor() {

    }
    addItemToShelf(Item: T) {
        // .....
    }
    removeItemFromShelf(Item: T) {
        // .....
    }
}

let bookshelf = new Shelf<Ibook>();

bookshelf.addItemToShelf(new BookShelf('Rich Dad Poor Dad'));
// bookshelf.addItemToShelf(new MagzineShelf('Rich Dad Poor Dad'));

let magzinesShelf = new Shelf<Imagzine>();

magzinesShelf.addItemToShelf(new MagzineShelf("Science"));
// magzinesShelf.addItemToShelf(new BookShelf("Science"));


let skills: Array<string> = ["Angular", "Typescript"];

let ages : Array<number> = [20];