Feature: Qase application tests

        # Scenario: Login to Quase apllication
        #         Given User is on Quase Login page
        #         When User enters his credentials and clicks login button
        #         Then User shoud see Quase home page


        Scenario: User is able to create a new project
                Given User is logged in on Quase application
                When User creates new project
                And User returns to Home Page
                Then User should be able to see new project on home page
                When the User deletes the project
                Then the project should no longer appear in the table

