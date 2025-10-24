import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {FlatSectionActor} from "@/actors/sections/flat-section.actor";

export class StairsSectionActor extends FlatSectionActor {



    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // child actors
        for (let i = 0; i < 4; i++) {
            const obstacle = new Actor({
                width: 20,
                height: 10,
                anchor: vec(0, 0),
                pos: vec(i * 20, this.height * 0.75 - 40 - i * 10),
                collisionType: CollisionType.Fixed,
                color: Color.White,
            });
            obstacle.addTag('walkable');
            this.addChild(obstacle);
        }
    }
}
