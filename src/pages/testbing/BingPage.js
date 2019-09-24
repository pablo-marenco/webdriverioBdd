import Page from "../page";

class BingPage extends Page {
  /**
   * define elements
   */

  get searchInput() {
    return $("#sb_form_q");
  }
  get searchButton() {
    return $("#sb_form_go");
  }
  get resultsList() {
    return $("#b_results");
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
    // this.searchButton.submit();
    browser.keys("\uE007");
  }

  isSearched() {
    return this.resultsList.isDisplayedInViewport();
  }
}

export default new BingPage();
