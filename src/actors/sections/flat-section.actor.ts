import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";

export class FlatSectionActor extends LevelSectionActor {


    constructor() {
        super({
            width: 100,
            height: GameConstants.viewport.y,
            anchor: vec(0,0),
            color: Color.Transparent,
            collisionType: CollisionType.PreventCollision,
        });
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // child actors
        const floor = new Actor({
            width: this.width,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 20),
            collisionType: CollisionType.Fixed,
            color: Color.White.darken(Math.random()*0.8),
        });
        floor.addTag('walkable');
        this.addChild(floor);
    }
}
