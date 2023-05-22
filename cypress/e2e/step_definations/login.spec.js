import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../pages/loginPage";
const loginpage= new LoginPage();

before(()=>{
  cy.fixture('loginData').then(function (data) {
    globalThis.data = data;
  })
})  

Given('I navigate to the Website',()=>{
    loginpage.launchURL()
})

When('I entered valid credential',  () => {
   loginpage.enterEmail(data.email)
   loginpage.enterPassword(data.password)
})

Then('User click on sign in button', () => {
    loginpage.clickOnSubmitButton()
})

Then('Validate the title after login', () => {
    loginpage.verifyPageTitle(data.title)
})