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
        name: "buildFramework",
        message: "What build framework would you like to use?",
        choices: ["esbuild", "farm", "rolldown", "rollup", "webpack"]
      }
    ]);

    this.destinationRoot(this.destinationPath(this.answers.appName));
  }

  writing() {
    const { appName } = this.answers;

    switch (this.answers.buildFramework) {
      case "esbuild":
        this._scaffoldEsbuildProject(appName);
        break;
      case "farm":
        this._scaffoldFarmProject(appName);
        break;
      case "rolldown":
        this._scaffoldRolldownProject(appName);
        break;
      case "rollup":
        this._scaffoldRollupProject(appName);
        break;
      case "webpack":
        this._scaffoldWebpackProject(appName);
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
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
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
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );
  }

  _scaffoldRollupProject(appName) {
    const tmplSourceDir = "rollup";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/rollup.config.js`),
      this.destinationPath("rollup.config.js")
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
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );
  }

  _scaffoldFarmProject(appName) {
    const tmplSourceDir = "farm";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/farm.config.js`),
      this.destinationPath("farm.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/tsconfig.json`),
      this.destinationPath("tsconfig.json")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/public`),
      this.destinationPath("public")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );
  }

  _scaffoldWebpackProject(appName) {
    const tmplSourceDir = "webpack";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/webpack.config.js`),
      this.destinationPath("webpack.config.js")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/gitignore`),
      this.destinationPath(".gitignore")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/main.civet`),
      this.destinationPath("main.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/message.civet`),
      this.destinationPath("message.civet")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
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
