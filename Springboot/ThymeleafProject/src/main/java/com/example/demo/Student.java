package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



//@Controller
//@RequestMapping("/student")
//public class Student {
//
//	
//	@GetMapping("/show/{name}")
//	public String showDetails(@PathVariable String name, Model m) 
//	{
//		m.addAttribute("message",name);
//		return "details";
//	}
//	

@RestController
@RequestMapping("/student")
public class Student {

	
	@GetMapping("/show/{name}/{age}/{gender}")
	public String showDetails(@PathVariable String name,@PathVariable int age,
			@PathVariable String gender) 
	{
		
		return name + " " + age + " " + gender;
	}
	
	

//@Controller
//@RequestMapping("/student")
//
//public class Student {
//	
//	@GetMapping("/show")
//	public String showDetails(Model m) 
//	{
//		m.addAttribute("message","I love Gaming");
//		return "details";
//	}
//	
	
	
	
	
//	@GetMapping("/show")
//	//@ResponseBody
//	public String showDetails() {
//		return "details";
//	}

}
