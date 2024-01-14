import chalk from "chalk"

import cowsay from "cowsay"

import joke from "one-liner-joke"

import {lox} from "./app.js"

console.log(chalk.blue.bgRed.underline.italic("lox"))

console.log(cowsay.say({text: joke.getRandomJoke().body, e:"**", T:"U"}))

lox("Danya")

