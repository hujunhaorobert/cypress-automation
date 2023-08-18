Feature: Qantas Home Page
    Check Qantas Home page integrity.

    Background: User visit Qantas home page
        Given User visit Qantas home page

    Scenario: User could see page header items contains Qantas all services
        Then User see 'FLIGHT' is highlighted by underline
        Then User see 'HOTELS', 'HOLIDAYS', 'SHOPPING', 'WINE', 'MONEY', 'INSURANCE', 'FREQUENT FLYER' without underline
        Then User see Qantas LOGO and 'Oneworld' ICON
        Then User mouse hover to Qantas menu items to browser the avaliable services
            | menuItem              |
            | Travel guides         |
            | Flight deals          |
            | Plan                  |
            | Book                  |
            | Fly                   |
            | Frequent Flyer        |
            | Qantas for Business   |
            | Help                  |
            | Shopping Cart Icon    |
        # Then A submenu page displays all continents, Travel Insider, Where Can I go?, Travel Inspiration
        Then User mouse hover to 'Travel guides' and click the menu
        Then User see page jump to travel guides
