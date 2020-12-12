exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'automaovesti1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'HYamkp5sBqpXNh1zFz9s',

    commonCapabilities: {
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android Parallel',
      name: 'parallel_test',
      app: process.env.BROWSERSTACK_APP_ID || 'app_url":"bs://242a2495820a8bf7ed39eab8ed37e935fd1c87e0"}',
      'browserstack.debug': true
    },

    capabilities: [{
      device: 'Google Pixel 3',
      os_version: "9.0"
    }, {
      device: 'Samsung Galaxy S10e',
      os_version: "9.0"
    }],

    //...
  };

  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps) {
    for(var i in exports.config.commonCapabilities) {
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
    }
  });