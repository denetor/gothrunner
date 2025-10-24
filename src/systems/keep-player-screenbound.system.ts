import {System, SystemPriority, SystemType, World} from "excalibur";
import {GameConstants} from "@/game-constants";

/**
 * System that maintains the player within the visible screen
 */
export class KeepPlayerScreenboundSystem extends System {
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
                if (player.pos.x < 0) {
                    player.pos.x = 0;
                }
                if (player.pos.y < 0) {
                    player.pos.y = 0;
                }
                if (player.pos.x > GameConstants.viewport.x) {
                    player.pos.x = GameConstants.viewport.x;
                }
                if (player.pos.y > GameConstants.viewport.y) {
                    player.pos.y = GameConstants.viewport.y;
                }
            }
        }
    }
}
