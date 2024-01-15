import chalk from "chalk";
import {say} from "cowsay";
import {getRandomJoke} from "one-liner-joke";
import hello from "./app.js";

console.log(chalk.bgRed.underline.italic.blue("Kyrylo"));

console.log(say({ text: getRandomJoke().body, e: "**", T: "A" }));

hello("Anya");
