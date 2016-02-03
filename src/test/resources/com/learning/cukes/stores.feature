Feature: Authentication 

#Scenario: Successfully logging in
#  Given the Symbiote home page "https://symbiote-app.herokuapp.com" on "chrome"
#  When logging in as an admin
#  Then the home page navigation is available
#

#Scenario: Successfully logging in 
#	Given the Symbiote home page "https://symbiote-app.herokuapp.com" on "Edge" 
#	When logging in as an admin with details 
#		| username | password |
#		| admin    | admin    |
#	Then the home page navigation is available 

#  Scenario: logging in with user name & password
#    Given Given the Symbiote home page "https://symbiote-app.herokuapp.com" on "Chrome"
#    And I enter username as "admin" in symbiote
#    When I enter password as "admin" in symbiote
#    Then I click on loginbutton in symbiote
#
Scenario Outline: Successfully logging in via Browsers 
	Given the Symbiote home page "https://symbiote-app.herokuapp.com" on "<browser>" 
	And logging in as an admin 
	Then the home page navigation is available 
	Examples: 
		| browser   |
		| chrome    |
		| firefox   |
		| phantomjs |
		| IE 	    |
		| edge		|
		
