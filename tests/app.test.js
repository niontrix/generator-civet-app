import path from "node:path";
import fs from "node:fs";
import helpers from "yeoman-test";
import {
  describe,
  expect,
  it,
  beforeAll
} from "vitest";

const __dirname = import.meta.dirname;
const appName = "civet-test-app";

describe("generator-civet-app:app - esbuild", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "esbuild" }));

  it("creates files", () => {
    expect(fs.existsSync(`${appName}/esbuild.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds esbuild dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("esbuild");
  });
});

describe("generator-civet-app:app - farm", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "farm" }));

  it("creates files", () => {
    expect(fs.existsSync(`${appName}/farm.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/style.css`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds farm dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("farm");
  });
});
