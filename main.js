const Nid = Number(prompt("شماره کتاب جدید"));
const NTitle = prompt("نام کتاب جدید را وارد کن ");
const NYear = Number(prompt("سال چاپ کتاب را وارد کن "));
const NAuthor = prompt("نام نویسنده را وارد کن ");

function Book(id, Title, Year, Author) {
  this.id = id;
  this.Title = Title;
  this.Year = Year;
  this.Author = Author;
}

const book1 = new Book(1, " ریاضی", 1402, "علی");
const book2 = new Book(2, " فیزیک", 1404, "رضا");
const book3 = new Book(3, " شیمی", 1401, "سارا");
const Nbook = new Book(Nid, NTitle, NYear, NAuthor);

let Books = [book1, book2, book3];
Books.push(Nbook);

console.log(Books);
console.log(Books.length);
