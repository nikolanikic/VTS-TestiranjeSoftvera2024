Feature: Qase application tests

        # Scenario: Login to Quase apllication
        #         Given User is on Quase Login page
        #         When User enters his credentials and clicks login button
        #         Then User shoud see Quase home page


        # Scenario Outline: User is able to create a new project and to delete it
        #         Given User is logged in on Quase application
        #         When User creates new project with following details
        #                 | projectName   | projectCode   | projectDescription   |
        #                 | <projectName> | <projectCode> | <projectDescription> |
        #         And User returns to Home Page
        #         Then User should be able to see new project on home page
        #         Then User is able to delete created project
        #         And User does not see the project in the table

        #         Examples:
        #                 | projectName | projectCode | projectDescription     |
        #                 | VTS2024     | NPC001      | This is test project 1 |
        #                 | VTS2025     | NPC002      | This is test project 2 |
        #                 | VTS2026     | NPC003      | This is test project 3 |

        Scenario: User is able to create a new project, update and delete it
                Given User is logged in on Quase application
                When User creates new project with following details
                        | projectName | projectCode | projectDescription  |
                        | VTS2027     | NPC004      | Change logo project |
                And User returns to Home Page
                Then User should be able to see new project on home page

                When User wants to update project
                And User change the logo
                Then update shoul be successfull

                Then User is able to delete created project
                And User does not see the project in the table

