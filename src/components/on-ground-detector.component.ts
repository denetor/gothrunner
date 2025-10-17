import {Component} from "excalibur";

export class OnGroundDetectorComponent extends Component {
    protected _onGround: boolean;


    public get onGround(): boolean {
        return this._onGround;
    }


}
