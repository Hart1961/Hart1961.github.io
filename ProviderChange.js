(function(){
window.addEventListener('load', function(){
	var sourceControlId = 110705761, /* ID OF number of days for access */
		dateSourceControlId = 110705755, /* ID OF Last Official day with ACP */
		targetControlId = 111435706; /** ID OF Date to route results **/
	var n = 0; /* Will be our number of days for access */
	var s = ""; /* Will be our new date to route results */
	
	
	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	dateSourceControlInstance = loader.getEngine().getDocument().getElementById(dateSourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		window.alert("2");
		n = sourceControlInstance.getProperty('value.value');
		window.alert(n);
		s = dateSourceControlInstance.getProperty('value.value');
		window.alert(s.valueOf());
		d = new Date(s);
		window.alert("Now we add");
		d.setDate(d.getDate() + n); /*  */
		s = d.toISOString().split("T")[0];
		window.alert(s);
		targetControlInstance.setValue(s);
		/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
	});
	targetControlInstance.setValue(s));
	/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
});
})();