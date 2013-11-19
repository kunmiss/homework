function find(classname)
{
	var getname = document.getElementsByTagName('*');
	var result = new Array();
	for(var i=0;i< getname.length;i++)
	{
		if (getname[i].className == classname) {
			var x = getname[i];
			result.push(x);
		};
	}
	return result;
}