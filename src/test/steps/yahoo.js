import { expect } from "chai";
import { Given, Then, When } from "cucumber";

import YahooPage from "./../../screens/testyahoo/YahooPage";
import GooglePage from "./../../screens/testgoogle/GooglePage";

let browser;

Given(/^I am on the search page on "([^"]*)"$/, function(browserName) {
  browser = browserName == "Google" ? GooglePage : YahooPage;
  browser.open();
});

When(/^I search for cats$/, function() {
  browser.enterText("aTextToBeSearched");
  browser.search();
});

Then(/^I should see cats$/, function() {
  expect(browser.isSearched()).to.be.true;
});
