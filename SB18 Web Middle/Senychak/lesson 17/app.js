import chalk from "chalk";

export default (name) => {
    console.log(chalk.red.bgCyan("hello " + name));
};
