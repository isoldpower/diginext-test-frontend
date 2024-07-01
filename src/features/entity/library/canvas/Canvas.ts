import {DrawConfig} from "./types";

export class Canvas{
    constructor(canvasElement: HTMLCanvasElement, paddingX?: number) {
        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d');
        canvasElement.width = window.innerWidth - (paddingX ?? 24) * 2;
        canvasElement.height = window.innerHeight;
    }

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCircle(x: number, y: number, radius: number, config?: DrawConfig) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        this.context.fillStyle = config?.fillColor;
        this.context.strokeStyle = config?.strokeColor;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    drawText(x: number, y: number, text: string, fill?: boolean, config?: DrawConfig) {
        this.context.font = config?.font;
        this.context.strokeStyle = config?.strokeColor;
        this.context.fillStyle = config?.fillColor;
        fill
            ? this.context.fillText(text, x, y)
            : this.context.strokeText(text, x, y);

        this.context.fillText(text, x, y);
    }
}