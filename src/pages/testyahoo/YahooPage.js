import Page from "../page";

class YahooPage extends Page {
  /**
   * define elements
   */

  get searchInput() {
    return $("#yschsp");
  }
  get searchButton() {
    return $("#sf .sbb");
  }
  get resultsList() {
    return $("#results");
  }

  /**
   * define or overwrite page methods
   */

  open() {
    super.open("https://search.yahoo.com"); //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(3000);
  }

  enterText(item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
  }

  search() {
    this.searchButton.click();
  }

  isSearched() {
    return this.resultsList.isDisplayedInViewport();
  }
}

export default new YahooPage();
