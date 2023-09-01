const {remote} = require('webdriverio');

const capabilities = {
    platformName: 'iOS',
    'appium:app': `storage:filename=react-native-cli-test-main-41a946-app-store.ipa`, // The filename of the mobile app in saucelabs
    'appium:deviceName': 'iPhone_12_free',
    'appium:deviceOrientation': 'portrait',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
       build: 'localtest',
       name: 'Click Tabs',
     },
   };
  

  async function runTest() {

    const driver = await remote({
        user: process.env.SAUCELABS_USER,
        key: process.env.SAUCELABS_KEY,
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        capabilities,
      });

      try {
        const tab2El = await driver.$('//*[@text="Tab 2"]');
        await tab2El.click();
    
        const tab3El = await driver.$('//*[@text="Tab 3"]');
        await tab3El.click();
    
      } finally {
        await driver.deleteSession();
      }
  }
  
  runTest().catch(console.error);