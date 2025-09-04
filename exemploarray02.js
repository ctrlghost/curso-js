// Generate lists with the book data.
// Lists: titles, publicationYears, publishers, pageCounts, prices, and categories.
// Data set: Fill the lists with 7 books from diverse categories (Fiction, Romance, Finance, Technology)
// Create the method that allows registering a new book
// Create the following methods:
// - List all books in the Fiction category
// - List all books published from the year 2010 onwards
// - List all books from a specific publisher (input via prompt)
// - List all books with more than 300 pages
// - List the book with the highest number of pages
// - List the book with the lowest number of pages
// - List the average number of pages of the registered books
// - List all books whose title has more than 30 characters
// - List the most expensive book
// - List the cheapest book
// - Create a list with the titles and prices of books in the Technology category
// - Create a list with the titles and publication years of books in the Romance category
// - List all books whose title contains the word "JavaScript"

let books = [
    {
        title: "The Echoes of Tomorrow",
        pubYear: 2012,
        publisher: "Marla Grey",
        pageCount: 368,
        price: 24.99,
        genre: "Fiction"
    },
    {
        title: "Crimson Hearts",
        pubYear: 2018,
        publisher: "Julianne Rowe",
        pageCount: 290,
        price: 18.50,
        genre: "Romance"
    },
    {
        title: "Smart Money Moves",
        pubYear: 2015,
        publisher: "Derek Hunt",
        pageCount: 312,
        price: 29.95,
        genre: "Finance"
    },
    {
        title: "Codebreak: The Tech Within",
        pubYear: 2020,
        publisher:"Nathan Zhu",
        pageCount: 421,
        price: 34.99,
        genre: "Technology"
    },
    {
        title: "A Trail of Shadows",
        pubYear: 2009,
        publisher: "Eliza Quinn",
        pageCount: 276,
        price: 21.00,
        genre: "Fiction"
    },
    {
        title: "The Javascript Journey",
       pubYear: 2021,
       publisher: "Lora Devlin",
       pageCount: 388,
       price: 39.90,
       genre: "Technology" 
    },
    {
        title: "Bonds of Gold",
        pubYear: 2010,
        publisher: "Marcus Bell",
        pageCount: 334,
        price: 25.75,
        genre: "Romance"
    }
];

function listBooks(){
    let genreFiction = [];
    let titleJava = [];
    let year2010 = [];
    let page300 = [];
    let pageMax = [];
    let pageMin = [];
    let pageAverage = 0;
    let title30 = [];
    let priceMax = 0;
    let priceMin = Infinity;
    // romance, technology, "javascript"

    if(books.genre === "Fiction"){
        genreFiction++;
    } else if(books.title.includes("Java")){
        titleJava++;
    } else if(books.pubYear <= 2010){
        year2010++;
    }




for (let i = 0; i < books.length; i++) {
    console.log("Title:", books[i].title);
    console.log("Year:", books[i].pubYear);
    console.log("Author:", books[i].publisher);
    console.log("Pages:", books[i].pageCount);
    console.log("Price:", books[i].price);
    console.log("Genre:", books[i].genre);
    console.log("-------------");
  }
  
  if()
}