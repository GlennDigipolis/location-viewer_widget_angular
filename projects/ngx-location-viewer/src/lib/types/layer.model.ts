import { LayerLegendInfo } from './mapserver/legend-response/layer-legend-info.model';

export interface Layer {
    id?: number;
    name: string;
    visible: boolean;
    layers?: Layer[];
    legend?: LayerLegendInfo[];
    styleField?: string;
    colors?: LayerColor[];
}

export interface LayerColor {
    fillColor: string;
    color: string;
    weight: number;
    fill?: boolean;
    value: string;
}
