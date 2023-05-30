const {remote} = require('webdriverio');

const capabilities = {
    platformName: 'Android',
    'appium:app': 'storage:filename=app-debug.apk', // The filename of the mobile app
    'appium:deviceName': 'Samsung_Galaxy_S9_free',
    'appium:deviceOrientation': 'portrait',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
       build: process.env.BUILD_ID,
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