(function(){
window.addEventListener('load', function(){
	var sourceControlId = 110705755, /** ID OF Last Official day with ACP **/
	targetControlId = 111435706; /** ID OF Date to route results **/
	var d = new Date();
	
	window.alert("Call 6");
	window.alert(d);

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		
		window.alert( sourceControlInstance.getValue());
		
		targetControlInstance.setValue( d.getValue());
		/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
	});
		targetControlInstance.setValue( d.getValue());
	/* targetControlInstance.setValue( sourceControlInstance.getValue()); */
});
})();