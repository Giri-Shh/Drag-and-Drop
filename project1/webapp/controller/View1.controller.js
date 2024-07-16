sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                let a ={
                    "a":"hello",
                    "b":"Hi"
                }

                let oModel= new sap.ui.model.JSON.JSONModel()
                oModel.setData(a)
                sap.ui.getCore().setModel(oModel,"modelName")


            },
            onDrop:function(oEvent){
                debugger
                var bindingContext=parseInt(oEvent.getParameters('dragSession').draggedControl.getBindingContextPath().split('/')[2]);
                var oEmpModel=this.getOwnerComponent().getModel("data");
                var oEmpModelData=oEmpModel.getData().fruits
                oEmpModelData.splice(bindingContext,1);
                oEmpModel.setProperty('/content',oEmpModelData);
                
                oEmpModel.refresh();
                MessageBox.success("fruits record deleted!");
            }
        })

        
    });
