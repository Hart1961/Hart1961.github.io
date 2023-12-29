<<<<<<< HEAD
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

function setPriority() {
	var sourceControlId = 111090343, /** ID OF IMPACTED USERS FIELD **/
	targetControlId = 111115973 	/** ID OF PRIORITY FIELD **/
	var result1 = loader.engine.document.getElementById(sourceControlId).getProperty('value.value'); 
	
	loader.engine.document.getElementById(111115973).setValue(({"value": "High"})); 
};

window.onclick = roundResult;

