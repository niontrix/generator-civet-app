"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the wonderful ${chalk.red(
          "generator-civet-app"
        )} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "appName",
        message: "What would you like to call your app?",
        default: this.appname
      }
    ]);

    this.destinationRoot(this.destinationPath(this.answers.appName));
  }

  writing() {
    const { appName } = this.answers;

    this.fs.copyTpl(
      this.templatePath("package.json.ejs"),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath("rolldown.config.js"),
      this.destinationPath("rolldown.config.js")
    );

    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath("src/main.civet"),
      this.destinationPath("src/main.civet")
    );

    this.fs.copy(
      this.templatePath("src/message.civet"),
      this.destinationPath("src/message.civet")
    );

    this.fs.copy(
      this.templatePath("vscode/launch.json"),
      this.destinationPath(".vscode/launch.json")
    );

    this.fs.copy(
      this.templatePath("vscode/tasks.json"),
      this.destinationPath(".vscode/tasks.json")
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
