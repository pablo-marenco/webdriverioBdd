const { join } = require("path");

exports.config = {
  specs: ["./src/test/features/**/*.feature"],
  exclude: [],
  maxInstances: 10,
  drivers: {
    ie: {
      version: "3.7.0",
      arch: process.arch,
      baseURL: "https://selenium-release.storage.googleapis.com"
    },
    edge: {
      version: "16299",
      arch: process.arch
    }
  },
  capabilities: [
    {
      browserName: "MicrosoftEdge"
    },
    {
      browserName: "internet explorer"
    }
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ["selenium-standalone"],
  /* seleniumArgs: {
    javaArgs: [
      `-Dwebdriver.ie.driver=${join(
        __dirname,
        "node_modules/selenium-standalone/.selenium/edgedriver/17134-MicrosoftEdgeDriver.exe"
      )}`
    ]
  }, */
  seleniumArgs: {
    javaArgs: [
      "-Dwebdriver.edge.driver=C:\\Windows\\System32\\MicrosoftWebDriver.exe"
    ]
  },
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
