let id = Symbol("id");

function Book(id, Title, Year, Author) {
  [id] = this.id;
  Title = this.Title;
  Year = this.Year;
  Author = this.Author;
}

const book1 = new Book(101, ریاضی, 1402, ali);
const book2 = new Book(102, فیزیک, 1404, reza);
const book3 = new Book(103, شیمی, 1401, sara);

document.getElementById("p").innerHTML = book1;
