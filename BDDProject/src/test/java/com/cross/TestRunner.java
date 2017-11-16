package com.cross;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"/Users/bittechconsulting/eclipse-workspace/BDDProject/cross.feature"},glue= {"com.datatable"}
//,tags= {"@web,@api"}
//,format= {"pretty","json:report/file1.json"},glue="com.pom",dryRun=true,monochrome=true,strict=true)
)


public class TestRunner {

}
