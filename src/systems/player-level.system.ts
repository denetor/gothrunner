import {Query, System, SystemPriority, SystemType, World} from "excalibur";
import {XpComponent} from "@/components/xp.component";
import {PlayerLevelComponent} from "@/components/player-level.component";
import {LevelThresholdService} from "@/services/level-threshold.service";

export class PlayerLevelSystem extends System {
    private levelThresholdService: LevelThresholdService;
    query: Query<typeof XpComponent | typeof PlayerLevelComponent>;
    public priority = SystemPriority.Lower;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.query([XpComponent, PlayerLevelComponent]);
        this.levelThresholdService = new LevelThresholdService();
    }



    public update(delta: number) {
        for (let actor of this.query.entities) {
            const xpComponent = actor.get(XpComponent);
            const playerLevelComponent = actor.get(PlayerLevelComponent);
            if (this.levelThresholdService.isLevelUp(playerLevelComponent.level + 1, xpComponent.previousXp, xpComponent.xp)) {
                // TODO manage level up
                console.log('LEVEL UP!');
            }
        }
    }


}
