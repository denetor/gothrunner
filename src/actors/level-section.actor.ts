import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {GameConstants} from "@/game-constants";

export class LevelSectionActor extends Actor {



    constructor() {
        super({
            width: 100,
            height: GameConstants.viewport.y,
            anchor: vec(0,0),
            color: Color.Transparent,
            // color: Color.DarkGray.darken(0.75),
        });
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        this.addTag('section');

        // child actors
        const floor = new Actor({
            width: this.width,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        this.addChild(floor);
        for (let i = 0; i < 4; i++) {
            const decoration = new Actor({
                width: floor.width * 0.05,
                height: 5,
                anchor: vec(0, 0),
                pos: vec(floor.width * 0.25 * i, this.height * 0.75),
                color: Color.White,
            });
            this.addChild(decoration);
        }
    }
}
