"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const appName = "civet-test-app";

describe("generator-civet-app:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ appName: appName, buildFramework: "esbuild" });
  });

  it("sets the destination folder to the project  name", () => {
    assert.it.path.endsWith(appName);
  });

  it("creates files", () => {
    assert.file(`${appName}/package.json`);
    assert.file(`${appName}/tsconfig.json`);
    assert.file(`${appName}/.gitignore`);
    assert.file(`${appName}/esbuild.js`);
    assert.file(`${appName}/.vscode/launch.json`);
    assert.file(`${appName}/.vscode/tasks.json`);
    assert.file(`${appName}/src/main.civet`);
    assert.file(`${appName}/src/message.civet`);
  });
});
