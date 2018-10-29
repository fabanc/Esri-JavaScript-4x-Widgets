/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

//Esri
import Accessor = require("esri/core/Accessor");
import {declared, property, subclass} from "esri/core/accessorSupport/decorators";
import FeatureLayer = require("esri/layers/FeatureLayer");
import MapView = require('esri/views/MapView');
import GraphicsLayer = require("esri/layers/GraphicsLayer");

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

}
export = SpatialSelectionViewModel;