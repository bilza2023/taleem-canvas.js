import DrawModule from "../core/DrawModule.js";
import EventModule from "../core/EventModule.js";
import InputModule from "../core/InputModule.js";
import Add from "./Add.js";

export default class TaleemCanvas {
    constructor(canvasId,items=[],assets={}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.items = items;
        this.assets = assets;
        this.add = new Add(this.items); //reference to this.items 
        this.drawModule = new DrawModule(this.ctx, this.canvas, {}, {});
        this.eventModule = new EventModule(this.canvas, this.items);
        this.inputModule = new InputModule();

    }

    addItem(item) {
        this.items.push(item);
        this.drawModule.draw(this.items);
    }

    onMouse(eventType, callback) {
        this.eventModule.on(eventType, callback);
    }

    onKey(eventType, callback) {
        this.inputModule.on(eventType, callback);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    redraw() {
        this.clear();
        this.drawModule.draw(this.items);
    }
}
