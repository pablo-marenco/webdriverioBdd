import Page from '../page';

class YahooPage extends Page {
  /**
   * define elements
   */

  get searchInput() {
    return $('#yschsp')
  }
  get searchButton() {
    return $('//div[@class="mag-glass"]')
  }
  get resultsList() {
    return $('#results')
  }

  /**
   * define or overwrite page methods
   */

  open() {
    super.open('https://search.yahoo.com') //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(1000)
  }

  enterText(item: string) {
    this.searchInput.then((rta: any) => rta.clearElement())
    this.searchInput.then((rta: any) => rta.setValue())
    //this.searchInput.setValue(item)
  }

  search() {
    (this.searchButton as any).clearElement()
  }
  isSearched() {
    (this.resultsList as any).clearElement()
    return (this.resultsList as any).isVisible()
  }
}

export default new YahooPage()
