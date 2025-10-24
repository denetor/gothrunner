import {System, SystemPriority, SystemType, World} from "excalibur";
import {GameConstants} from "@/game-constants";

export class DetectPlayerFalldownSystem extends System {
    protected query: any;
    public priority = SystemPriority.Lower;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.queryTags(['player']);
    }


    public update(delta: number) {
        if (this.query && this.query.entities && this.query.entities.length > 0) {
            for (const player of this.query.entities) {
                if (player.pos.y >= GameConstants.viewport.y) {
                    console.log('Player dead: fallen down!');
                }
            }
        }
    }
}
