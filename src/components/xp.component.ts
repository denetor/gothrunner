import {Component} from "excalibur";

export class XpComponent extends Component {
    protected _xp: number;
    protected _previousXp: number;


    constructor() {
        super();
        this._xp = 0;
        this._previousXp = this._xp;
    }


    public set xp(xp: number) {
        this._previousXp = this._xp;
        this._xp = xp;
    }
    public get xp(): number {
        return this._xp;
    }


    public get previousXp(): number {
        return this._previousXp;
    }
}
