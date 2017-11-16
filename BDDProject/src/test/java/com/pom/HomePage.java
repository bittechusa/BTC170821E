package com.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage 
{
	WebDriver driver;
	public HomePage(WebDriver dr)
	{
		driver=dr;
	}
	public void typeUserId(String arg1)
	{
		driver.findElement(By.id("email")).sendKeys(arg1);
	}
	public void typePass(String arg1)
	{
		driver.findElement(By.id("pass")).sendKeys(arg1);
	}
	public LogInPage clickButton()
	{
		driver.findElement(By.id("u_0_3")).click(); 
		return new LogInPage();
	}

}
