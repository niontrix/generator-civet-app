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

describe("generator-civet-app:esbuild", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "esbuild" }));

  it("creates esbuild project files", () => {
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

describe("generator-civet-app:farm", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "farm" }));

  it("creates farm project files", () => {
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

describe("generator-civet-app:rollup", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "rollup" }));

  it("creates rollup project files", () => {
    expect(fs.existsSync(`${appName}/rollup.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds rollup dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("rollup");
  });
});

describe("generator-civet-app:rolldown", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "rolldown" }));

  it("creates rolldown project files", () => {
    expect(fs.existsSync(`${appName}/rolldown.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds rolldown dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("rolldown");
  });
});

describe("generator-civet-app:webpack", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "webpack" }));

  it("creates webpack project files", () => {
    expect(fs.existsSync(`${appName}/webpack.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds webpack dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("webpack");
  });
});

describe("generator-civet-app:vite", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "vite" }));

  it("creates vite project files", () => {
    expect(fs.existsSync(`${appName}/vite.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/index.html`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/worker.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds vite dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("vite");
  });

  it("adds full app debug configuration", () => {
    expect(fs.readFileSync(`${appName}/.vscode/launch.json`, "utf8")).toContain("Debug full app");
  });
});

describe("generator-civet-app:vite-lib", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "vite-lib" }));

  it("creates vite-lib project files", () => {
    expect(fs.existsSync(`${appName}/vite.config.js`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/index.html`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/scripts/dev-with-debug.mjs`)).toBe(true);
    expect(fs.existsSync(`${appName}/scripts/launch-chrome-debug.mjs`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds vite dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("vite");
  });

  it("adds a full app debug configuration", () => {
    expect(fs.readFileSync(`${appName}/.vscode/launch.json`, "utf8")).toContain("Debug full app");
  });
});

describe("generator-civet-app:bun", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ appName, buildFramework: "bun" }));

  it("creates bun project files", () => {
    expect(fs.existsSync(`${appName}/bunfig.toml`)).toBe(true);
    expect(fs.existsSync(`${appName}/package.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/main.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/src/message.civet`)).toBe(true);
    expect(fs.existsSync(`${appName}/.gitignore`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/launch.json`)).toBe(true);
    expect(fs.existsSync(`${appName}/.vscode/tasks.json`)).toBe(true);
  });

  it("adds bun dependencies", () => {
    expect(fs.readFileSync(`${appName}/package.json`, "utf8")).toContain("@types/bun");
  });
});
