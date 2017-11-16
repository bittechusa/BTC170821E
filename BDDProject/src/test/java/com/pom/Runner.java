package com.pom;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"/Users/bittechconsulting/eclipse-workspace/BDDProject/cross.feature"}
//		,format= {"pretty","html:target/report1","json:target/report2"}
//		,tags= {"@web,@backend"}
		,glue= {"com.cross"}
		)
public class Runner extends AbstractTestNGCucumberTests{

}
