Feature: Hello World

@dev
Scenario: Angular greets the user by the BA name
Given my name is "Neil"
When I tell angular my name
Then angular says "Hello Neil!"