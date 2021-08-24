// Problem 3: page requirements for book ==> calculation 

function pageRequirements(book1, book2, book3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const pagesForBook1 = book1 * book1Pages;
    const pagesForBook2 = book2 * book2Pages;
    const pagesForBook3 = book3 * book3Pages;
    const totalPagesNeed = pagesForBook1 + pagesForBook2 + pagesForBook3;
    return totalPagesNeed;
}

let myBooks = pageRequirements(0, 0, 3);
console.log(myBooks);
