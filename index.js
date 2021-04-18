const readlineSync = require('readline-sync')
const chalk = require('chalk');

const userName = readlineSync.question(chalk.yellow("What is your Name? "));

console.log("\nWelcome " + chalk.yellowBright.bold(userName, "! ") + "to 'My Quiz'. \nLet's see How well " +  chalk.bgRedBright.underline.bold("DO YOU KNOW ME."));
console.log(chalk.yellowBright.italic.bold("\nOK..!! Let's begin the Quiz"));
console.log("      ----------------------    ");
let score = 0;

function play(question, answer){
  const userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("You are absolutely correct!"))
    score = score + 1;
  } else {
    console.log(chalk.redBright.bold("Oops! You are wrong!"))
    console.log(chalk.magenta("The correct answer is: "), chalk.green(answer));
  } 
  console.log("Your current score is: " + chalk.yellow(score));
  console.log("------------------------------");
} 

const questions = [{
  question:chalk.cyan("What is my nickname? "),
  answer: "Rishu"
},{
  question:chalk.cyan("From where i had done my schooling? "),
  answer: "Trinity convent"
},{
  question:chalk.cyan("Who is my favourite sportsperson? "),
  answer: "Rohit Sharma"
},{
  question:chalk.cyan("What is my favourite food cuisine? "),
  answer: "Italian"
},{
  question:chalk.cyan("What is my favourite city to explore outside India? "),
  answer: "New York"
}];

for ( let i=0; i<questions.length; i++){
  const currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.magenta.bold("\nYour"), chalk.yellowBright("Final Score!"), chalk.magenta.bold("in my Quiz is: "), chalk.yellowBright(score),chalk.yellowBright("/ 5"));
console.log(chalk.yellow.underline.bold("\nHighscorers: "));

 firstHighScore = {
  name: "Anurudra:",
  score: "5"
}
 secondHighScore = {
  name: "Anuresh: ",
  score: "4"
}

const highScore = [firstHighScore, secondHighScore]
for(let i=0; i<highScore.length; i++){
  const currentHighScore = highScore[i];
  console.log(chalk.cyan.bold(currentHighScore.name), chalk.green(currentHighScore.score))
}

if(score>=firstHighScore.score){
  console.log(chalk.yellowBright("\nCongratulations!! You are a new highscorer."));
  console.log(chalk.blueBright("Send me the screenshot of your score, I will update your name on my Quiz scoreboard."));
} else if(score>=secondHighScore.score){
  console.log(chalk.yellowBright("\nWell Played! You scored the second best highscore"), chalk.blueBright("\nWe will update your name in scorecard soon."));
} else {
  console.log(chalk.redBright("\nSorry!! You coudn't beat the Highscores.","\nBetter Luck Next Time..."))
}

console.log(chalk.green.bold.italic("\nThanks for Playing.!"));




