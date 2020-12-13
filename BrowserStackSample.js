let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;

desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : 'automaovesti1',
  'browserstack.key' : 'HYamkp5sBqpXNh1zFz9s',

  // Set URL of the application under test
  'app' : 'bs://063ceb58b679b856452f36223d31199276f0b469',

  // Specify device and os_version for testing
  'device' : 'Google Pixel 3',
  'os_version' : '9.0',

  // Set other BrowserStack capabilities
  'project' : 'First NodeJS project',
  'build' : 'Node Android',
  'name': 'first_test',
  'browserstack.networkLogs': 'true',
  'browserstack.deviceLogs': 'true',
  'browserstack.appiumLogs': 'true',
  'browserstack.debug': 'true'
};






// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");



(async () => {

    describe('Search Wikipedia Functionality', () => {

        it('can find search results', async () => {
          const counterTextFinder = find.byValueKey('counter');
          const buttonFinder = find.byValueKey('increment');

            assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
            await driver.elementClick(buttonFinder);
            await driver.touchAction({
                action: 'tap',
                element: { elementId: buttonFinder }
            });

            assert.strictEqual(await driver.getElementText(counterTextFinder), '1');
        });
    });

  });



driver
  .init(desiredCaps)
  //  Write your code here
  .fin(function() {
return driver.quit(); })
  .done();

