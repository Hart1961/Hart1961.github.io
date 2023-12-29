(function(){
window.addEventListener('load', function(){
	var sourceControlId = 111041865, /** ID SOURCE FIELD **/
	targetControlId = 111045282, 	/** ID OF TARGET FIELD **/
	
	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);
	
	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});
	
	targetControlInstance.setValue( sourceControlInstance.getValue() );
	
});
})();
