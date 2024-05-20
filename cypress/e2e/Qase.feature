Feature: Qase application tests

    Scenario: Login to Qase apllication
        Given User is on Qase Login page
        When When User enters his credentials and clicks login button
        Then User shoud see Qase Project page
