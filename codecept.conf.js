require('ts-node/register')

const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000/',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: [ "domcontentloaded", "networkidle0" ]
    }
  },
  include: {
    I: './tests/steps_file.js',
    Navbar: './tests/pages/Navbar.js',
    LeftSidebar: './tests/pages/LeftSidebar.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'petsite'
}