Feature: Qase application tests

    Scenario: Login to Qase apllication
        Given User is on Qase Login page
        When User enters his credentials and clicks login button
        Then User should see Qase home page

    Scenario: User is able to create a new project
                Given User is logged in on Qase application
                When User creates new project
                And User returns to Home Page
                Then User should be able to see new project on home page
                Then User is able to delete created project
                And User does not see the project in the table 