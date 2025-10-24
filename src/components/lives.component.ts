import {Component} from "excalibur";


/**
 * Component that contains the number of lives of an actor.
 */
export class LivesComponent extends Component {
    protected _maxLives: number;
    protected _lives: number;

    constructor(lives: number = 3) {
        super();
        this._maxLives = lives;
        this._lives = lives;
    }


    public set maxLives(maxLives: number) {
        this._maxLives = maxLives;
        if (this._lives > this._maxLives) {
            this._lives = this._maxLives;
        }
    }
    public get maxLives(): number {
        return this._maxLives;
    }


    public set lives(lives: number) {
        this._lives = lives;
    }
    public get lives(): number {
        return this._lives;
    }


    public add(n: number): number {
        this._lives += n;
        if (this._lives > this._maxLives) {
            this._lives = this._maxLives;
        }
        if (this._lives < 0) {
            this._lives = 0;
        }
        return this._lives;
    }
}
