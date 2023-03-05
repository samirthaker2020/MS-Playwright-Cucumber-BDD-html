const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { expect } = require('chai')
const {
  CommomFunctions,
} = require('../../../page-objects/common/commonFunctions')
const { CommonObjects } = require('../../../page-objects/common/commonObjects')
const { CommonString } = require('../../../page-objects/common/commonString')
const commomStrings = new CommonString()
const commomFunction = new CommomFunctions()
const commonObject = new CommonObjects()

Given('the user has visited the login page', async () => {
  await commomFunction.navigateToLoginScreen()
})

When('the user provides valid login credentials', async () => {
  await commomFunction.submitLoginForm()
})

Then('the user should see the homepage', async () => {
  await commomFunction.assertUserIsLoggedIn()
})

defineStep(
  /^the user fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await commomFunction.submitLoginWithParameters(username, password)
  }
)
defineStep(/^the user can see the message "([^"]*)"$/, async function (text) {
  await commomFunction.verifyText(text, commonObject.invalid_login)
})
