const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { CommomFunction } = require('../page-objects/common/commonFunction')
const { CommonString } = require('../page-objects/common/commonString')
const commom_strings = new CommonString()
const commom_functions = new CommomFunction()

Given('the user has visited the login page', async () => {
  await page.goto(commom_strings.base_url)
})

When('the user provides valid login credentials', async () => {
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')
})

Then('the user should see the homepage', async () => {
  await page.waitForSelector('.inventory_list')
})
