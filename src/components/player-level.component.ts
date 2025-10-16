import {Component} from "excalibur";

export class PlayerLevelComponent extends Component {
    protected _level: number;


    constructor() {
        super();
        this._level = 1;
    }


    public set level(level: number) {
        this._level = level;
    }
    public get level(): number {
        return this._level;
    }
}
