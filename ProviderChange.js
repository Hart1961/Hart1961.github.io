(function(){
window.addEventListener('load', function(){
	var sourceControlId = 110705761, /* ID OF number of days for access */
		dateSourceControlId = 110705755, /* ID OF Last Official day with ACP */
		targetControlId = 111435706; /** ID OF Date to route results **/
	var n = 0;
	var s = "";
	
	
	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	dateSourceControlInstance = loader.getEngine().getDocument().getElementById(dateSourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		window.alert("1");
		window.alert(sourceControlInstance.getProperty('value.value'));
		n = sourceControlInstance.getProperty('value.value');
		window.alert(n);
		s = dateSourceControlInstance.getProperty('value.value');
		window.alert(s);
		d = new Date(s);
		window.alert(d);
		d.setDate(d.getDate() + n);
		window.alert(d);
		/* window.alert(dateSourceControlInstance.getProperty('value.value'));
		/* targetControlInstance.setValue( d.getValue());
		/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
	});
		/* targetControlInstance.setValue( d.getValue());
	/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
});
})();