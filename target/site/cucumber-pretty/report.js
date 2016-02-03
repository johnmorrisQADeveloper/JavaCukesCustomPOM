$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/learning/cukes/stores.feature");
formatter.feature({
  "line": 1,
  "name": "Authentication",
  "description": "",
  "id": "authentication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Successfully logging in"
    },
    {
      "line": 4,
      "value": "#  Given the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"chrome\""
    },
    {
      "line": 5,
      "value": "#  When logging in as an admin"
    },
    {
      "line": 6,
      "value": "#  Then the home page navigation is available"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#Scenario: Successfully logging in"
    },
    {
      "line": 10,
      "value": "#\tGiven the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"Edge\""
    },
    {
      "line": 11,
      "value": "#\tWhen logging in as an admin with details"
    },
    {
      "line": 12,
      "value": "#\t\t| username | password |"
    },
    {
      "line": 13,
      "value": "#\t\t| admin    | admin    |"
    },
    {
      "line": 14,
      "value": "#\tThen the home page navigation is available"
    },
    {
      "line": 16,
      "value": "#  Scenario: logging in with user name \u0026 password"
    },
    {
      "line": 17,
      "value": "#    Given Given the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"Chrome\""
    },
    {
      "line": 18,
      "value": "#    And I enter username as \"admin\" in symbiote"
    },
    {
      "line": 19,
      "value": "#    When I enter password as \"admin\" in symbiote"
    },
    {
      "line": 20,
      "value": "#    Then I click on loginbutton in symbiote"
    },
    {
      "line": 21,
      "value": "#"
    }
  ],
  "line": 22,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 27,
      "id": "authentication;successfully-logging-in-via-browsers;;1"
    },
    {
      "cells": [
        "chrome"
      ],
      "line": 28,
      "id": "authentication;successfully-logging-in-via-browsers;;2"
    },
    {
      "cells": [
        "firefox"
      ],
      "line": 29,
      "id": "authentication;successfully-logging-in-via-browsers;;3"
    },
    {
      "cells": [
        "phantomjs"
      ],
      "line": 30,
      "id": "authentication;successfully-logging-in-via-browsers;;4"
    },
    {
      "cells": [
        "IE"
      ],
      "line": 31,
      "id": "authentication;successfully-logging-in-via-browsers;;5"
    },
    {
      "cells": [
        "edge"
      ],
      "line": 32,
      "id": "authentication;successfully-logging-in-via-browsers;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://symbiote-app.herokuapp.com",
      "offset": 24
    },
    {
      "val": "chrome",
      "offset": 64
    }
  ],
  "location": "LoginSteps.the_symbiote_home_page_something_on_something(String,String)"
});
formatter.result({
  "duration": 5176180720,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logging_in_as_an_admin()"
});
formatter.result({
  "duration": 2278095473,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_home_page_navigation_is_available()"
});
formatter.result({
  "duration": 897133095,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://symbiote-app.herokuapp.com",
      "offset": 24
    },
    {
      "val": "firefox",
      "offset": 64
    }
  ],
  "location": "LoginSteps.the_symbiote_home_page_something_on_something(String,String)"
});
formatter.result({
  "duration": 5384819501,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logging_in_as_an_admin()"
});
formatter.result({
  "duration": 2777181575,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_home_page_navigation_is_available()"
});
formatter.result({
  "duration": 528772149,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"phantomjs\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://symbiote-app.herokuapp.com",
      "offset": 24
    },
    {
      "val": "phantomjs",
      "offset": 64
    }
  ],
  "location": "LoginSteps.the_symbiote_home_page_something_on_something(String,String)"
});
formatter.result({
  "duration": 4982701256,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logging_in_as_an_admin()"
});
formatter.result({
  "duration": 2017196111,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_home_page_navigation_is_available()"
});
formatter.result({
  "duration": 1208322487,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"IE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://symbiote-app.herokuapp.com",
      "offset": 24
    },
    {
      "val": "IE",
      "offset": 64
    }
  ],
  "location": "LoginSteps.the_symbiote_home_page_something_on_something(String,String)"
});
formatter.result({
  "duration": 4011594698,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logging_in_as_an_admin()"
});
formatter.result({
  "duration": 2724434424,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_home_page_navigation_is_available()"
});
formatter.result({
  "duration": 997317088,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Successfully logging in via Browsers",
  "description": "",
  "id": "authentication;successfully-logging-in-via-browsers;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "the Symbiote home page \"https://symbiote-app.herokuapp.com\" on \"edge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "logging in as an admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the home page navigation is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://symbiote-app.herokuapp.com",
      "offset": 24
    },
    {
      "val": "edge",
      "offset": 64
    }
  ],
  "location": "LoginSteps.the_symbiote_home_page_something_on_something(String,String)"
});
formatter.result({
  "duration": 1529470051,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logging_in_as_an_admin()"
});
formatter.result({
  "duration": 457634148,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_home_page_navigation_is_available()"
});
formatter.result({
  "duration": 1108114236,
  "status": "passed"
});
});