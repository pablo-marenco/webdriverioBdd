import { Given } from "cucumber";
import yahooPage from "../../../src/screens/testyahoo/YahooPage";

Given(/^I am on the search page$/, function() {
  yahooPage.open();
  //browser.getTitle().should.equal('Yahoo Search - Web Search')
});
