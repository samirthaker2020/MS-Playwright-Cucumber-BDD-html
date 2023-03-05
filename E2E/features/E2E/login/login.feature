Feature: Login action

Scenario: As a user I want to login into appliaction with valid credentials
    Given the user has visited the login page
    When the user provides valid login credentials
    Then the user should see the homepage

Scenario Outline: As a user I want to login into appliaction with invalid credentials
    Given the user has visited the login page
    When the user fill the login form with "<username>" and "<password>"
    Then the user can see the message "Epic sadface: Username and password do not match any user in this service"

    Examples:
          | username | password |
          | fail-1  | fail-1  |
          | fail-2  | fail-2  |
          | fail-3  | fail-3  |