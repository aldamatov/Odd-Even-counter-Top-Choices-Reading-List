//Even/Odd Counter
//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")
console.log("=== Even or Odd Counter ===")

for (let i = 0; i <= 20; i++){
    if (i % 2 === 0){
      console.log(i + " is even");
    }
    else {
      console.log(i + " is odd")
    }
  }



//Top Choice
//Create an array to hold your top choices (colors, presidents, whatever). For each choice, log to the screen a string like: "My #1 choice is blue."

//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is. The method slice might be helpful here.
console.log(" ")
console.log("== Top Choice ==")

const topChoice = ["Blue", "Lincoln", "Tennis", "Explore the World", "Coding"]


for ( let i = 1; i <= topChoice.length; i ++){
  if (i ===1){
    console.log(`My ${i}st choice is ${topChoice[i-1]}`)
  }
  else if (i ===2){
    console.log(`My ${i}nd choice is ${topChoice[i-1]}`)
  }
  else if (i ===3){
    console.log(`My ${i}rd choice is ${topChoice[i-1]}`)
  }
  else{
    console.log(`My ${i}th choice is ${topChoice[i-1]}`)
  }
}


//The Reading List
//Keep track of which books you read and which books you want to read!

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

console.log(" ")
console.log("== Read Books ==")

let books = [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      alreadyRead: true
    },
    {
      title: 'Sherlock Holms',
      author: 'Arthur Conan Doyle',
      alreadyRead: false
    },
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      alreadyRead: true
    }
  ]
  for (let i = 0; i < books.length; i++){
    //console.log(books[i].title + " by " + books[i].author)
    if (books[i].alreadyRead === true){
      console.log("You have already read " + books[i].title +" by " + books[i].author);
      
    }
    else {
      console.log("You need to read " + books[i].title + " by " + books[i].author);
    }
  }
  