class Module
{
	/*let moduleCode;
	let moduleName;
	let elementId;
	let creditValue;
	let isPcc;
	let isIs;
	let isSe;
	let isAi;
	let selected = false;*/

	constructor(moduleCode, moduleName, creditValue, isPcc, isIs, isSe, isAi){
		this.moduleCode = moduleCode;
		this.moduleName = moduleName;
		this.creditValue = creditValue;
		this.isPcc = isPcc;
		this.isIs = isIs;
		this.isSe = isSe;
		this.isAi = isAi;
		this.selected = false;
		this.locked = false;
	}
}
