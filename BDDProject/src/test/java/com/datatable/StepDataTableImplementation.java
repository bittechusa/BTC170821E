package com.datatable;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepDataTableImplementation {
	
	@Before
	public void start()
	{
		System.out.println("before");
	}
	@After
	public void end()
	{
		System.out.println("end");
	}
	@Before("@web")
	public void start1()
	{
		System.out.println("before1");
	}
	@After("@web")
	public void end1()
	{
		System.out.println("end1");
	}
	@Given("^open browser$")
	public void open_browser(DataTable arg1) throws Throwable {
	    List<List<String>> browserName=arg1.raw();
	    String browser=browserName.get(1).get(0);
	    if(browser.equals("chrome"))
	    {
	    	System.out.println("chrome");
	    }
	    else if(browser.equals("firefox"))
	    {
	    	
	    	System.out.println("firefox");
	    }
	}

	@When("^type userid and password$")
	public void type_userid_and_password(DataTable arg1) throws Throwable {
	    List<List<String>> datas=arg1.raw();
	    //user1
	    String x=datas.get(0).get(0);
	    String y=datas.get(0).get(1);
	    System.out.println(x+"+"+y);
	    //user2
	    String a=datas.get(1).get(0);
	    String b=datas.get(1).get(1);
	    System.out.println(a+"+"+b);
	}
	
}
