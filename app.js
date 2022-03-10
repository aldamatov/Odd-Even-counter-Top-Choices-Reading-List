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