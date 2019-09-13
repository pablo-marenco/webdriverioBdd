const { join } = require('path')

exports.config = {
  specs: ['./src/test/features/**/*.feature'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  drivers: {
    ie: {
      version: '3.7.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    },
    edge: {
      version: '16299'
    }
  },
  capabilities: [
    /*     {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu']
      }
    }, */
    /*{
      maxInstances: 5,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless']
      }
    }, */
    /* {
      maxInstances: 5,
      browserName: "safari"
    } */
    {
      maxInstances: 5,
      browserName: 'internet explorer'
    },
    {
      browserName: 'MicrosoftEdge'
    }
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    'selenium-standalone'
    // "chromedriver"
    // "devtools"
    // "firefox-profile"
  ],
  /* seleniumArgs: {
    javaArgs: [
      `-Dwebdriver.ie.driver=${join(
        __dirname,
        'node_modules/selenium-standalone/.selenium/edgedriver/17134-MicrosoftEdgeDriver.exe'
      )}`
    ]
  }, */
  seleniumArgs: {
    javaArgs: [
      '-Dwebdriver.edge.driver=C:\\Windows\\System32\\MicrosoftWebDriver.exe'
    ]
  },
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./src/test/steps/**/*.js'], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    requireModule: ['@babel/register'],
    failFast: false, // <boolean> abort the run on first failure
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tagExpression: '', // <string> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 20000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    failAmbiguousDefinitions: true,
    name: [],
    snippetSyntax: undefined
  },

  reporters: [
    [
      'allure',
      {
        outputDir: join(__dirname, 'logs/allure-results')
      }
    ],
    'spec'
  ],

  outputDir: join(__dirname, 'logs')

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Runs before a Cucumber feature
   */
  // beforeFeature: function (uri, feature, scenarios) {
  // },
  /**
   * Runs before a Cucumber scenario
   */
  // beforeScenario: function (uri, feature, scenario, sourceLocation) {
  // },
  /**
   * Runs before a Cucumber step
   */
  // beforeStep: function (uri, feature) {
  // },
  /**
   * Runs after a Cucumber step
   */
  // afterStep: function (uri, feature, { error, result }) {
  // },
  /**
   * Runs after a Cucumber scenario
   */
  // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
  // },
  /**
   * Runs after a Cucumber feature
   */
  // afterFeature: function (uri, feature, scenarios) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
}
