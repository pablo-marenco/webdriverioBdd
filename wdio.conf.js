const { join } = require("path");

exports.config = {
  specs: ["./src/test/features/**/*.feature"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    },
    {
      maxInstances: 5,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"]
      }
    }
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  framework: "cucumber",
  cucumberOpts: {
    require: ["./src/test/steps/**/*.js"],
    backtrace: false,
    requireModule: ["@babel/register"],
    failFast: false,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 20000,
    ignoreUndefinedDefinitions: false,
    failAmbiguousDefinitions: true,
    name: [],
    snippetSyntax: undefined
  },

  reporters: [
    [
      "allure",
      {
        outputDir: join(__dirname, "logs/allure-results")
      }
    ],
    "spec"
  ],

  outputDir: join(__dirname, "logs")
};
