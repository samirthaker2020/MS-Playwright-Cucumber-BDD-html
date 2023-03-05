Feature: Login action

    Scenario: As a user I want to login into appliaction with valid credentials
    Given the user has visited the login page
    When the user provides valid login credentials
    Then the user should see the homepage