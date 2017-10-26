let modules = [
	new Module("6CCS3PRJ", "Individual Project", 30, false, false, false, false),
	new Module("6CCS3AMS", "Agents and Multi-Agent Systems", 15, false, false, false, true),
	new Module("6CCS3CFL", "Compiler and Formal Languages", 15, true, false, true, false),
	new Module("6CCS3COV", "Computer Vision", 15, false, false, false, true),
	new Module("6CCS3CSL", "Computer Science Logic", 15, false, false, false, false),
	new Module("6CCS3HCI", "Human-Computer Interaction", 15, false, false, true, false),
	new Module("6CCS3VER", "Formal Verification", 15, false, false, true, false),
	new Module("6CCS3WSN", "Algorithms for the World Wide Web and Social Networks", 15, false, false, true, false),
	new Module("6CCS3SMT", "Software Measurement and Testing",  15, false, false, true, false),
	new Module("6CCS3GRS", "Computer Graphics Systems",  15, false, true, false, false),
	new Module("6CCS3PAL", "Parallel Algorithms", 15, true, true, true, false),
	new Module("6CCS3AIN", "Artificial Intelligence", 15, false, false, false, true),
	new Module("6CCS3CIS", "Cryptography and Information Security", 15, false, false, false, true),
	new Module("6CCS3AIP", "Artificial Intelligence Planning", 15, false, false, false, true),
	new Module("6CCS3DSM", "Distributed Systems",15,false,false,true,false),
	new Module("6CCS3COM", "Computational Models",15,false,false,false,false),
	new Module("6CCS3SAD", "Software Architecture and Design",15,false,true,false,false),
	new Module("6CCS3SIA", "Software Engineering of Internet Applications",15,false,true,false,false),
	new Module("6CCS3NSE", "Network Security",15,false,true,false,false),
	new Module("6CCS3OME", "Optimisation Methods",15,false,false,false,true),
	new Module("6CCS3PRE", "Pattern Recognition",15,false,false,false,true),
	new Module("6CCS3TSP", "Text Searching and Processing",15,false,false,false,false),
	new Module("6SSMN325", "Business Management",15,false,false,false,false),
	new Module("6SSMN339", "Human Resource Management",15,false,false,false,false)
];

let management = false;

function printSelectedModules()
{
	modules.forEach(function(module)
	{
		if(module.selected == true)
		{
			console.log(module.moduleCode + ": " + module.moduleName);
		}
	});
}

function calculateSummary()
{
	//Select Modules and find degree title
	let total = 0;
	let pccTotal = 0;
	let isTotal = 0;
	let seTotal = 0;
	let aiTotal = 0;
	modules.forEach(function(module)
	{
		if(module.selected == true)
		{
			total += module.creditValue;
			if(module.isPcc)
			{
				pccTotal ++;
			}
			if(module.isIs)
			{
				isTotal ++;
			}
			if(module.isSe)
			{
				seTotal ++;
			}
			if(module.isAi)
			{
				aiTotal ++;
			}
		}
	});

	//Calculate Degree titles
	let baseDegreeTitle = "";

	if($("#courseSelection").val() == "cs")
	{
		baseDegreeTitle = "BSc Computer Science";
	}
	else if($("#courseSelection").val() == "cswm")
	{
		baseDegreeTitle = "BSc Computer Science with Management";
	}

	let degreeTitles = [baseDegreeTitle];

	if(pccTotal >= 4)
	{
		degreeTitles.append(baseDegreeTitle + " (Performance Critical Computing)");
	}
	if(isTotal >= 4)
	{
		degreeTitles.append(baseDegreeTitle + " (Internet Systems)");
	}
	if(seTotal >= 4)
	{
		degreeTitles.append(baseDegreeTitle + " (Software Engineering)");
	}
	if(aiTotal >= 4)
	{
		degreeTitles.append(baseDegreeTitle + " (Artificial Intelligence)");
	}
Security

	//Calculate whole text
	let summaryText = "Credit Value: " + total + "/120\n\nPossible Degree Titles:\n\n";
	for(degreeTitle of degreeTitles)
	{
		summaryText += degreeTitle + "\n\n";
	}

	$("#sidebar_footer").text(summaryText);
}

