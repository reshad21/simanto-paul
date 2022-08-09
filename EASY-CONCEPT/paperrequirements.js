/*
    3. count paper
    //book 1---->100 pages
    //book 2---->200 pages
    //book 3---->300 pages

*/

function paperRequirements(b1, b2, b3) {
    let bookOne = 100;
    let bookTwo = 200;
    let bookThree = 300;

    let bookOnepage = b1 * bookOne;
    let bookTwopage = b2 * bookTwo;
    let bookThreepage = b3 * bookThree;

    let totalPage = bookOnepage + bookTwopage + bookThreepage;
    return totalPage;
}

let papers = paperRequirements(1, 1, 1);
console.log("Total pages need:",papers);