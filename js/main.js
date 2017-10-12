let modules = [
	new Module("6CCS3PRJ", "Individual Project", "6CCS3PRJ", 30, false, false, false, false),
	new Module("6CCS3AMS", "Agents and Multi-Agent Systems", "6CCS3AMS", 15, false, false, false, true)
];

$(document).ready(function()
{
	modules.forEach(function(module)
	{
		//Get HTML Element and add onClick listener
		$("#" + module.elementId).click(function()
		{
			console.log("Selected " + module.moduleCode);
			//If clicked mark the module as selected
			$("#" + module.elementId).toggleClass("selected");
			module.selected = !module.selected;
			//TODO: Add to List of selected modules
		});

	});
})