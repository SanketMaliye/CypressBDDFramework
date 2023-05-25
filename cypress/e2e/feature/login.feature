# Feature:  I want to login into the site with valid data

#     Background:
#         Given I navigate to the Website

#     Scenario: Login as new sign up user with valid data
#         When I entered valid credential
#         Then User click on sign in button
#         Then Validate the title after login

Feature: I want to login into the site with valid data

  Background:
    Given I am on LoginPage

  Scenario: Login as new sign up user with valid data
    When I entered "email" and "password"
    # Then I entered "password"
    Then User click on "Login" button
    # Then Validate the title after login
    





