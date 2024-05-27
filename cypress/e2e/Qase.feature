Feature: Qase application tests

        # Scenario: Login to Quase apllication
        #         Given User is on Quase Login page
        #         When User enters his credentials and clicks login button
        #         Then User shoud see Quase home page


        Scenario Outline: User is able to create a new project
                Given User is logged in on Quase application
                When User creates new project with following details
                        | projectName   | projectCode   | projectDescription   |
                        | <projectName> | <projectCode> | <projectDescription> |
                And User returns to Home Page
                Then User should be able to see new project on home page
                Then User is able to delete created project
                And User does not see the project in the table

                Examples:
                        | projectName        | projectCode | projectDescription |
                        | TestProject nn_000 | 000         | VTS 2024 Vezbe     |
