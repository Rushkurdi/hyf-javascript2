let books = [
    "Bag _of_bones",
    "the_hobbit",
    "les_miserables",
    "harry_potter",
    "inferno",
    "Sherlockholms",
    "lord_of_the_rings",
    "the_alchemist",
    "manuscript_found_in_accra",
    "davinci_code"
];
// console.log(books);

function printList() {
    let ul2 = document.createElement("ul");
    for (i = 0; i < books.length; i++) {
        let li1 = document.createElement("li");
        li1.textContent += (books[i].toUpperCase().replace(/_/g, ' ').toUpperCase());
        ul2.appendChild(li1);

    }

    document.getElementById("titles").appendChild(ul2);

}

printList();

const booksInfo = {
    "Bag _of_bones": {
        title: "Bag _of_bones",
        language: "English",
        author: "Stephen king"
    },
    "the_hobbit": {
        title: "the_hobbit",
        language: "English",
        author: "J. R. R. Tolkien"
    },
    "les_miserables": {
        title: "les_misrables",
        language: "French",
        author: "Victor Hugo"
    },
    "harry_potter": {
        title: "harry_potter",
        language: "English",
        author: "J. K. Rowling"
    },
    "inferno": {
        title: "inferno",
        language: "English",
        author: "Dan brown"
    },
    "Sherlockholms": {
        title: "Sherlockholms",
        language: "English",
        author: "Conan Doyle"
    },
    "lord_of_the_rings": {
        title: "lord_of_the_rings",
        language: "English",
        author: "J. R. R. Tolkien"
    },
    "the_alchemist": {
        title: "the_alchemist",
        language: "English",
        author: "Paulo coelho"
    },
    "manuscript_found_in_accra": {
        title: "manuscript_found_in_accra",
        language: "English",
        author: "paulo coelho"
    },
    "davinci_code": {
        title: "davinci_code",
        language: "English",
        author: "Dan brown"
    }

}
let ul1 = document.createElement("ul");
ul1.className = "ul-tab"; //Add CSS class to DOM object
ul1.className = "ul-tab"; //Add CSS class to DOM object

for (let key in booksInfo) {

    let li = document.createElement("li");
    li.id = key;
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let em = document.createElement('em');

    em.textContent += (booksInfo[key].title);
    li.appendChild(h1).appendChild(em);
    h2.textContent += (booksInfo[key].author);
    li.appendChild(h2);
    h3.textContent += (booksInfo[key].language);
    li.appendChild(h3);
    li.className = "li-tab"; //Add CSS class to DOM object

    ul1.appendChild(li);



}
document.getElementById("booksInfo").appendChild(ul1);