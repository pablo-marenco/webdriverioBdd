import Page from "../page";

class YahooPage extends Page {
  /**
   * define elements
   */

  get searchInput() {
    return browser.findElement("#yschsp");
  }
  get searchButton() {
    return browser.findElement('//div[@class="mag-glass"]');
  }
  get resultsList() {
    return browser.findElement("#results");
  }

  /**
   * define or overwrite page methods
   */

  open() {
    super.open("https://search.yahoo.com"); //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(3000);
  }

  enterText(item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
  }

  search() {
    this.searchButton.click();
  }

  isSearched() {
    this.resultsList.clearElement();
    return this.resultsList.isVisible();
  }
}

export default new YahooPage();
