import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Locators } from "../pages/locators";
const l=new Locators()
// import LoginPage from "../pages/loginPage";
// const loginpage = new LoginPage();

before(()=>{
  cy.fixture('loginData').then(function (data) {
    globalThis.data = data;
  })
})  

Given('I am on LoginPage', () => {
  cy.visitPage();
});

When('I entered {string} and {string}', (emailField,passwordField) => {
  if(emailField==="email"){
    cy.enterValueIntoField(data.email, l.emailText);
  }
  if(passwordField==="password"){
    cy.enterValueIntoField(data.password, l.passwordText);
   }
});

// Then('I entered {string}', (fieldname) => {
//   if(fieldname==="password"){
//     cy.enterValueIntoField('lambdatest', LOGIN_PASSWORD_FIELD);
//   }
// })

Then('User click on {string} button', (Login) => {
  cy.contains(Login).clickButton(l.loginButton);
});

// Then('Validate the title after login', () => {
//   cy.validateTitle('Expected Title After Login');
// });

// Given('I navigate to the Website',()=>{
//     loginpage.launchURL()
// })

// When('I entered valid credential',  () => {
//    loginpage.enterEmail(data.email)
//    loginpage.enterPassword(data.password)
// })

// Then('User click on sign in button', () => {
//     loginpage.clickOnSubmitButton()
// })

// Then('Validate the title after login', () => {
//     loginpage.verifyPageTitle(data.title)
// })