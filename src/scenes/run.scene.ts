import {Actor, CollisionType, Color, Engine, Scene, vec} from "excalibur";
import {GameConstants} from "@/game-constants";
import {PlayerActor} from "@/actors/player/player.actor";

export class RunScene extends Scene {
    player: PlayerActor = null;


    constructor() {
        super();
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        this.backgroundColor = Color.Black;

        // TODO add systems

        // add player
        this.player = new PlayerActor();
        this.player.pos = vec(GameConstants.screenCenter.x, GameConstants.screenCenter.y);
        this.add(this.player);

        // add temporary pavement platform
        const pavement = new Actor({
            pos: vec(GameConstants.screenCenter.x, GameConstants.viewport.y * 0.75),
            width: GameConstants.viewport.x,
            height: 20,
            color: Color.White,
            collisionType: CollisionType.Fixed,
        });
        this.add(pavement);
    }
}
