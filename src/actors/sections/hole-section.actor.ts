import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";

export class HoleSectionActor extends LevelSectionActor {


    constructor() {
        super({
            width: 120,
            height: GameConstants.viewport.y,
            anchor: vec(0,0),
            color: Color.Transparent,
            // color: Color.DarkGray.darken(0.75),
        });
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // child actors
        const floor = new Actor({
            width: this.width * 0.6,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        this.addChild(floor);
    }
}
