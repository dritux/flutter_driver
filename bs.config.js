let wd = require('wd');

exports.config = {
    commonCapabilities: {
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android Parallel',
      name: 'parallel_test',
      app: process.env.BROWSERSTACK_APP_ID || 'app_url":"bs://063ceb58b679b856452f36223d31199276f0b469"}',
      'browserstack.debug': true
    },
    capabilities: [
        {
          device: 'Google Pixel 3',
          os_version: "9.0"
        }, {
          device: 'Samsung Galaxy S10e',
          os_version: "9.0"
        }
    ],
    //...
  };
  exports.config.capabilities.forEach(function(caps) {
    for(var i in exports.config.commonCapabilities) {
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
    }
  });

driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

driver.init(desiredCaps)
  //  Write your code here
  .fin(function() {
return driver.quit(); })
  .done();

