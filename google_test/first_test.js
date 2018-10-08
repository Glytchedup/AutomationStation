var webdriver = require('selenium-webdriver');

var browswer = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

browswer.get('http://www.google.com');

var promise = browser.getTitle();

promise.then(function(title) {
    console.log(title);    
});

browswer.quit();