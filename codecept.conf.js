const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './scenarios/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      browser: 'chromium',
      waitForTimeout: 5000,
      timeout: 10000
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'automation-practice'
}