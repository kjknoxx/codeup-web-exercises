// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.

// let books = {
//     title: "A Wrinkle in Time",
//     author: "Madeleine L'Engle",
//     genre: "Fiction"
// }

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.

let myCard = `<div class="card">
    <div>Book Title: ${books.title}.</div>
    <div>Book Author: ${books.author}.</div>
    <div>Book Genre: ${books.genre}.</div>
</div>`

//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.

let booksOutput = document.querySelector('#container');
booksOutput.innerHTML = myCard;

//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).

let books = [
    {
        title: "A Wrinkle in Time",
        author: "Madeleine L'Engle",
        genre: "Fiction"
    },
    {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        genre: "Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Novel"
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        genre: "Non-fiction, Novel"
    }
]

//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = "";

for (let i = 0; i < books.length; i++) {

    allCards +=
        `<div class="card">
        <div>Book Title: ${books[i].title}</div>
        <div>Book Author: ${books[i].author}</div>
        <div>Book Genre: ${books[i].genre}</div>
</div>`
}

booksOutput.innerHTML = allCards;

// let allCards = ""; //bucket to store the HTML you build in the loop