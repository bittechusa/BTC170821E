//package com.pom;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import com.pom.Base;
//import com.pom.HomePage;
//import com.pom.LogInPage;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class Stepdenination 
//{
//	Base b;
//	HomePage hp;
//	LogInPage lp;
//	
//	@Before("@web")
//	public void start1()
//	{
//		System.out.println("webstart");
//	}
//	@After("@web")
//	public void end1()
//	{
//		System.out.println("webend");
//	}
//	@Before
//	public void start()
//	{
//		b=new Base();
//		b.openBrowser();
//	}
//	@After
//	public void end()
//	{
//		System.out.println("quit");
//	}
//	@Given("^nevigate to url$")
//	public void nevigate_to_url() throws Throwable {
//		
//		hp=b.nevigateUrl();
//	}
//
//	@When("^type userId$")
//	public void type_userId() throws Throwable {
//	    //driver.findElement(By.id("email")).sendKeys("userid");
//	}
//
//	@When("^type password$")
//	public void type_password() throws Throwable {
//		//driver.findElement(By.id("pass")).sendKeys("passwoefr");  
//	}
//
//	@When("^click login button$")
//	public void click_login_button() throws Throwable {
//		lp=hp.clickButton();
//	}
//
//	@Then("^used should be in login page$")
//	public void used_should_be_in_login_page() throws Throwable {
////	boolean result=	driver.findElement(By.id("logout")).isDisplayed();
////	if(result)
////	{
////		System.out.println("i am in profile page");
////}
//	
//	}
//
//	@Then("^user should not be in login page$")
//	public void user_should_not_be_in_login_page() throws Throwable {
//	    System.out.println("not be in profile page");
//	}
//
//	
//
//	@When("^type userId \"([^\"]*)\"$")
//	public void type_userId(String arg1) throws Throwable {
//		hp.typeUserId(arg1);
//	}
//
//	@When("^type password \"([^\"]*)\"$")
//	public void type_password(String arg1) throws Throwable {
//		hp.typePass(arg1);
//	}
//
//	
//
//	
//
//
//
//
//
//
//}
//
//
