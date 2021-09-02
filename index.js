// Importing readline sync npm
var readlineSync = require('readline-sync');

// Importing chalk npm
const chalk = require('chalk');

//Take input from the user
var username = readlineSync.question('Enter your name: ');
console.log('Welcome ' + username + ' to DO YOU KNOW ROHITH ')
console.log("---------------------------")

// Declaring global variable with inital value 0
score = 0;

// Defining a function
function play(question,answer){
  var userInput = readlineSync.question(question);
  if(userInput === answer){
    console.log('YAY!, Your right')
    score++;
    console.log(chalk.green('Your score is: ' + score))
  }else{
    console.log('OOPS!, Your wrong')
    score--;
    console.log(chalk.red('Your score is: ' + score))
  }
  return console.log("---------------------------")
}

// All questions in an array
var questionset = [{
  question:'When was the first iPhone launched? \n 1.2006 \n 2.2007 \n 3.2008 \n 4.2010 \n Answer (1 or 2 or 3 or 4)',
  answer:'2'
},
{
  question:'Who is the C.E.O of Tesla? \n 1.Steve Jobs \n 2.Tim Cook \n 3.Sundar Pichai \n 4.Elon Musk \n Answer (1 or 2 or 3 or 4)',
  answer:'4'
},
{
  question:'What is the first product from NOTHING? \n 1.Nothing Phone1 \n 2.Nothing Ear1 \n 3.Nothing Watch1 \n 4.Nothing book1 \n Answer (1 or 2 or 3 or 4)',
  answer:'2'
},
{
  question:'In which year 4G came into existence? \n 1.2007 \n 2.2008 \n 3.2009 \n 4.2010 \n Answer (1 or 2 or 3 or 4)',
  answer:'3'
},
{
  question:'In which year Airpods were launched? \n 1.2016  \n 2.2017 \n 3.2018  \n 4.2019 \n Answer (1 or 2 or 3 or 4)',
  answer:'1'
},
]

// calling the function 
for(i=0;i<questionset.length;i++){
  var currentQuestion = questionset[i]
  play(currentQuestion.question,currentQuestion.answer)
}

// Storing a high score value
var highScore = {
  name:"Rohith",
  score:"5",
}

console.log("Thanks for playing the game, Your score is: " + score)
console.log("Highest Score is " + highScore.name + " with a score of " + highScore.score)