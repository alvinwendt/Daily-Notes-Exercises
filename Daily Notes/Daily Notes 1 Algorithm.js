/*
    Define a variable named `notes` and assign a value of an empty array
*/

// let notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

let notes = [
  {
    id: 1,
    text: "Something here",
    author: "Mr. Bean",
    date: "8/2/2022",
    topics: ["math", "science", "history"],
  },
];
notes.push({
  id: 2,
  text: "Something there",
  author: "Mr. Boolean",
  date: "8/3/2022",
  topics: ["writing", "communication", "computers"],
});

console.log(notes);
