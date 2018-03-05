let books = ["kite_runner", "davinci_code",
    "manuscript_found_in_accra", "the_alchemist", "lord_of_the_rings",
    "Sherlockholms", "inferno", "harry_potter", "les_misrables", "the_hobbit",
]
console.log(books)


function generating() {

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (
        let i = 0; i < books.length; i = i + 1
    ) {
        let book = books[i];
        console.log(book);
    }
    for (let book of books) {
        let li = document.createElement("li");
        console.log(book)
        li.textContent = book
        ul.appendChild(li)
    }
}
generating()

let booksInfo = {
        "kite_ runner": {
            title: 'kite_runner',
            language: 'en',
            author: "Khaled_Hossein"
        },



        "davinci_code": {
            title: 'davinci_code',
            language: 'en',
            author: "Dan_brown"
        },

        //console.log(booksInfo);


        // for (let i = 0; i < li.length; i++) {
        //     books.push(li[i].innerText)
        // console.log(Object.keys(booksInfo)

        books.foreEach.id => {}