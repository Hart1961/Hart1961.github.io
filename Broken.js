(function(){
window.addEventListener('load', function(){
	var sourceControlId = 111041865, /** ID OF THE SENDER CONTROL **/
	targetControlId = 111045282 /** ID OF THE RECEIVER CONTROL **/
	

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();
(function(){
window.addEventListener('load', function(){
	var sourceControlId = 111073787, /** ID OF THE SENDER CONTROL **/
	targetControlId = 111115973 /** ID OF THE RECEIVER CONTROL **/
	

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		if (sourceControlInstance.getValue() === "Me, I'm a doctor") {
			targetControlInstance.setValue( "High" );
		}
		if (sourceControlInstance.getValue() === "Someone else who is a doctor") {
			targetControlInstance.setValue( "High");
		}	
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();