$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/bittechconsulting/eclipse-workspace/BDDProject/log.feature");
formatter.feature({
  "line": 1,
  "name": "login validation",
  "description": "",
  "id": "login-validation",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "nevigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepCrossBrowsing.nevigate_to_url()"
});
formatter.result({
  "duration": 166268770,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-validation;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "type userId",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "type password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "used should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepCrossBrowsing.type_userId()"
});
formatter.result({
  "duration": 45209,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.type_password()"
});
formatter.result({
  "duration": 32447,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.click_login_button()"
});
formatter.result({
  "duration": 36663,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.used_should_be_in_login_page()"
});
formatter.result({
  "duration": 32087,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-validation;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@api"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "type userId \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "type password \u003cpass\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be in login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-validation;;",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ],
      "line": 24,
      "id": "login-validation;;;1"
    },
    {
      "cells": [
        "\"user1\"",
        "\"1233\""
      ],
      "line": 25,
      "id": "login-validation;;;2"
    },
    {
      "cells": [
        "\"user2\"",
        "\"546\""
      ],
      "line": 26,
      "id": "login-validation;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "nevigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepCrossBrowsing.nevigate_to_url()"
});
formatter.result({
  "duration": 120525,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-validation;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@api"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "type userId \"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "type password \"1233\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be in login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 13
    }
  ],
  "location": "StepCrossBrowsing.type_userId(String)"
});
formatter.result({
  "duration": 2046825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1233",
      "offset": 15
    }
  ],
  "location": "StepCrossBrowsing.type_password(String)"
});
formatter.result({
  "duration": 65513,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.click_login_button()"
});
formatter.result({
  "duration": 21344,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.user_should_not_be_in_login_page()"
});
formatter.result({
  "duration": 33913,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "nevigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepCrossBrowsing.nevigate_to_url()"
});
formatter.result({
  "duration": 109006,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-validation;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@api"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "type userId \"user2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "type password \"546\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be in login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 13
    }
  ],
  "location": "StepCrossBrowsing.type_userId(String)"
});
formatter.result({
  "duration": 63683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "546",
      "offset": 15
    }
  ],
  "location": "StepCrossBrowsing.type_password(String)"
});
formatter.result({
  "duration": 52592,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.click_login_button()"
});
formatter.result({
  "duration": 22066,
  "status": "passed"
});
formatter.match({
  "location": "StepCrossBrowsing.user_should_not_be_in_login_page()"
});
formatter.result({
  "duration": 19581,
  "status": "passed"
});
});