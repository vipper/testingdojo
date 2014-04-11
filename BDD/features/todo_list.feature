Feature: ToDo List

Scenario: Add a to do item
Given I have to "go biking"
When I add this to the list
Then "go biking" will be shown as a to do item

Scenario: Mark a to do item as done
Given I have "go biking" and "do the dishes" as to do items
When I mark "go biking" as done
Then "go biking" will shown as done 
And "do the dishes" will not.

