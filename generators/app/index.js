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
      },
      {
        type: "list",
        name: "framework",
        message: "What framework would you like to use?",
        choices: ["esbuild", "rolldown"]
      }
    ]);

    this.destinationRoot(this.destinationPath(this.answers.appName));
  }

  writing() {
    const { appName } = this.answers;

    switch (this.answers.framework) {
      case "esbuild":
        this._scaffoldEsbuildProject(appName);
        break;
      case "rolldown":
        this._scaffoldRolldownProject(appName);
        break;
      default:
        this.log("You must select a framework");
        break;
    }
  }

  _scaffoldRolldownProject(appName) {
    const tmplSourceDir = "rolldown";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/rolldown.config.js`),
      this.destinationPath("rolldown.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src/main.civet`),
      this.destinationPath("src/main.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src/message.civet`),
      this.destinationPath("src/message.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode/launch.json`),
      this.destinationPath(".vscode/launch.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode/tasks.json`),
      this.destinationPath(".vscode/tasks.json")
    );
  }

  _scaffoldEsbuildProject(appName) {
    const tmplSourceDir = "esbuild";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/esbuild.js`),
      this.destinationPath("esbuild.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src/main.civet`),
      this.destinationPath("src/main.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src/message.civet`),
      this.destinationPath("src/message.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode/launch.json`),
      this.destinationPath(".vscode/launch.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode/tasks.json`),
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

