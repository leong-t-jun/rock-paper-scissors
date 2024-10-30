/*
Plan or pseudocode your solution.
Write the code.
Test your code to make sure it works
*/
console.log('hello world')
let computer = Math.floor(Math.random()*3)

function getComputerChoice(){
    if computer === 0 {
        return "rock"
    }   else if computer === 1 {
        return "paper"
    } else if computer === 2 {
        return "scissors"
    }
}
console.log(getComputerChoice())