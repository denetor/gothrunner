import {Actor, Color, Engine, Scene, vec} from "excalibur";
import {GameConstants} from "@/game-constants";
import {PlayerActor} from "@/actors/player/player.actor";

export class RunScene extends Scene {
    player: PlayerActor = null;


    constructor() {
        super();
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // TODO add systems

        // add player
        this.player = new PlayerActor();
        this.player.pos = vec(GameConstants.screenCenter.x, GameConstants.screenCenter.y);
        this.add(this.player);

        // add temporary pavement platform
        const pavement = new Actor({
            pos: vec(GameConstants.screenCenter.x, GameConstants.viewport.y - 50),
            width: GameConstants.viewport.x,
            height: 10,
            color: Color.White
        });
        this.add(pavement);
    }
}
