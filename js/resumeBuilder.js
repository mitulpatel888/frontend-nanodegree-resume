/*
This is empty on purpose! Your code to build the resume will go here.
var name = "Mitul Patel";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
*/
var skills = ["HTML","CSS"];
var bio = {
	"name":"Mitul",
	"role":"Web Developer",
	"contact info":"XYZ@example.com", 
	"Skills": skills,
};
$("#main").append(bio.name);
