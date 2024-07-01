import {Canvas} from "./Canvas";
import {EntityData} from "@/entities/entity";

export class EntityCanvas extends Canvas {
    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement);
    }

    drawEntity(entity: EntityData) {
        this.drawCircle(entity.coordinates.x, entity.coordinates.y, 3, {
            fillColor: 'black'
        });
        this.drawText(entity.coordinates.x, entity.coordinates.y + 20, entity.name, true, {
            font: '16px Arial',
            fillColor: 'black'
        })
    }
}