import Extent = require("esri/geometry/Extent");
import Graphic = require("esri/Graphic");

import Accessor = require("esri/core/Accessor");
import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

@subclass("esricustom.utils.SearchResult")
class SearchResult extends declared(Accessor){

    @property()
    public extent:Extent = null;

    @property()
    feature:Graphic = null;

    @property()
    name:string = null

    constructor(extent:Extent, feature:Graphic, name:string){
        super();
        this._set("extent", extent);
        this._set("feature", feature);
        this._set("name", name);
    }

}
export = SearchResult;