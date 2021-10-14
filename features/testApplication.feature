Feature: Validation of Product details on Payments page after Registering on the website and Adding a product to the cart

Scenario: Registering on the website
    Given I'm on the landing page   
    When I click on signIn button
    When I provide personal details to create a new account from <testdatapath>
    Then Correct name and surname are displayed on My Account page

     Examples:
        | testdatapath | 
        | testData/registrationTestData.json  | 

Scenario: Adding a product to the cart
    When I select a product for adding to the cart
    When I proceeded to the checkout page and continue till Payments page
    Then Correct product details are shown


   

   
