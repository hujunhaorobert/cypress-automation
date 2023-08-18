Feature: Login page
    Feature Login page will work depending on the user credentials.

    Background: User visit saucelabs page
        Given A web browser is at the saucelabs login page

    Scenario: Success Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory

    Scenario: Blocked Login
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
        
    Scenario Outline: Test for "<scenarioName>"
        When A user provides incorrect credentials username:"<username>",password:"<password>" and clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
        Then User close the error message alert
        Then The error message "Epic sadface: Username and password do not match any user in this service" is NOT displayed
        Then All red close ICONs are gone
        Examples:
            | scenarioName               | username      | password     |
            | Incorrect Username Login   | testName      | secret_sauce |
            | Incorrect Password Login   | standard_user | testPassword |
        
    # Scenario: Incorrect Username Login
    #     When A user provides incorrect credentials, and clicks on the login button
    #         | username | password     |
    #         | testName | secret_sauce |
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    #     Then User close the error message alert
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is NOT displayed
    #     Then All red close ICONs are gone

    # Scenario: Incorrect Password Login
    #     When A user provides incorrect credentials, and clicks on the login button
    #         | username      | password     |
    #         | standard_user | testPassword |
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    #     Then User close the error message alert
    #     Then The error message "Epic sadface: Username and password do not match any user in this service" is NOT displayed
    #     Then All red close ICONs are gone