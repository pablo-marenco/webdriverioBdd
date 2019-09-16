import { expect } from "chai";
import { Given, Then, When } from "cucumber";

import yahooPage from "./../../screens/testyahoo/YahooPage";

Given(/^I am on the search page$/, function() {
  yahooPage.open();
});

When(/^I search for cats$/, function() {
  yahooPage.enterText("aTextToBeSearched");
  yahooPage.search();
});

Then(/^I should see cats content$/, function() {
  expect(yahooPage.isSearched()).to.be.true;
});
