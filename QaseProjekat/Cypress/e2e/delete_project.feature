Feature: Project deletion functionality

  Scenario: User deletes a project
    Given I have created a project
    When I delete the project
    Then I should not see the project in the project list