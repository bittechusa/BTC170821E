Feature: login validation

Background:
Given nevigate to url

@web
Scenario:

When type userId
And type password
And click login button
Then used should be in login page


@api
Scenario Outline:

When type userId <email>
And type password <pass>
And click login button
Then user should not be in login page

Examples:
|email|pass|
|"user1"|"1233"|
|"user2"|"546"|