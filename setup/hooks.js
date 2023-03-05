const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

// launch the browser
BeforeAll(async () => {
  console.log('Launch Browser')
  global.browser = await playwright['chromium'].launch({ headless: false })
})

// close the browser
AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

// Create a new browser context and page per scenario
Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

// cleanup after each scenario
After(async () => {
  console.log('Close context and page')
  await global.page.close()
  await global.context.close()
})
