import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {FlatSectionActor} from "@/actors/sections/flat-section.actor";

export class TwoLevelsSectionActor extends FlatSectionActor {


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // child actors
        const upperFloor = new Actor({
            width: this.width,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.5),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        upperFloor.addTag('walkable');
        this.addChild(upperFloor);
    }
}
