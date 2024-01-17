(function(){
window.addEventListener('load', function(){
	var sourceControlId = 110705755, /** ID OF Last Official day with ACP **/
	targetControlId = 111435706 /** ID OF Date to route results **/
	
	window.alert("I got called");

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();