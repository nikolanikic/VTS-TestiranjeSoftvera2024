Feature: Qase application tests

    Scenario: Login to Quase apllication
        Given User is on Quase Login page
        When User enters his credentials and clicks login button
        Then User shoud see Quase home page
