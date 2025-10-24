import {Actor, CollisionType, Color, Engine, Scene, vec} from "excalibur";
import {GameConstants} from "@/game-constants";
import {PlayerActor} from "@/actors/player/player.actor";
import {LevelSectionActor} from "@/actors/level-section.actor";
import {SectionSpawnSystem} from "@/systems/section-spawn.system";
import {FreePastSectionSystem} from "@/systems/free-past-section.system";
import {KeepPlayerScreenboundSystem} from "@/systems/keep-player-screenbound.system";
import {DetectPlayerFalldownSystem} from "@/systems/detect-player-falldown.system";
import {DetectPlayerLeftBehindSystem} from "@/systems/detect-player-leftbehind.system";

export class RunScene extends Scene {
    player: PlayerActor = null;


    constructor() {
        super();
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        this.backgroundColor = Color.Black;

        // add systems
        this.world.add(SectionSpawnSystem);
        this.world.add(FreePastSectionSystem);
        this.world.add(KeepPlayerScreenboundSystem);
        this.world.add(DetectPlayerFalldownSystem);
        this.world.add(DetectPlayerLeftBehindSystem);

        // add player
        this.player = new PlayerActor();
        this.player.pos = vec(GameConstants.screenCenter.x, GameConstants.screenCenter.y);
        this.add(this.player);
    }




    // onPostUpdate(engine: Engine, elapsedMs: number) {
    //
    // }
}
