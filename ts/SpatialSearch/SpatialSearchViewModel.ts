/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

//Esri
import Accessor = require("esri/core/Accessor");
import {declared, property, subclass} from "esri/core/accessorSupport/decorators";
import FeatureLayer = require("esri/layers/FeatureLayer");
import FeatureSet = require('esri/tasks/support/FeatureSet');
import MapView = require('esri/views/MapView');
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import watchUtils =  require("esri/core/watchUtils");


import arrayUtils = require('dojo/_base/array');
import lang  = require("dojo/_base/lang");



import SearchResult = require("./SearchResult");


class SpatialSelectionViewModel extends declared(Accessor){

    @property()
    view:MapView = null;

    //Just like the search widget, it can have only one selected result at a time.
    @property()
    searchResult:SearchResult = null;

    @property()
    searchLayer:FeatureLayer = null;

    @property()
    resultLayer:GraphicsLayer = null;

    @property()
    drawingLayer:GraphicsLayer;

    private search(){
        this.resultLayer.removeAll();    
    }

    private getResults(response:FeatureSet){

    }

    private promiseRejected(err:any){
        console.error("Promise rejected: ", err.message);
    }

}
export = SpatialSelectionViewModel;