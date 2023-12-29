(function(){
window.addEventListener('load', function(){
	var sourceControlId = 111041865, /** ID SOURCE FIELD **/
	targetControlId = 111045282, 	/** ID OF TARGET FIELD **/
	
	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);
	
	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});
	
    sourceControlInstance2 = loader.getEngine().getDocument().getElementById(111115973);
	targetControlInstance2 = loader.getEngine().getDocument().getElementById(111117248);

	sourceControlInstance2.on('value-change', function(){
		targetControlInstance2.setValue( sourceControlInstance2.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
	targetControlInstance2.setValue( sourceControlInstance2.getValue() );
	
	
});

})();


