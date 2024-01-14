import chalk from "chalk"
import cowsay from "cowsay"
import joke from "one-liner-joke"
import hello from "./app.js"

console.log(chalk.bgRed.blue.underline("i also love Clone Drone in the Danger Zone"))

console.log(cowsay.say({text: "COWSAY FYC URSELF", e:"^ ^", T:"U"}))

console.log(cowsay.say({text: joke.getRandomJoke().body, e:"^ ^", T:"U"}))

hello("Vovander15")