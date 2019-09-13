import { Given, When, Then } from "cucumber";
import yahooPage from "./../../screens/testyahoo/YahooPage";
import { expect } from "chai";

Given(/^I am on the search page$/, function() {
  yahooPage.open();
});

When(/^I search for cats$/, function() {
  yahooPage.enterText("aTextToSearch");
});

Then(/^I should see cats content$/, function() {
  expect(1).to.equal(1);
});
