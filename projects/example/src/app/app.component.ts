import { Component, OnInit } from '@angular/core';
import {
    FilterLayerOptions,
    GeofeatureDetail,
    OperationalLayerOptions,
    SupportingLayerOptions,
} from 'projects/ngx-location-viewer/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    result: GeofeatureDetail[];
    showLayerManagement = true;
    supportingLayerOptions: SupportingLayerOptions = {
        url: 'http://geodata.antwerpen.be/arcgissql/rest/services/P_ToK/P_Tok_routeweek/Mapserver',
        layerIds: [143, 144, 145, 146, 147],
    };

    operationalLayerOptions: OperationalLayerOptions = {
        url: 'https://geoint.antwerpen.be/arcgissql/rest/services/P_Stad/Mobiliteit/Mapserver',
        layerId: 2,
        enableClustering: true,
    };

    filterLayerOptions: FilterLayerOptions = {
        url: 'http://geodata.antwerpen.be/arcgissql/rest/services/P_ToK/P_Tok_routeweek/Mapserver',
        layerId: 78,
        popupLabel: 'Routenaam',
        propertyToDisplay: 'Routenaam',
    };

    // supportingLayerOptions: SupportingLayerOptions = {
    //   url: 'https://geoint.antwerpen.be/arcgissql/rest/services/P_Stad/Mobiliteit/Mapserver',
    //   layerIds: [38, 42, 65]
    // };

    ngOnInit() {}

    updateResult(result: GeofeatureDetail[]) {
        console.log(result);
        this.result = result;
    }
}
