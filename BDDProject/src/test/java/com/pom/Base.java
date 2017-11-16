package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Base 
{
	WebDriver driver;
	public void openBrowser()
	{
		System.setProperty("webdriver.gecko.driver", "/Users/bittechconsulting/Downloads/geckodriver");
		driver=new FirefoxDriver();
	}
	public HomePage nevigateUrl()
	{
		
		driver.get("http://www.facebook.com");
		return new HomePage(driver);
	}

}
