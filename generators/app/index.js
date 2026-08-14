import fs from "node:fs";
import Generator from "yeoman-generator";
import chalk from "chalk";
import yosay from "yosay";

export default class CivetAppGenerator extends Generator {
  #scaffoldRolldownProject(appName) {
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

    this.addDevDependencies({
      rolldown: "^1.2.0"
    });
  }

  #scaffoldEsbuildProject(appName) {
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

    this.addDevDependencies({
      esbuild: "^0.27.0"
    });
  }

  #scaffoldRollupProject(appName) {
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

    this.addDevDependencies({
      rollup: "^4.62.0"
    });
  }

  #scaffoldFarmProject(appName) {
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

    this.addDevDependencies({
      "@farmfe/cli": "^1.0.0",
      "@farmfe/core": "^1.6.0"
    });
  }

  #scaffoldViteProject(appName) {
    const tmplSourceDir = "vite";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vite.config.js`),
      this.destinationPath("vite.config.js")
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
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      vite: "^8.2.0"
    });
  }

  #scaffoldViteLibProject(appName) {
    const tmplSourceDir = "vite-lib";

    this.fs.copyTpl(
      this.templatePath(`${tmplSourceDir}/package.json.ejs`),
      this.destinationPath("package.json"),
      { appName }
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vite.config.js`),
      this.destinationPath("vite.config.js")
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
      this.templatePath(`${tmplSourceDir}/index.html`),
      this.destinationPath("index.html")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/src`),
      this.destinationPath("src")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/scripts`),
      this.destinationPath("scripts")
    );

    this.fs.copy(
      this.templatePath(`${tmplSourceDir}/vscode`),
      this.destinationPath(".vscode")
    );

    this.addDevDependencies({
      vite: "^8.2.0"
    });
  }

  #scaffoldWebpackProject(appName) {
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

    this.addDevDependencies({
      webpack: "^5.109.0",
      "webpack-cli": "^7.2.0"
    });
  }

  async initializing() {
    this.log(yosay(`Welcome to the wonderful ${chalk.red("generator-civet-app")} generator!`));
  }

  async prompting() {
    // Have Yeoman greet the user.
    const prompts = [
      {
        type: "input",
        name: "appName",
        message: "What would you like to call your app?",
        default: this.appname
      },
      {
        type: "list",
        name: "buildFramework",
        message: "What kind of base would you like to use?",
        choices: ["esbuild", "farm", "rolldown", "rollup", "vite", "vite-lib", "webpack"]
      }
    ];

    this.answers = await this.prompt(prompts);

    this.destinationRoot(this.destinationPath(this.answers.appName));
  }

  writing() {
    const { appName, buildFramework } = this.answers;

    switch (buildFramework) {
      case "esbuild": {
        this.#scaffoldEsbuildProject(appName);
        break;
      }

      case "farm": {
        this.#scaffoldFarmProject(appName);
        break;
      }

      case "rolldown": {
        this.#scaffoldRolldownProject(appName);
        break;
      }

      case "rollup": {
        this.#scaffoldRollupProject(appName);
        break;
      }

      case "vite": {
        this.#scaffoldViteProject(appName);
        break;
      }

      case "vite-lib": {
        this.#scaffoldViteLibProject(appName);
        break;
      }

      case "webpack": {
        this.#scaffoldWebpackProject(appName);
        break;
      }

      default: {
        this.log("You must select a framework");
        break;
      }
    }

    // Always include these dependencies
    this.addDevDependencies({
      "@danielx/civet": "^0.11.0",
      typescript: "<7.0.0"
    });
  }

  end() {
    if (this.answers.buildFramework === "vite-lib") {
      // Make the script executable, otherwise the debug config won't work
      fs.chmodSync(this.destinationPath("scripts/launch-chrome-debug.sh"), 0o755);
    }
  }
}
