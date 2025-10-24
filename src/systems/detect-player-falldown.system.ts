import {Actor, Query, System, SystemPriority, SystemType, World} from "excalibur";
import {GameConstants} from "@/game-constants";
import {HpComponent} from "@/components/hp.component";

export class DetectPlayerFalldownSystem extends System {
    query: Query<typeof HpComponent>;
    public priority = SystemPriority.Lower;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.query([HpComponent]);
    }


    public update(delta: number) {
        if (this.query && this.query.entities) {
            for (const actor of this.query.entities) {
                const hpComponent = actor.get(HpComponent);
                if ((actor as Actor).pos.y >= GameConstants.viewport.y) {
                    hpComponent.hp = 0;
                }
            }
        }
    }
}
