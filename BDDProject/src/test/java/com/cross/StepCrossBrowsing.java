package com.cross;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepCrossBrowsing{
	
	
	
	@Given("^nevigate to url$")
	public void nevigate_to_url() throws Throwable {
	   System.out.println("test1"); 
	}

	@When("^type userId$")
	public void type_userId() throws Throwable {
	    
	}

	@When("^type password$")
	public void type_password() throws Throwable {
	    
	}

	@When("^click login button$")
	public void click_login_button() throws Throwable {
	   
	}

	@Then("^used should be in login page$")
	public void used_should_be_in_login_page() throws Throwable {
	    
	}

	@When("^type userId \"([^\"]*)\"$")
	public void type_userId(String arg1) throws Throwable {
	    
	}

	@When("^type password \"([^\"]*)\"$")
	public void type_password(String arg1) throws Throwable {
	   
	}

	@Then("^user should not be in login page$")
	public void user_should_not_be_in_login_page() throws Throwable {
	    

	}


}