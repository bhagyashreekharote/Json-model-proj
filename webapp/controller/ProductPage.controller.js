sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("jsonmodeldemo.controller.ProductPage", {
        onInit: function () {
            var oJSONModel = new sap.ui.model.json.JSONModel();
            //Setting Local Model to controller and view
            this.getView().setModel(oJSONModel,"LocalJSONModel");

            //Setting Global Model on component level
            this.getOwnerComponent().setModel(oJSONModel,"GlobalJSONModel");
        },
        getJSONModel: function () {
            //How to get model inside manifest
          var oModel = this.getOwnerComponent().getModel('ProductJSONModel');

          //setting new property inside model
          oModel.setProperty("/sampleProperty",{Name:'John',Age: 25, gender:'Male'});

          //Get Property data from Model
          var oSampleData = oModel.setProperty("/sampleProperty");
          
          //Get Entire Data from Model
          var oAllData = oModel.getData();
        }
    });
});
