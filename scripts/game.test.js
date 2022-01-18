/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const { beforeAll } = require("jest-circus");
const { test } = require("picomatch");
const { describe } = require("yargs");
const { game } = require("../scripts/game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});