import chalk from "chalk"
import cowsay from "cowsay"
import joke from "one-liner-joke"
import hell from "./app.js"

console.log(chalk.blue.bgRed.underline.italic("ann"))

console.log(cowsay.say({text: joke.getRandomJoke().body, e: "**", T: "U"}))

hell("Sigma")