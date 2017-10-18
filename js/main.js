let modules = [
	new Module("6CCS3PRJ", "Individual Project", "6CCS3PRJ", 30, false, false, false, false),
	new Module("6CCS3AMS", "Agents and Multi-Agent Systems", "6CCS3AMS", 15, false, false, false, true),
	new Module("6CCS3CSL", "Computer Science Logic", "6CCS3CSL", 15, false, false, false, true),
	new Module("6CCS3CIS", "Cryptography and Information Security", "6CCS3CIS", 15, false, false, false, true)
];

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

$(document).ready(function()
{
	console.log("Ready!");
	modules.forEach(function(module)
	{
		//Get HTML Element and add onClick listener
		$("#" + module.elementId).click(function()
		{
			console.log("Toggled " + module.moduleCode);
			//If clicked mark the module as selected
			$("#" + module.elementId).toggleClass("selected");
			module.selected = !module.selected;
			printSelectedModules();
		});

	});
})