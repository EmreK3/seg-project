let modules = [
	new Module("6CCS3PRJ", "Individual Project", "6CCS3PRJ", 30, false, false, false, false),
	new Module("6CCS3AMS", "Agents and Multi-Agent Systems", "6CCS3AMS", 15, false, false, false, true),
	new Module("6CCS3CFL", "Compiler and Formal Languages", "6CCS3CFL", 15, true, false, true, false),
	new Module("6CCS3COV", "Computer Vision", "6CCS3COV", 15, false, false, false, true),
	new Module("6CCS3CSL", "Computer Science Logic", "6CCS3CSL", 15, false, false, false, false),
	new Module("6CCS3HCI", "Human-Computer Interaction", "6CCS3HCI", 15, false, false, true, false),
	new Module("6CCS3VER", "Formal Verification", "6CCS3VER", 15, false, false, true, false),
	new Module("6CCS3WSN", "Algorithms for the World Wide Web and Social Networks", "6CCS3WSN", 15, false, false, true, false),
	new Module("6CCS3SMT", "Software Measurement and Testing", "6CCS3SMT", 15, false, false, true, false),
	new Module("6CCS3GRS", "Computer Graphics Systems", "6CCS3GRS", 15, false, true, false, false),
	new Module("6CCS3PAL", "Parallel Algorithms", "6CCS3PAL", 15, true, true, true, false),
	new Module("6CCS3AIN", "Artificial Intelligence", "6CCS3AIN", 15, false, false, false, true),
	new Module("6CCS3CIS", "Cryptography and Information Security", "6CCS3CIS", 15, false, false, false, true),
	new Module("6CCS3AIP", "Artificial Intelligence Planning", "6CCS3AIP", 15, false, false, false, true),
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

$(document).ready(function()
{
	console.log("Ready!");
	modules.forEach(function(module)
	{

		$("#" + module.elementId + "> td.expand").click(function(e)
		{
			e.stopPropagation();
			console.log("Toggled " + module.moduleCode + " Description");
			//If clicked toggle description and button
			if($("#" + module.elementId + "> td.expand").text() == "+")
			{
				$("#" + module.elementId + "> td.expand").text("-");
				$("#" + module.elementId + "_description").removeClass("hidden");
			}else
			{
				$("#" + module.elementId + "> td.expand").text("+");
				$("#" + module.elementId + "_description").addClass("hidden");
			}
		});

		$("#" + module.elementId).click(function()
		{
			console.log("Toggled " + module.moduleCode);
			//If clicked mark the module as selected
			$("#" + module.elementId).toggleClass("selected");
			$("#" + module.elementId + "_description").toggleClass("selected");
			module.selected = !module.selected;
			printSelectedModules();
		});



	});
})
