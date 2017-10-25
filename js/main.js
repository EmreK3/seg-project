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

function calculateTotalCredits()
{
	let total = 0;
	modules.forEach(function(module)
	{
		if(module.selected == true)
		{
			total += module.creditValue;
		}
	});

	return total;
}

function setModuleListeners()
{
	modules.forEach(function(module)
	{
		if(module.locked == false){
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

			$("#" + module.moduleCode).click(function()
			{
				//console.log("Toggled " + module.moduleCode);
				//If clicked mark the module as selected
				toggleModule(module);
				//printSelectedModules();
			});
		}
	});

}

function toggleModule(module)
{
	$("#" + module.moduleCode).toggleClass("selected");
	$("#" + module.moduleCode + "_description").toggleClass("selected");
	module.selected = !module.selected;
}

function lockModule(module)
{
	$("#" + module.moduleCode).addClass("locked");
	$("#" + module.moduleCode + "_description").addClass("locked");
	module.selected = !module.selected;
}

function resetAllModules()
{
	modules.forEach(function(module)
	{
		$("#" + module.moduleCode).removeClass("selected");
		$("#" + module.moduleCode + "_description").removeClass("selected");
		$("#" + module.moduleCode).removeClass("locked");
		$("#" + module.moduleCode + "_description").removeClass("locked");
		module.selected = false;
		module.locked = false;
	});
}

function lockAndSelectModules(selectedModules, lockedModules)
{
	selectedModules.forEach(function(moduleCode)
	{
		//console.log("Selecting Module " + moduleCode);
		module = modules.find(function(element)
		{
			return element.moduleCode == moduleCode;
		});
		toggleModule(module);
		module.locked = true;
	});

	lockedModules.forEach(function(moduleCode)
	{
		//console.log("Locking Module " + moduleCode);
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

		setModuleListeners();
	})
})
