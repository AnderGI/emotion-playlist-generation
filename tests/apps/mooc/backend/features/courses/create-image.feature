Feature: Create a new image
  In order to emotions related from images 
  As a user with admin permissions
  I need to create new images

  Scenario: A valid non existing course
    Given I send a PUT request to "/images/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "name": "Super Image"
    }
    """
    Then the response status code should be 201
    And the response should be empty
