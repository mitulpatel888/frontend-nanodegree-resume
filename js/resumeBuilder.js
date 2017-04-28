/*
This is empty on purpose! Your code to build the resume will go here.
var name = "Mitul Patel";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
*/


var bio =  {
 	"name": "Mitul",
 	"role": "Web Developer",
 	"contact info": "XYZ@example.com",
 	"skills": ["HTML", "CSS", "JavaScript"]
 };
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
bio.city = "Mumbai";
bio.email = "test@example.com"; 
bio["currentCity"] = "Ahmedabad"; 
bio.Pic = "images/fry.jpg"

/* $("#main").append(bio.city);
$("#main").append(bio["currentCity"]); */

var work = {
	
};
	work.position ="IT Analyst";
	work.Employer= "Microsoft";
	work.yearsWorked = 3;
	work.City = "New York City";
var education = {
	
};
	education["Name"] ="Guj. Tech. University";
	education["Years"] = 4;
	education["City"]= "Ahmedabad";
/* $("#main").append(work["position"]);
$("#main").append(education.Name); */
var project = {
	"projects": [
		{
			"title":"Online Resume",
			"year": 2017, 
			"type": "Online"
		},
		{
			"title":"Sample2",
			"year":"2017",
			"type":"online"
		}
	]
}
var education = {
	"schools": [
		{
			"name": "GTU",
			"city": "Ahmedabad",
			"Degree": "ECE",
			"Graduation": 2014
		},
		{
			"name": "A.G High School",
			"city": "Ahmedabad",
			"Degree": "High School",
			"Graduation": 2010
		}
	],
	"onlineCourse": {
		"Name": "Udacity",
		"Course": "Fron-End Web Developer",
		"Graduation Year": 2017
	}
}
if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	
}

