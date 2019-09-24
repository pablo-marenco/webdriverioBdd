import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';

import BingPage from '../../pages/testbing/BingPage';
import GooglePage from '../../pages/testgoogle/GooglePage';
import YahooPage from '../../pages/testyahoo/YahooPage';

let browser

const getBrowser = browserName => {
  switch (browserName) {
    case 'Google':
      return GooglePage
    case 'Yahoo':
      return YahooPage
    default:
      return BingPage
  }
}

Given(/^I am on the search page on "([^"]*)"$/, function(browserName) {
  browser = getBrowser(browserName)
  browser.open()
})

When(/^I search for cats$/, function() {
  browser.enterText('aTextToBeSearched')
  browser.search()
})

Then(/^I should see cats$/, function() {
  expect(browser.isSearched()).to.be.true
})
