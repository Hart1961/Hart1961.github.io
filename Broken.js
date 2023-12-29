(function(){
window.addEventListener('load', function(){
	var requestorControlId = 111041865, /** ID REQUESTOR **/
	affectedControlId = 111045282, 	/** ID OF AFFECTED USER FIELD, USUALLY SAME AS REQUESTOR **/
	isDoctorControlId = 111073787,  /** ID OF WHO THIS TICKET IS FOR, WE WILL CHECK THIS FOR DOCTOR **/
	impactControlId = 111090343,    /** ID OF NUMBER IMPACTED, WE WILL CHECK THIS FOR MORE THAN 1 USER **/
	priorityControlId = 111115973   /** ID OF PRIORITY, WE WILL SET THIS BASED ON CRITERIA **/

	sourceControlInstance = loader.getEngine().getDocument().getElementById(requetorControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(affectedControlId);
	isDoctorControlInstance = loader.getEngine().getDocument().getElementById(isDoctorControlId);
	impactControlInstance = loader.getEngine().getDocument().getElementById(impactControlId);
	priorityControlInstance = loader.getEngine().getDocument().getElementById(priorityControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
		priorityControlInstance.setValue(sourceControlInstance.getValue());
	});
 
    isDoctorControlInstance.on('value-change', function() {
		s = isDoctorControlInstance.getValue();
		if (s.indexOf("doctor") !== -1) {
			priorityControlInstance.setValue("High");
		}
	});
	
	targetControlInstance.setValue( sourceControlInstance.getValue() );
	
	
});
})();
