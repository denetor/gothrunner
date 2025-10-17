import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {FlatSectionActor} from "@/actors/sections/flat-section.actor";

export class ObstacleSectionActor extends FlatSectionActor {


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // child actors
        const obstacle = new Actor({
            width: 20,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(this.width * 0.5 - 10, this.height * 0.75 - 40),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        this.addChild(obstacle);
    }
}
