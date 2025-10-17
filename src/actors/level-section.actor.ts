import {Actor, CollisionType, Color, Engine, vec} from "excalibur";

export class LevelSectionActor extends Actor {



    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        this.addTag('section');
    }
}
