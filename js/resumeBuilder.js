// 3.10.15 & 3.10.16:  add google map & encapsulate all
var bio = {
	name: "Shtate Hur-Nam",
	role: "Master of Scrum",
	contacts: {
		mobile: "555-544-5454",
		email: "you@me.com",
		github: "SankYou",
		twitter: "@NoTwit4U",
		blog: "BewareTheBlog",
		location: "Mina, NV"
	},
	biopic: "images/me_symbol.jpg",
	welcomeMsg: "Hi there!",
	skills: ["Chewing Gum", "Pausing", "Staring", "Forgetting Things"],
	display: function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (skill = 0; skill < bio.skills.length; skill++) {
				$("#skills").append(HTMLskills.replace("%data%",
					bio.skills[skill]));
			}
		}
	}
};
bio.display();

var work = {
	jobs: [{
		employer: "Me",
		title: "Boss",
		location: "La Grange, TX",
		dates: "In Progress",
		description: "insured group hit stretch goals"
	}, {
		employer: "You",
		title: "Worker",
		location: "Nome, AK",
		dates: "1/1/00-12/31/17",
		description: "did what they wanted, but didn't ask for"
	}, ],
	display: function() {
		for (job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);

			$(".work-entry:last").append(
				HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
				HTMLworkTitle.replace("%data%", work.jobs[job].title) +
				HTMLworkDates.replace("%data%", work.jobs[job].dates) +
				HTMLworkLocation.replace("%data%", work.jobs[job].location) +
				HTMLworkDescription.replace("%data%", work.jobs[job].description)
			);
		}
	}
};
work.display();

var projects = {
	projects: [{
		title: "Project X",
		dates: "1/1/10-2/1/10",
		description: "Bunch of stuff was done on time and under budget.",
		images: ["images/projectx1.jpg", "images/projectx2.jpg"]
	}, {
		title: "Project Y",
		dates: "3/1/10-6/1/10",
		description: "More stuff was done on time and under budget.",
		images: ["images/projecty1.jpg"]
	}, {
		title: "Project Z",
		dates: "7/1/10-7/2/10",
		description: "Terminated other projects due to budget cuts.",
		images: []
	}],
	display: function() {
		for (project = 0; project < projects.projects.length; project++) {
			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(
				HTMLprojectTitle.replace("%data%", projects.projects[project].title) +
				HTMLprojectDates.replace("%data%", projects.projects[project].dates) +
				HTMLprojectDescription.replace("%data%", projects.projects[project].description)
			);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
				}
			}
		}
	}
};
projects.display();

var education = {
	schools: [{
		name: "Kmart College",
		degree: "BS in BS",
		dates: "2004",
		location: "Belize City, Belize",
		majors: ["Pain", "Waste"],
		url: "https://youtu.be/WXmdVEkJKGg"
	}, {
		name: "Hogwarts",
		degree: "n/a",
		dates: "2000",
		location: "Highland, Scotland",
		majors: ["Wizardry"],
		url: "https://youtu.be/WXmdVEkJKGg"
	}, {
		name: "Hard Knocks Academy",
		degree: "n/a",
		dates: "1996",
		location: "Las Vegas Valley, NV",
		majors: ["Miners"],
		url: "https://youtu.be/WXmdVEkJKGg"
	}],
	onlineClasses: [{
		title: "Clicking URLs",
		school: "Trump University",
		dates: "2004",
		url: "http://youtu.be/WXmdVEkJKGg"
	}, {
		title: "Reviewing Sites",
		school: "Trump University",
		dates: "2004",
		url: "http://youtu.be/iRusbYIyRNI"
	}],
	display: function() {
		for (school = 0; school < education.schools.length; school++) {
			$("#education").append(HTMLschoolStart);

			var urlTemp = HTMLschoolName.replace("%data%",
				education.schools[school].name);
			if (education.schools[school].url.length > 0) {
				urlTemp = urlTemp.replace("#", education.schools[school].url);
			}
			$(".education-entry:last").append(urlTemp +
				HTMLschoolDegree.replace("%data%",
					education.schools[school].degree));

			var majorString = "";
			for (major = 0; major < education.schools[school].majors.length; major++) {
				if (majorString.length > 0) {
					majorString = majorString + ", ";
				}
				majorString = majorString +
					education.schools[school].majors[major];
			}
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",
				majorString));

			$(".education-entry:last").append(
				HTMLschoolDates.replace("%data%", education.schools[school].dates + "&nbsp;") +
				HTMLschoolLocation.replace("%data%", education.schools[school].location)
			);
		}

		if (education.onlineClasses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			for (course = 0; course < education.onlineClasses.length; course++) {
				$(".education-entry:last").append(
					HTMLonlineTitle.replace("%data%",
						education.onlineClasses[course].title) +
					HTMLonlineSchool.replace("%data%",
						education.onlineClasses[course].school) +
					HTMLonlineDates.replace("%data%",
						education.onlineClasses[course].dates)
				);

				if (education.onlineClasses[course].url.length > 0) {
					urlTemp = HTMLonlineURL.replace("%data%",
						education.onlineClasses[course].url);
					$(".education-entry:last").append(urlTemp.replace("#",
						education.onlineClasses[course].url));
				}
			}
		}
	}
};
education.display();

$("#mapDiv").append(googleMap); // what a pain!
