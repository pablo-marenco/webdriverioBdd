import Page from "../page";

class GooglePage extends Page {
  /**
   * define elements
   */

  get searchInput() {
    return $(".gLFyf.gsfi");
  }
  get searchButton() {
    return $(".gNO89b");
  }
  get resultsList() {
    return $("#rcnt");
  }

  /**
   * define or overwrite page methods
   */

  open() {
    super.open("https://google.com"); //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(3000);
  }

  enterText(item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
  }

  search() {
    // this.searchButton.click();
    browser.keys("\uE007");
  }

  isSearched() {
    return this.resultsList.isDisplayedInViewport();
  }
}

export default new GooglePage();
