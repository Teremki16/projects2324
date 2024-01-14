import chalk from "chalk"
import cowsay from "cowsay"
import joke from "one-liner-joke"
import hello from "./app.js";
console.log(chalk.bgRed.underline.italic.blue("ann"))
console.log(cowsay.say({text: joke.getRandomJoke().body, e:"^", T: "U"}))
hello("Egor")
