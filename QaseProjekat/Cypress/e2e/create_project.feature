Feature: Project creation functionality

  Scenario: User creates a new project
    Given I am logged in
    When I create a new project
    Then I should see the project in the project list