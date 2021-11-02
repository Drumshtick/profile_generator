const readline = require('readline');

const plsExit = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const answers = {
  nickname: "",
  favActivity: "",
  favMusic: "",
  favMeal: "",
  favMealFood: "",
  favSport: "",
  power: "",
};

console.log("[Ctrl+c] to quit");
//Setup environment (capture stdin, use stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name (Or alias if you're super cool): ", (answer) => {
  plsExit(answer);
  answers.nickname = answer;
  rl.question("What's an activity you like doing?: ", (answer) => {
    plsExit(answer);
    answers.favActivity = answer;
    rl.question("What do you listen to while doing that?: ", (answer) => {
      plsExit(answer);
      answers.favMusic = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (answer) => {
        plsExit(answer);
        answers.favMeal = answer;
        rl.question("What's your favourite thing to eat for that meal?: ", (answer) => {
          plsExit(answer);
          answers.favMealFood = answer;
          rl.question("Which sport is your absolute favourite?: ", (answer) => {
            plsExit(answer);
            answers.favSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", (answer) => {
              plsExit(answer);
              answers.power = answer;
              console.log("");
              console.log(`${answers.nickname}'s online profile description: `);
              console.log("");
              console.log(`${answers.nickname} is my name. I enjoy spending my time doing ${answers.favActivity}, but it's always better if I can listen to ${answers.favMusic}.`, 
              `My favorite meal of the day by far is ${answers.favMeal} and it's not ${answers.favMeal} without ${answers.favMealFood}.`, 
              `I do enjoy sports as long as it's ${answers.favSport}. But beware my dark powers in ${answers.power}, my ability will strike fear in the heart of my competitors.`);
              process.exit();
            });
          });
        });
      });      
    });
  });
});