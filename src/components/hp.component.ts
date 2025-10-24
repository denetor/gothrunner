import {Component} from "excalibur";


/**
 * Represents a component for managing health points (HP).
 * This class stores the maximum HP and current HP for an entity and provides
 * functionality to manipulate and retrieve health values while ensuring constraints.
 */
export class HpComponent extends Component {
    protected _maxHp: number;
    protected _hp: number;

    constructor(hp: number = 100) {
        super();
        this._maxHp = hp;
        this._hp = hp;
    }


    public set maxHp(maxHp: number) {
        this._maxHp = maxHp;
        if (this._hp > this._maxHp) {
            this._hp = this._maxHp;
        }
    }
    public get maxHp(): number {
        return this._maxHp;
    }


    public set hp(hp: number) {
        this._hp = hp;
    }
    public get hp(): number {
        return this._hp;
    }


    /**
     * Adds a value to the current health points (_hp) of an object.
     * Ensures that _hp does not exceed the maximum health points (_maxHp) or fall below zero.
     *
     * @param {number} n - The value to be added to the current health points.
     * @return {number} - The updated health points after the addition and constraints applied.
     */
    public add(n: number): number {
        this._hp += n;
        if (this._hp > this._maxHp) {
            this._hp = this._maxHp;
        }
        if (this._hp < 0) {
            this._hp = 0;
        }
        return this._hp;
    }
}
