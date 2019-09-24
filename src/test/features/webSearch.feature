Feature: WebSearch
    in order to test
    as a tae
    well implement cucumber

    Scenario Outline: web has header
        Given I am on the search page on "<BrowserName>"
        When I search for cats
        Then I should see cats

            Scenarios:
            | BrowserName |
            | Yahoo       |
            | Google      |