function setModuleAddListeners()
{
	modules.forEach(function(module)
	{
		if(module.locked == false){
			$("#" + module.moduleCode).click(function()
			{
				//console.log("Toggled " + module.moduleCode);
				//If clicked mark the module as selected
				toggleModule(module);
				//printSelectedModules();
				calculateSummary();
			});
		}
	});
}

function setModuleDescriptionListeners()
{
	modules.forEach(function(module)
	{
		$("#" + module.moduleCode + "> td.expand").click(function(e)
		{
			e.stopPropagation();
			console.log("Toggled " + module.moduleCode + " Description");
			//If clicked toggle description and button
			if($("#" + module.moduleCode + "> td.expand").text() == "+")
			{
				$("#" + module.moduleCode + "> td.expand").text("-");
				$("#" + module.moduleCode + "_description").removeClass("hidden");
			}else
			{
				$("#" + module.moduleCode + "> td.expand").text("+");
				$("#" + module.moduleCode + "_description").addClass("hidden");
			}
		});
	});
}

function toggleModule(module)
{
	$("#" + module.moduleCode).toggleClass("selected");
	$("#" + module.moduleCode + "_description").toggleClass("selected");
	toggleModuleInSidebar(module);
	module.selected = !module.selected;
}

function selectModule(module)
{
	$("#" + module.moduleCode).addClass("selected");
	$("#" + module.moduleCode + "_description").addClass("selected");
	if(!module.selected){
		toggleModuleInSidebar(module);
	}
	module.selected = true;
}

function lockModule(module)
{
	$("#" + module.moduleCode).addClass("locked");
	$("#" + module.moduleCode + "_description").addClass("locked");
	//toggleModuleInSidebar(module);
	module.selected = true;
	module.locked = true;
}

function resetAllModules()
{
	modules.forEach(function(module)
	{
		$("#" + module.moduleCode).removeClass("selected");
		$("#" + module.moduleCode + "_description").removeClass("selected");
		$("#" + module.moduleCode).removeClass("locked");
		$("#" + module.moduleCode + "_description").removeClass("locked");
		$("#" + module.moduleCode).click(null);
		if(module.selected)
		{
			toggleModuleInSidebar(module);
		}

		module.selected = false;
		module.locked = false;
	});
}

function toggleModuleInSidebar(module)
{
	if($("#" + module.moduleCode + "_sidebar").length)
	{
		$("#" + module.moduleCode + "_sidebar").remove();
	}else
	{
		console.log("added to sidebar")
		var moduleElement = $("<tr id=\"" + module.moduleCode +"_sidebar\"><th>" + module.moduleCode + " - " + module.moduleName + "</th></tr>");
		$("#sidebar_modules").append(moduleElement);
	}
}

function lockAndSelectModules(selectedModules, lockedModules)
{
	selectedModules.forEach(function(moduleCode)
	{
		console.log("Selecting Module " + moduleCode);
		module = modules.find(function(element)
		{
			return element.moduleCode == moduleCode;
		});
		selectModule(module);
		module.locked = true;
		module.selected = true;
	});

	lockedModules.forEach(function(moduleCode)
	{
		console.log("Locking Module " + moduleCode);
		module = modules.find(function(element)
		{
			return element.moduleCode == moduleCode;
		});

		lockModule(module);
		module.selected = false;
		module.locked = true;
	});
}

$(document).ready(function()
{
	console.log("Ready!");
	//Check for course selection
	setModuleDescriptionListeners();
	$("#courseSelection").on("change", function()
	{
		console.log($("#courseSelection").val());
		resetAllModules();

		if($("#courseSelection").val() == "cs")
		{
			let selectedModules = ["6CCS3PRJ"];
			let lockedModules = ["6SSMN325", "6SSMN339"];

			lockAndSelectModules(selectedModules, lockedModules);

		}else if($("#courseSelection").val() == "cswm")
		{
			let selectedModules = ["6CCS3PRJ", "6SSMN325", "6SSMN339"];
			let lockedModules = [];

			lockAndSelectModules(selectedModules, lockedModules);
		}

		setModuleAddListeners();
	})
})
