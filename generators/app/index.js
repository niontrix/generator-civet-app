"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the wonderful ${chalk.red(
          "generator-civet-app"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "appName",
        message: "Project Name",
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.appName;
      this.props = props;
    });
  }

  writing() {
    const { appName } = this.props;

    // if current dir is not same as project name create a sub-folder with the project name hyphenated

    this.fs.copy(
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
