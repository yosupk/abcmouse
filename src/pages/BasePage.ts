export default class BasePage {
  
    get uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }

    get open() {
        return browser.url('/');
    }

    get currentUrl(){
        console.log(browser.getUrl());
        return browser.getUrl();
    }

    waitUntilElementIsDisplayed(ele) {
        browser.waitUntil(() => {
            return ele.isDisplayed();
        });
    }
}
