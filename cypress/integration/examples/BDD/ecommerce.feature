Feature: End to end ecommerce shop Validation

  Shop Regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify ThankYou message

  @Smoke
  Scenario: Filling the form to shop
    Given I open ECommerce page
    When I fill the form details
      | name | gender |
      | Luke | Male   |
    Then validate the forms behaviour
