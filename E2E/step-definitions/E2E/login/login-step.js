const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { CommomFunctions } = require('../../../page-objects/common/commonFunctions')
const { CommonString } = require('../../../page-objects/common/commonString')
const commomStrings = new CommonString()
const commomFunction = new CommomFunctions()

Given('the user has visited the login page', async () => {
  await commomFunction.navigateToLoginScreen()
})

When('the user provides valid login credentials', async () => {
  await commomFunction.submitLoginForm()
})

Then('the user should see the homepage', async () => {
  await commomFunction.assertUserIsLoggedIn()
})
