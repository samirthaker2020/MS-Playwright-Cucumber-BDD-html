// globally setup the hooks for creating, opening browser
const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async () => {
  // launch chrome browser
  console.log('Launch Browser')
  global.browser = await playwright['chromium'].launch({ headless: true })
})
AfterAll(async () => {
  // close browser after test
  console.log('Close Browser')
  await global.browser.close()
})
Before(async () => {
  // create new context & new page
  console.log('create new context & new page')
  global.context = await global.browser.newContext()
})
After(async () => {
  // remove new context & close page
  console.log('remove new context & close page')
  await global.page.close()
  await global.context.close()
})
