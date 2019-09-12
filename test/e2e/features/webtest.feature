Feature: Webtest
   in order to test webdriverio
   as a tae
   well implement cucumber

    Scenario: web has header
        Given I am on the search page
        When I search for cats
        Then I should see cats content
