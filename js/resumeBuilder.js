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
 	"name": "Mitul Patel",
 	"role": "Web Developer",
 	"contact info": "XYZ@example.com",
 	"skills": ["HTML", "CSS", "JavaScript"],
	"github":"https://github.com/mitulpatel888/frontend-nanodegree-resume"
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
	"jobs": [
	{
		"title" :"IT Analyst",
		"employer": "Company 1",
		"yearsWorked": 3,
		"location": "New York City",
		"dates": "Jan-10 to Dec-13",
		"description":"Analyst"
	},	
	{
		"title" :"Web Developer",
		"employer": "Microsoft",
		"yearsWorked": 3,
		"location": "New York City",
		"dates": "Jan-14 to Dec-16",
		"description":"Developer"
	}

	]
}
function displayWork(){
	
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data",work.jobs[job].dates);
		$(."work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	}
	
}
	/* work.position ="IT Analyst";
	work.Employer= "Microsoft";
	work.yearsWorked = 3;
	work.City = "New York City"; */

/* $("#main").append(work["position"]);
$("#main").append(education.Name); */

var projects = {
	"projects": [
		{
			"title":"Online Resume",
			"dates": "January-2017 to Match-2017", 
			"description" : "Udacity FEND",
			"type": "Online",
			"images": "http://2.bp.blogspot.com/-ny_Rxx2XajM/UJATUm9h8mI/AAAAAAAABuI/DXM0WkmwwCg/s1600/flat_cv.png"
		},
		{
			"title":"Sample2",
			"dates": "January-2017 to Match-2017",
			"description" : "Test Sample",
			"type":"online",
			"image": "C:\Users\MPATEL02\Documents\Udacity\Portfolio\Online Resume\frontend-nanodegree-resume\images\fry.jpeg"
		}
	]
}
function displayProject(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				
			}
		}
	}
	
}

var education = {
	"schools": [
		{
			"name": "GTU",
			"location": "Ahmedabad",
			"degree": "B.E",
			"major": "ECE",
			"graduation": 2014,
			"dates":"July2010 to July-2014"
			
		},
		{
			"name": "A.G High School",
			"city": "Ahmedabad",
			"degree": "High School",
			"graduation": 2010
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

/* work.jobs.forEach(function(job)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data",work.jobs[job].dates);
		$(."work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}); */

$(document).click(function(loc) {
  var x= loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
  });
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase + name[0].toLowerCase();
	
	return name[0]+" "+name[1];
}
displayProject();
displayWork();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap); 


