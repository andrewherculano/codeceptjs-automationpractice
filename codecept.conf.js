const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'automation-practice',
  tests: './scenarios/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      browser: 'chromium',
      waitForTimeout: 5000,
      timeout: 20000,
      windowSize: '1200x800',
      show: true,
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home_page.js',
    registerPage: './pages/register_page.js',
    createUserPage: './pages/create_user_page.js',
    loginPage: './pages/login_page.js'
  },
  bootstrap: null,
  mocha: {},
}