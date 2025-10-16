import {Actor, Color, Engine, Scene, vec} from "excalibur";
import {Player} from "@/player";
import {GameConstants} from "@/game-constants";

export class RunScene extends Scene {
    player: Player = null;


    constructor() {
        super();
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // TODO add systems

        // add player
        this.player = new Player();
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
