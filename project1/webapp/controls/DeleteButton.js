sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";
	return Button.extend("project1.controls.DeleteButton", {
		metadata: {
			dnd: {
				droppable: true
			}
		},
		renderer: {}
	});
});